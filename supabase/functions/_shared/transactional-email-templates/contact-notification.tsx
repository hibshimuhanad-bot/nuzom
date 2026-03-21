/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Text, Section, Hr,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = "Nzom Labs"

interface ContactNotificationProps {
  company_name?: string
  email?: string
  phone?: string
  product?: string
  message?: string
}

const DataCard = ({ label, value }: { label: string; value: string }) => (
  <Section style={dataCard}>
    <Text style={dataLabel}>{label}</Text>
    <Text style={dataValue}>{value}</Text>
  </Section>
)

const ContactNotificationEmail = ({ company_name, email, phone, product, message }: ContactNotificationProps) => (
  <Html lang="ar" dir="rtl">
    <Head />
    <Preview>رسالة جديدة من {company_name || 'زائر'} عبر نموذج التواصل</Preview>
    <Body style={main}>
      <Container style={container}>
        {/* Gradient Header */}
        <Section style={header}>
          <Text style={headerText}>{SITE_NAME}</Text>
          <Text style={headerSubtitle}>📩 رسالة جديدة من نموذج التواصل</Text>
        </Section>

        {/* Data Cards */}
        <Section style={cardsContainer}>
          <DataCard label="اسم الشركة" value={company_name || '—'} />
          <DataCard label="البريد الإلكتروني" value={email || '—'} />
          <DataCard label="رقم الهاتف" value={phone || '—'} />
          <DataCard label="المنتج" value={product || '—'} />
          <DataCard label="الرسالة" value={message || '—'} />
        </Section>

        <Hr style={hr} />
        <Text style={footer}>
          هذا الإشعار مرسل تلقائياً من موقع {SITE_NAME}
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactNotificationEmail,
  subject: (data: Record<string, any>) => `رسالة جديدة من ${data.company_name || 'زائر'}`,
  to: 'info@nzomlabs.com',
  displayName: 'Contact form notification (admin)',
  previewData: {
    company_name: 'شركة تجريبية',
    email: 'test@example.com',
    phone: '+966500000000',
    product: 'tasks',
    message: 'نحتاج نظام إدارة مهام لفريقنا',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { maxWidth: '560px', margin: '0 auto', padding: '0' }
const header = {
  background: 'linear-gradient(135deg, #2563EB 0%, #22D3EE 100%)',
  padding: '24px 30px',
  borderRadius: '12px 12px 0 0',
  textAlign: 'center' as const,
}
const headerText = {
  color: '#ffffff',
  fontSize: '22px',
  fontWeight: 'bold' as const,
  margin: '0 0 6px',
  letterSpacing: '1px',
}
const headerSubtitle = {
  color: 'rgba(255,255,255,0.9)',
  fontSize: '14px',
  margin: '0',
}
const cardsContainer = {
  padding: '20px 24px',
}
const dataCard = {
  backgroundColor: '#F8FAFC',
  border: '1px solid #E2E8F0',
  borderRadius: '8px',
  padding: '12px 16px',
  marginBottom: '10px',
}
const dataLabel = {
  fontSize: '12px',
  color: '#2563EB',
  fontWeight: 'bold' as const,
  margin: '0 0 4px',
  textAlign: 'right' as const,
}
const dataValue = {
  fontSize: '15px',
  color: '#1E293B',
  margin: '0',
  lineHeight: '1.5',
  textAlign: 'right' as const,
}
const hr = { borderColor: '#E2E8F0', margin: '4px 24px 16px' }
const footer = {
  fontSize: '11px',
  color: '#94A3B8',
  margin: '0 24px 20px',
  textAlign: 'center' as const,
}
