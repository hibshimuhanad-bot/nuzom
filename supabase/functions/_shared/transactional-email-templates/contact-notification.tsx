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

const ContactNotificationEmail = ({ company_name, email, phone, product, message }: ContactNotificationProps) => (
  <Html lang="ar" dir="rtl">
    <Head />
    <Preview>رسالة جديدة من {company_name || 'زائر'} عبر نموذج التواصل</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>📩 رسالة جديدة من نموذج التواصل</Heading>
        <Text style={subtitle}>تم استلام رسالة جديدة عبر موقع {SITE_NAME}</Text>
        <Hr style={hr} />

        <Section style={dataSection}>
          <Text style={label}>اسم الشركة</Text>
          <Text style={value}>{company_name || '—'}</Text>
        </Section>

        <Section style={dataSection}>
          <Text style={label}>البريد الإلكتروني</Text>
          <Text style={value}>{email || '—'}</Text>
        </Section>

        <Section style={dataSection}>
          <Text style={label}>رقم الهاتف</Text>
          <Text style={value}>{phone || '—'}</Text>
        </Section>

        <Section style={dataSection}>
          <Text style={label}>المنتج</Text>
          <Text style={value}>{product || '—'}</Text>
        </Section>

        <Section style={dataSection}>
          <Text style={label}>الرسالة</Text>
          <Text style={value}>{message || '—'}</Text>
        </Section>

        <Hr style={hr} />
        <Text style={footer}>هذا الإشعار مرسل تلقائياً من موقع {SITE_NAME}</Text>
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
const container = { padding: '24px 28px', maxWidth: '520px', margin: '0 auto' }
const h1 = { fontSize: '20px', fontWeight: 'bold' as const, color: '#111827', margin: '0 0 8px' }
const subtitle = { fontSize: '14px', color: '#6b7280', margin: '0 0 20px' }
const hr = { borderColor: '#e5e7eb', margin: '16px 0' }
const dataSection = { marginBottom: '12px' }
const label = { fontSize: '12px', color: '#9ca3af', margin: '0 0 2px', fontWeight: 'bold' as const }
const value = { fontSize: '15px', color: '#1f2937', margin: '0', lineHeight: '1.5' }
const footer = { fontSize: '11px', color: '#9ca3af', margin: '20px 0 0', textAlign: 'center' as const }
