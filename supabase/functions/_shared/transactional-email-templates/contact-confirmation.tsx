import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Hr, Section,
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
        {/* Gradient Header */}
        <Section style={header}>
          <Text style={headerText}>{SITE_NAME}</Text>
        </Section>

        {/* Success Icon */}
        <Section style={iconSection}>
          <Text style={checkIcon}>✓</Text>
        </Section>

        {/* Content Box */}
        <Section style={contentBox}>
          <Heading style={h1}>
            {company_name ? `شكراً لك، ${company_name}!` : 'شكراً لتواصلك معنا!'}
          </Heading>
          <Text style={text}>
            تم استلام رسالتك بنجاح. سيقوم فريقنا بالرد عليك في أقرب وقت ممكن.
          </Text>
        </Section>

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
const container = { maxWidth: '560px', margin: '0 auto', padding: '0' }
const header = {
  background: 'linear-gradient(135deg, #2563EB 0%, #22D3EE 100%)',
  padding: '28px 30px',
  borderRadius: '12px 12px 0 0',
  textAlign: 'center' as const,
}
const headerText = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold' as const,
  margin: '0',
  letterSpacing: '1px',
}
const iconSection = {
  textAlign: 'center' as const,
  padding: '24px 0 8px',
}
const checkIcon = {
  display: 'inline-block' as const,
  width: '52px',
  height: '52px',
  lineHeight: '52px',
  borderRadius: '50%',
  backgroundColor: '#22C55E',
  color: '#ffffff',
  fontSize: '28px',
  fontWeight: 'bold' as const,
  textAlign: 'center' as const,
  margin: '0 auto',
}
const contentBox = {
  backgroundColor: '#F8FAFC',
  borderRadius: '10px',
  padding: '24px 28px',
  margin: '8px 24px 0',
  border: '1px solid #E2E8F0',
}
const h1 = {
  fontSize: '20px',
  fontWeight: 'bold' as const,
  color: '#1a1a2e',
  margin: '0 0 14px',
  textAlign: 'right' as const,
}
const text = {
  fontSize: '15px',
  color: '#475569',
  lineHeight: '1.8',
  margin: '0',
  textAlign: 'right' as const,
}
const hr = { borderColor: '#E2E8F0', margin: '24px 24px' }
const footer = {
  fontSize: '13px',
  color: '#94A3B8',
  margin: '0 24px 24px',
  textAlign: 'right' as const,
}
