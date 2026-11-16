# Banks Oven

A mobile-first Next.js website for Banks Oven, a custom cake and confectionery business in Rumuodara, Port Harcourt.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production
```bash
npm run build
npm start
```

## Vercel
Import this repository and keep the defaults:
- Framework: Next.js
- Root directory: ./
- Build command: npm run build
- Install command: npm install

## Included
- Responsive editorial-style homepage and navigation
- Filterable cake gallery
- Three-step custom order enquiry wizard
- Cake tier, flavour, guest count, delivery and date selection
- Reference image preview with image-type and 5 MB validation
- WhatsApp enquiry handoff, phone, email, Google Maps directions and embedded map

## Before production
- Testimonials are clearly labelled sample copy, not verified reviews. Replace them with approved customer feedback.
- Sunday opening hours were not specified exactly, so the page says to call and confirm.
- The order form hands off to WhatsApp; it does not save customer data to a database.
- Reference images are previewed locally; customers attach them manually in WhatsApp.
- This is an enquiry flow, not a confirmed booking or fixed-price quote.