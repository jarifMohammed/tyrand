
# Tyrand Codebase Overview

## Project Summary
This is a Next.js 14 application built for Tyrand, a digital product studio offering design, engineering, and project management services. The project uses TypeScript, Tailwind CSS, and modern React patterns.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React & React Icons
- **Animations**: Framer Motion

## Directory Structure
```
├── public/
│   └── image/                  # Static assets (images)
├── src/
│   └── app/
│       ├── _components/        # Shared components
│       ├── Services-Page/      # Services page route
│       ├── about/              # About page route
│       ├── contact/            # Contact page route
│       ├── process/            # Process page route
│       ├── protfolio/          # Portfolio page route
│       ├── fonts/              # Custom fonts
│       ├── layout.tsx          # Root layout
│       └── page.tsx            # Home page
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Pages & Routes

### 1. Home Page (`/`)
File: [src/app/page.tsx](file:///home/jarif/Desktop/WOrks/tyrand/src/app/page.tsx)

Components:
- [Hero](file:///home/jarif/Desktop/WOrks/tyrand/src/app/_components/Hero.tsx): Hero section with company tagline
- [Tag](file:///home/jarif/Desktop/WOrks/tyrand/src/app/_components/Tag.tsx): Trusted companies section
- [Services](file:///home/jarif/Desktop/WOrks/tyrand/src/app/_components/Services.tsx): Services overview
- [WhyChoose](file:///home/jarif/Desktop/WOrks/tyrand/src/app/_components/WhyChoose.tsx): Why choose Tyrand
- [Testimonials](file:///home/jarif/Desktop/WOrks/tyrand/src/app/_components/Testimonials.tsx): Client testimonials
- [FAQ](file:///home/jarif/Desktop/WOrks/tyrand/src/app/_components/FAQ.tsx): Frequently asked questions
- [CTA](file:///home/jarif/Desktop/WOrks/tyrand/src/app/_components/CTA.tsx): Call to action

### 2. Services Page (`/Services-Page`)
File: [src/app/Services-Page/page.tsx](file:///home/jarif/Desktop/WOrks/tyrand/src/app/Services-Page/page.tsx)

Components:
- [ServicesHero](file:///home/jarif/Desktop/WOrks/tyrand/src/app/Services-Page/_components/hero.tsx): Hero section for services
- [ServiceDetails](file:///home/jarif/Desktop/WOrks/tyrand/src/app/Services-Page/_components/ServiceDetails.tsx): Detailed service categories (Design, Mobile App, AI & Agents, Engineering, Quality Assurance, Deployment & DevOps, Maintenance & Support)

### 3. Portfolio Page (`/protfolio`)
File: [src/app/protfolio/page.tsx](file:///home/jarif/Desktop/WOrks/tyrand/src/app/protfolio/page.tsx)

Components:
- [OurWorksHero](file:///home/jarif/Desktop/WOrks/tyrand/src/app/protfolio/_components/hero.tsx): Hero section for portfolio
- [OurWorks](file:///home/jarif/Desktop/WOrks/tyrand/src/app/protfolio/_components/OurWorks.tsx): Project showcase (Chic Boutique, HungryBites)
- [CTA](file:///home/jarif/Desktop/WOrks/tyrand/src/app/_components/CTA.tsx): Call to action

### 4. Process Page (`/process`)
File: [src/app/process/page.tsx](file:///home/jarif/Desktop/WOrks/tyrand/src/app/process/page.tsx)

Features:
- Hero section with process tagline
- Statistics bar (Products Shipped, Uptime SLA, Client Satisfaction, Avg. Response Time)
- 5-step timeline process (Discovery & Requirements → UX Architecture & UI Design → Engineering & Development → QA & Performance Tuning → Delivery & Continuous Support)
- Engineering principles (Type-Safe Everything, Infrastructure as Code, Performance by Default, Security-First Mindset, Automated Quality Gates, Observable Systems)
- CTA to contact

### 5. About Page (`/about`)
File: [src/app/about/page.tsx](file:///home/jarif/Desktop/WOrks/tyrand/src/app/about/page.tsx)

Features:
- Hero section with about tagline
- Company story
- Our values (Radical Transparency, Engineering as Craft, Uncompromising Quality, Velocity with Purpose, Design Driven, Forward Thinking)
- CTA to contact

### 6. Contact Page (`/contact`)
File: [src/app/contact/page.tsx](file:///home/jarif/Desktop/WOrks/tyrand/src/app/contact/page.tsx)

Components:
- [ContactUs](file:///home/jarif/Desktop/WOrks/tyrand/src/app/contact/_components/hero.tsx): Hero section for contact
- [ContactInfo](file:///home/jarif/Desktop/WOrks/tyrand/src/app/contact/_components/ContactInfo.tsx): Contact information (email)
- [ContactForm](file:///home/jarif/Desktop/WOrks/tyrand/src/app/contact/_components/ContactForm.tsx): Contact form (name, email, reason, budget, message)
- [FAQ](file:///home/jarif/Desktop/WOrks/tyrand/src/app/_components/FAQ.tsx): FAQ section
- [AboutCTA](file:///home/jarif/Desktop/WOrks/tyrand/src/app/contact/_components/AboutCTA.tsx): Call to action

## Shared Components

### 1. Navbar
File: [src/app/_components/navber.tsx](file:///home/jarif/Desktop/WOrks/tyrand/src/app/_components/navber.tsx)

- Logo with link to home
- Navigation links (Home, Services, Work, Process, About, Careers)
- Contact Us button

### 2. Footer
File: [src/app/_components/Footer.tsx](file:///home/jarif/Desktop/WOrks/tyrand/src/app/_components/Footer.tsx)

- Logo
- Back to top button
- Contact info (email, location)
- Copyright

## Key Features

### Design
- Dark theme with lime green accents
- Responsive design
- Smooth transitions and hover effects
- Background images with dark overlays
- Grid and flex layouts with Tailwind CSS

### Interactivity
- FAQ accordion
- Form inputs (text, email, checkbox, range, textarea)
- Smooth scroll to top
- Hover animations on cards and buttons

### Content
- Service descriptions with icons
- Project showcase
- Client testimonials
- Company values and process
- Contact form

## Styling
- Tailwind CSS with custom configuration
- Custom fonts (Geist Sans, Geist Mono)
- Color scheme: dark gray background, white text, lime green accents
- Border styles using neutral-800
- Backdrop blur effects

## How to Run
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Build & Deploy
```bash
npm run build
npm start
```

The project is configured for easy deployment to platforms like Vercel.
