

# Nzom Laps – Enterprise SaaS Corporate Website

## Overview
A bilingual (Arabic/English) corporate website for Nzom Laps (مختبرات الأنظمة), a Saudi technology studio, showcasing 11 SaaS products under one ecosystem brand. Deep navy (#0B1F33) and electric blue (#2563EB) design system with RTL support.

---

## Pages & Structure

### 1. Shared Layout
- **Navbar**: Logo, nav links (Home, Solutions dropdown, About, Blog, Contact), language toggle (AR/EN), "Request Demo" CTA button
- **Footer**: Company info, product links, social links, copyright
- **RTL/LTR support**: Language context with direction switching
- **Design tokens**: Navy/blue palette, Inter font, consistent spacing

### 2. Home Page
- **Hero**: Bold headline + subtext with gradient background, two CTAs (Explore Solutions / Request Demo), subtle animated geometric shapes
- **SaaS Ecosystem**: 11 product cards with icons, short descriptions, and links to individual product pages
- **Why Nzom Laps**: 4-column feature grid (Enterprise Architecture, Saudi Compliance, Modular Ecosystem, Cloud Infrastructure)
- **Industries**: Icon cards for Construction, Legal Firms, Corporate, Facility Management, Government Contractors
- **CTA Banner**: "Ready to digitize your operations?" with demo request button

### 3. Product Pages (11 dynamic pages using shared template)
Each product gets its own route with hero, problem, solution, features, workflow, RBAC, analytics, security, and CTA sections.

### 4. About Page
- Company story, Vision & Mission, Technology stack

### 5. Blog Page
- Blog listing with category filters and individual post pages

### 6. Contact Page
- Enterprise inquiry form with Supabase backend

---

## Key Technical Decisions
- **Routing**: React Router with routes for `/`, `/about`, `/blog`, `/contact`, `/products/:slug`
- **i18n**: Custom language context for AR/EN with RTL direction support
- **Data**: All product/content data stored in static config files
- **Responsive**: Mobile-first design with hamburger nav menu
