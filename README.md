# Portfolio 3.0

Personal portfolio site for João Borges — built with Next.js 13 App Router, React 18, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
cp .env.example .env.local
# Add your EmailJS keys to .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_USER_ID` | EmailJS public key |

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — run production server
- `npm run lint` — ESLint via Next.js

## Project structure

- `app/` — routes and App Router layouts
- `components/` — shared UI (navbar, footer, theme)
- `features/` — feature modules (about, contact, portfolio)
- `contexts/` — global theme/menu state
- `lib/` — utilities (email service, `cn`, skill icons)
- `hooks/` — custom hooks (`useContactForm`)
- `data/` — static portfolio content
- `constants/` — theme colors, navigation, skills metadata
