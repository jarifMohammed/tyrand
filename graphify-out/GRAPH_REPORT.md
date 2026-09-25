# Graph Report - tyrand  (2026-09-24)

## Corpus Check
- Large corpus: 82 files · ~1,068,297 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 269 nodes · 452 edges · 35 communities (13 shown, 22 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 10 edges (avg confidence: 0.87)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Package Configuration
- Page Components and Routes
- UI Motion and Shared Components
- API Routes and Backend
- Navigation and Layout
- TypeScript Configuration
- Interactive Buttons and Contact
- NPM Dependencies
- Architecture Documentation
- Deployment Scripts
- ESLint Configuration
- CountUp Animation
- Next.js Config
- PostCSS Config
- Portfolio Work Samples
- Animated Background
- Engineering Process
- Client Screenshots
- Hero Backgrounds
- Brand Logos
- Service Backgrounds
- Remote Setup Script
- CSS Type Declarations
- Contact Hero Image
- CTA Background
- FAQ Background
- SecondSight Project
- Testimonials Background
- Why Choose Background
- Brand Logo 1
- Brand Logo 2
- Brand Logo 3
- Brand Logo 4
- Brand Logo 5
- Brand Logo 6

## God Nodes (most connected - your core abstractions)
1. `react` - 25 edges
2. `FadeIn()` - 23 edges
3. `motion` - 20 edges
4. `compilerOptions` - 15 edges
5. `next` - 14 edges
6. `StaggerContainer()` - 14 edges
7. `StaggerItem()` - 14 edges
8. `lucide-react` - 13 edges
9. `connectDB()` - 9 edges
10. `TextReveal()` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Next.js Project Bootstrap` --references--> `Next.js 14 Framework`  [INFERRED]
  README.md → .trae/documents/tyrand_codebase_overview.md
- `Service Background Image` --semantically_similar_to--> `Service Background (Alternate)`  [INFERRED] [semantically similar]
  public/image/Service-bg.png → public/image/service-bg.png
- `Client Project Screenshot 1` --semantically_similar_to--> `Client Project Screenshot 2`  [INFERRED] [semantically similar]
  public/image/client-1.png → public/image/client-2.png
- `Hero Background Image` --semantically_similar_to--> `Page Hero Background Image`  [INFERRED] [semantically similar]
  public/image/hero-bg.png → public/image/page-hero-bg.png
- `Tyrand Logo` --semantically_similar_to--> `Tyrand Logo (JPEG)`  [INFERRED] [semantically similar]
  public/image/logo.png → public/image/tyrand_logo.jpeg

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Brand Partner Logos** — public_images_brands_logo_1, public_images_brands_logo_2, public_images_brands_logo_3, public_images_brands_logo_4, public_images_brands_logo_5, public_images_brands_logo_6 [INFERRED 0.95]
- **Portfolio Work Samples** — public_image_work2, public_image_work3, public_image_work4 [INFERRED 0.85]
- **Section Background Images** — public_image_hero_bg, public_image_page_hero_bg, public_image_contect_hero_bg, public_image_service_bg, public_image_testimonials_bg [INFERRED 0.85]

## Communities (35 total, 22 thin omitted)

### Community 0 - "Package Configuration"
Cohesion: 0.05
Nodes (35): devDependencies, eslint, eslint-config-next, postcss, tailwindcss, @types/node, @types/react, @types/react-dom (+27 more)

### Community 1 - "Page Components and Routes"
Cohesion: 0.12
Nodes (22): lucide-react, motion, ApplicationFormData, initialFormData, openings, FAQ(), faqs, Hero() (+14 more)

### Community 2 - "UI Motion and Shared Components"
Cohesion: 0.09
Nodes (19): react, CTA(), directionMap(), FadeIn(), FadeInProps, brands, duplicatedBrands, DbTestimonial (+11 more)

### Community 3 - "API Routes and Backend"
Cohesion: 0.13
Nodes (18): ref_fs, mongoose, nodemailer, ref_path, ALLOWED_EXTENSIONS, ALLOWED_TYPES, POST(), sanitize() (+10 more)

### Community 4 - "Navigation and Layout"
Cohesion: 0.11
Nodes (13): next, companyLinks, Footer(), industries, socials, PageTransition(), Navbar(), navLinks (+5 more)

### Community 5 - "TypeScript Configuration"
Cohesion: 0.11
Nodes (17): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+9 more)

### Community 6 - "Interactive Buttons and Contact"
Cohesion: 0.23
Nodes (7): MagneticButton(), MagneticButtonProps, AboutCTA(), ContactForm(), ContactFormData, ContactInfo(), ContactUs()

### Community 7 - "NPM Dependencies"
Cohesion: 0.17
Nodes (12): dependencies, @edgestore/react, @edgestore/server, lucide-react, mongoose, motion, next, nodemailer (+4 more)

### Community 8 - "Architecture Documentation"
Cohesion: 0.20
Nodes (10): App Router Architecture, Company Values, Dark Theme with Lime Green Accents, Framer Motion Animations, Next.js 14 Framework, Tailwind CSS Styling, Tyrand Digital Product Studio, Geist Font Family (+2 more)

### Community 9 - "Deployment Scripts"
Cohesion: 0.40
Nodes (3): paramiko, sys, time

### Community 10 - "ESLint Configuration"
Cohesion: 0.50
Nodes (3): extends, next/core-web-vitals, next/typescript

### Community 11 - "CountUp Animation"
Cohesion: 0.67
Nodes (3): CountUp(), CountUpProps, parseTarget()

### Community 14 - "Portfolio Work Samples"
Cohesion: 0.67
Nodes (3): Portfolio Work Sample 2, Portfolio Work Sample 3, Portfolio Work Sample 4

## Knowledge Gaps
- **129 isolated node(s):** `next/core-web-vitals`, `next/typescript`, `nextConfig`, `name`, `version` (+124 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 160 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **22 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `UI Motion and Shared Components` to `Package Configuration`, `Page Components and Routes`, `Navigation and Layout`, `Interactive Buttons and Contact`, `CountUp Animation`, `Animated Background`?**
  _High betweenness centrality (0.130) - this node is a cross-community bridge._
- **Why does `next` connect `Navigation and Layout` to `Package Configuration`, `Page Components and Routes`, `UI Motion and Shared Components`, `Interactive Buttons and Contact`?**
  _High betweenness centrality (0.079) - this node is a cross-community bridge._
- **Why does `motion` connect `Page Components and Routes` to `Package Configuration`, `UI Motion and Shared Components`, `Navigation and Layout`, `Interactive Buttons and Contact`, `CountUp Animation`, `Animated Background`?**
  _High betweenness centrality (0.068) - this node is a cross-community bridge._
- **What connects `next/core-web-vitals`, `next/typescript`, `nextConfig` to the rest of the system?**
  _129 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Package Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.05398110661268556 - nodes in this community are weakly interconnected._
- **Should `Page Components and Routes` be split into smaller, more focused modules?**
  _Cohesion score 0.1241565452091768 - nodes in this community are weakly interconnected._
- **Should `UI Motion and Shared Components` be split into smaller, more focused modules?**
  _Cohesion score 0.08636977058029689 - nodes in this community are weakly interconnected._