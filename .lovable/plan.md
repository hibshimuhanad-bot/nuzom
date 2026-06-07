Add Google Analytics 4 (Measurement ID: G-4RK668N601) with full SPA route tracking.

Steps:
1. Add the gtag.js script block directly into the `<head>` of `index.html`, right after the existing `<noscript>` font tags and before the closing `</head>`.
2. Create a new `src/components/AnalyticsTracker.tsx` component that imports `useLocation` from `react-router-dom`. Inside a `useEffect` hook, call `gtag('config', 'G-4RK668N601', { page_path: location.pathname + location.search })` whenever `location.pathname` changes. This ensures every client-side route change is tracked as a page view.
3. Import and mount `<AnalyticsTracker />` inside `App.tsx`, placed immediately after `<SEOHead />` and still inside `<BrowserRouter>` so it has access to the router context.

No backend or dependency changes required.
