

# Nuzom Lab – Enterprise SaaS Corporate Website

## Overview
A bilingual (Arabic/English) corporate website for Nuzom Lab, a Saudi technology studio, showcasing 5 SaaS products under one ecosystem brand. Deep navy (#0B1F33) and electric blue (#2563EB) design system with RTL support.

---

## Pages & Structure

### 1. Shared Layout
- **Navbar**: Logo, nav links (Home, Solutions dropdown, About, Blog, Contact), language toggle (AR/EN), "Request Demo" CTA button
- **Footer**: Company info, product links, social links, copyright
- **RTL/LTR support**: Language context with direction switching
- **Design tokens**: Navy/blue palette, Inter font, consistent spacing

### 2. Home Page
- **Hero**: Bold headline + subtext with gradient background, two CTAs (Explore Solutions / Request Demo), subtle animated geometric shapes
- **SaaS Ecosystem**: 5 product cards (HSSE, Legal, Tasks, HR, Fleet) with icons, short descriptions, and links to individual product pages
- **Why Nuzom Lab**: 4-column feature grid (Enterprise Architecture, Saudi Compliance, Modular Ecosystem, Cloud Infrastructure)
- **Industries**: Icon cards for Construction, Legal Firms, Corporate, Facility Management, Government Contractors
- **CTA Banner**: "Ready to digitize your operations?" with demo request button

### 3. Product Pages (5 dynamic pages using shared template)
Each product (HSSE, Legal, Tasks, HR, Fleet) gets its own route with:
- **Hero**: Product name, tagline, description, CTA
- **Problem Statement**: Pain points the product addresses
- **Solution Overview**: How it solves the problem
- **Key Features Grid**: 6 features (Dashboard, RBAC, Workflow Automation, Compliance Tracking, Reports & Analytics, Multi-language)
- **Dashboard Preview**: Placeholder mockup image area
- **Workflow Automation**: Visual explanation section
- **Role-Based Access**: Diagram/illustration of access model
- **Analytics & Reporting**: Data visualization preview
- **Security & Compliance**: Enterprise security highlights
- **CTA**: Request Demo form/button

Product-specific content will be data-driven from a config object, making it easy to add future products.

### 4. About Page
- Company story section
- Vision & Mission cards
- Technology stack highlights (Cloud, SaaS Architecture, AI)
- Team/culture section placeholder

### 5. Blog Page
- Blog listing with category filters (Digital Transformation, Compliance, Enterprise Ops, Tech Trends)
- Blog post cards with placeholder content
- Individual blog post template page

### 6. Contact Page
- Enterprise inquiry form (company name, email, phone, message, product interest dropdown)
- Demo booking section
- Email and location info
- Embedded map placeholder

---

## Key Technical Decisions
- **Routing**: React Router with routes for `/`, `/about`, `/blog`, `/contact`, `/products/:slug`
- **i18n**: Custom language context for AR/EN with RTL direction support
- **Animations**: CSS animations and transitions for scroll reveals and hover effects
- **Data**: All product/content data stored in static config files (no backend needed initially)
- **Responsive**: Mobile-first design with hamburger nav menu

