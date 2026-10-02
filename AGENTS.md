# AGENTS.md

Project conventions for AI agents and humans editing this codebase.

## Original request
clone this website "https://www.orient.com.pk/index.html"

## Goal
Clone Orient Electronics Pakistan's website as a multi-page Next.js app: homepage with hero slider, product categories, inverter comparison, testimonials, certifications, stats, news, and featured products; plus About Us, Blog, Products, Customer Support, and News & Events pages.

## Project type
e-commerce

## Design system — match this exactly
- Color tokens: `--background: #F5F8FC`, `--foreground: #101826`, `--accent: #00B8A9`, `--muted-foreground: #55657C`, `--card: #FFFFFF`, `--border: #DDE6F2`, `--primary: #1456E0`
- Fonts: Plus_Jakarta_Sans, Inter

## Existing components — reuse these, don't create near-duplicates
- Footer (components/Footer.tsx)
- LanguageToggle (components/LanguageToggle.tsx)
- LocaleProvider (components/LocaleProvider.tsx)
- Navbar (components/Navbar.tsx)

## Existing i18n namespaces
Every translation key must be namespaced (`hero.title`, never a bare `title`) so two components never collide on the same catalog slot. Reuse one of these, or pick a new, distinct name:
`aboutCta`, `aboutHero`, `aboutPartners`, `aboutStory`, `aboutTeam`, `aboutValues`, `blogPage`, `compare`, `comparison`, `contactChannels`, `faq`, `featured`, `footer`, `hero`, `nav`, `news`, `partners`, `products`, `productsPage`, `quality`, `serviceLocator`, `supportHero`, `trust`, `warranty`, `warrantyInfo`

When editing or adding pages: preserve the design system above, reuse existing components and the shared nav data file, and keep the established structure and tone.
