# AZQYRA Marketing Site

A production-ready marketing website for AZQYRA, built with Next.js 14, TypeScript, and Tailwind CSS. Designed for public institutions and regulated industries seeking AI solutions with governance, compliance, and measurable ROI.

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd azqyra-site
   npm install
   ```

2. **Add the AZQYRA logo:**
   - Replace `public/brand/azqyra.png` with the actual AZQYRA logo
   - Recommended dimensions: 240x80px (3:1 ratio)

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** to view the site

## 🏗️ Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui (Radix primitives)
- **Animations:** Framer Motion
- **SEO:** next-seo
- **Icons:** Lucide React
- **Fonts:** Inter, Source Sans 3, IBM Plex Mono

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes (contact, newsletter)
│   ├── case-studies/      # Case study pages
│   └── [other-pages]/     # Solutions, About, Contact, etc.
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── [custom]/         # Custom components
├── content/              # Content configuration
│   ├── solutions.ts      # Solutions catalog
│   ├── focus.ts         # Focus areas
│   ├── faqs.ts          # FAQ content
│   └── [others]/        # Other content configs
├── lib/                  # Utilities
│   ├── seo.ts           # SEO configuration
│   ├── analytics.ts     # Analytics utilities
│   └── utils.ts         # General utilities
public/
├── brand/               # Brand assets
├── resources/           # Downloadable resources
└── [assets]/           # Favicons, OG images, etc.
```

## 🎨 Design System

### Colors
- **Navy 900:** `#0A1B3C` - Primary brand color
- **Ink 800:** `#151A22` - Body text
- **Gold 500:** `#D4AF37` - Accent color
- **Blue 700:** `#1565C0` - Links and highlights
- **Off 50:** `#F7F9FC` - Light backgrounds

### Typography
- **Headings:** Inter (700/600 weight)
- **Body:** Source Sans 3 (400/500 weight)
- **Numbers:** IBM Plex Mono

### Components
All components follow accessibility best practices with proper ARIA labels, keyboard navigation, and AA+ contrast ratios.

## 🔧 Configuration

### Content Management

Content is managed through TypeScript configuration files in `src/content/`:

- **Solutions:** Add new solutions in `solutions.ts`
- **Focus Areas:** Update verticals in `focus.ts`
- **FAQs:** Manage questions in `faqs.ts`
- **Case Studies:** Add studies in `case-studies.ts`

### Forms & APIs

The site includes API routes for:

1. **Contact Form:** `/api/contact`
2. **Newsletter:** `/api/newsletter`

Both are currently stubbed with console logging. To integrate with email providers:

```typescript
// In src/app/api/contact/route.ts
// TODO: Replace with your email service
// Example integrations:
// - SendGrid: await sendgrid.send({...})
// - Resend: await resend.emails.send({...})
// - Postmark: await postmark.sendEmail({...})
```

### Analytics

Analytics tracking is set up in `src/lib/analytics.ts` with respect for Do-Not-Track. To integrate:

```typescript
// Replace the TODO comments with your analytics provider
// Examples:
// - Google Analytics 4: gtag('event', eventName, properties)
// - Plausible: plausible(eventName, { props: properties })
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
2. **Set environment variables** (if needed for email/analytics)
3. **Deploy** - Vercel will automatically build and deploy

### Other Platforms

The site is a standard Next.js application and can be deployed to:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

Build command: `npm run build`
Output directory: `.next`

## 🔒 Security & Compliance

### Data Protection
- GDPR-aligned privacy practices
- No tracking without consent
- Secure form handling with validation
- HTTPS enforced in production

### Content Security
- XSS protection through React
- Sanitized user inputs
- Secure API endpoints
- Rate limiting ready (add middleware as needed)

## ♿ Accessibility

The site meets WCAG 2.1 AA standards:

- **Skip links** for keyboard navigation
- **ARIA labels** on all interactive elements
- **Color contrast** ratios exceed AA requirements
- **Focus indicators** visible on all focusable elements
- **Screen reader** compatible markup
- **Reduced motion** support

## 📈 SEO

- **Structured metadata** with next-seo
- **Open Graph** and Twitter Card support
- **Sitemap** generation at `/sitemap.xml`
- **Robots.txt** configuration
- **Canonical URLs** for all pages
- **Schema markup** ready for implementation

## 🔄 Content Updates

### Adding New Solutions

1. Edit `src/content/solutions.ts`
2. Add new solution object with required fields
3. Set `featured: true` to show on homepage

### Adding Case Studies

1. Add metadata to `src/content/case-studies.ts`
2. Create detail page in `src/app/case-studies/[slug]/page.tsx`
3. Use the existing case study as a template

### Blog Posts (MDX Ready)

The site is configured for MDX blog posts:
1. Add posts to `src/content/blog/`
2. Include frontmatter with title, date, excerpt
3. Blog components are ready in `src/components/`

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

### Adding New Components

1. Create component in `src/components/`
2. Follow existing patterns for props and styling
3. Add proper TypeScript types
4. Include accessibility attributes

### Environment Variables

Create `.env.local` for local development:

```bash
# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-ga-id
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-domain

# Email service (for forms)
SENDGRID_API_KEY=your-key
RESEND_API_KEY=your-key

# Other integrations
# Add as needed for your specific setup
```

## 🎯 Performance

The site is optimized for performance:

- **Core Web Vitals** optimized
- **Image optimization** with Next.js Image
- **Font optimization** with next/font
- **Code splitting** automatic with Next.js
- **Static generation** where possible

## 📞 Support & Maintenance

### Updating Contact Information

Edit contact details in:
- `src/app/contact/page.tsx` - Contact page
- `src/components/Footer.tsx` - Footer
- `src/app/imprint/page.tsx` - Legal page

### Brand Asset Updates

Replace files in `public/brand/` and `public/` root:
- Logo: `public/brand/azqyra.png`
- Favicon: `public/favicon.svg` and `public/favicon.ico`
- OG Image: `public/og.jpg`

### Legal Pages

Update placeholder content in:
- `src/app/privacy/page.tsx`
- `src/app/imprint/page.tsx`

**Important:** Consult legal counsel for compliance with local regulations.

## 📄 License

[Add your license information here]

---

**Built with ❤️ for AZQYRA**

For questions or support, contact: [your-contact-email]

