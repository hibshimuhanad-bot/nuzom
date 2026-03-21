import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Nzom Labs"

interface ContactConfirmationProps {
  company_name?: string
}

const ContactConfirmationEmail = ({ company_name }: ContactConfirmationProps) => (
  <Html lang="ar" dir="rtl">
    <Head />
    <Preview>شكراً لتواصلك مع {SITE_NAME}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          {company_name ? `شكراً لك، ${company_name}!` : 'شكراً لتواصلك معنا!'}
        </Heading>
        <Text style={text}>
          تم استلام رسالتك بنجاح. سيقوم فريقنا بالرد عليك في أقرب وقت ممكن.
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          مع تحيات فريق {SITE_NAME}
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmationEmail,
  subject: 'شكراً لتواصلك مع Nzom Labs',
  displayName: 'تأكيد استلام رسالة التواصل',
  previewData: { company_name: 'شركة تجريبية' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '30px 25px', maxWidth: '560px', margin: '0 auto' }
const h1 = { fontSize: '22px', fontWeight: 'bold' as const, color: '#1a1a2e', margin: '0 0 20px', textAlign: 'right' as const }
const text = { fontSize: '15px', color: '#55575d', lineHeight: '1.7', margin: '0 0 20px', textAlign: 'right' as const }
const hr = { borderColor: '#e5e7eb', margin: '24px 0' }
const footer = { fontSize: '13px', color: '#999999', margin: '0', textAlign: 'right' as const }
