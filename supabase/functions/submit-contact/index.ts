import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'authorization, x-client-info, apikey, content-type',
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })

// Basic email regex; intentionally simple.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clip(value: unknown, max: number): string | null {
  if (typeof value !== 'string') return null
  const trimmed = value.trim()
  if (!trimmed) return null
  return trimmed.slice(0, max)
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return json({ error: 'Method not allowed' }, 405)
  }

  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  if (!supabaseUrl || !serviceKey) {
    console.error('Missing Supabase env vars')
    return json({ error: 'Server configuration error' }, 500)
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return json({ error: 'Invalid JSON' }, 400)
  }

  const company_name = clip(body.company_name, 200)
  const email = clip(body.email, 254)
  const phone = clip(body.phone, 40)
  const product = clip(body.product, 80)
  const message = clip(body.message, 4000)

  if (!company_name) return json({ error: 'company_name required' }, 400)
  if (!email || !EMAIL_RE.test(email)) {
    return json({ error: 'valid email required' }, 400)
  }

  const supabase = createClient(supabaseUrl, serviceKey)

  const id = crypto.randomUUID()
  const { error: insertError } = await supabase
    .from('contact_submissions')
    .insert({ id, company_name, email, phone, product, message })

  if (insertError) {
    console.error('contact_submissions insert failed', insertError)
    return json({ error: 'Failed to save submission' }, 500)
  }

  // Fire-and-log both emails; do not block success on email errors.
  const sendEmail = async (
    templateName: string,
    idempotencyKey: string,
    extra: Record<string, unknown> = {},
  ) => {
    const { error } = await supabase.functions.invoke(
      'send-transactional-email',
      {
        body: {
          templateName,
          recipientEmail: email,
          idempotencyKey,
          templateData: { company_name, email, phone, product, message, ...extra },
        },
      },
    )
    if (error) console.error(`send ${templateName} failed`, error)
  }

  await sendEmail('contact-confirmation', `contact-confirm-${id}`)
  await sendEmail('contact-notification', `contact-notify-${id}`)

  return json({ success: true, id })
})
