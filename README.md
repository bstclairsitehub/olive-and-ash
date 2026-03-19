# Olive & Ash

A minimal editorial blog built with Next.js 14, TypeScript, and Tailwind CSS. Earthy tones, clean typography, and a focus on long-form reading.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Runtime | Node.js 18+ |

---

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero post + post grid |
| `/blog/[slug]` | Individual article page |

## Components

| Component | Description |
|---|---|
| `Header` | Site navigation and brand mark |
| `Footer` | Site footer with links |
| `HeroPost` | Featured post hero section |
| `PostCard` | Article preview card |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
olive-and-ash-nextjs/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles
│   └── blog/
│       └── [slug]/
│           └── page.tsx        # Article detail page
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroPost.tsx
│   └── PostCard.tsx
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## Design System

- **Background:** Warm off-white / cream (`#FAF7F2`)
- **Text:** Deep charcoal (`#1A1A1A`)
- **Accent:** Olive green (`#6B7C4B`) and ash gray (`#8C8C8C`)
- **Typography:** Playfair Display (headings), Inter (body)

---

## Deployment

### Vercel (recommended)

```bash
# Push to GitHub, then import on vercel.com
git push origin main
```

No environment variables required for the base build.

---

## Author

Designed and developed by **St. Clair Design Co.**

---

## License

Private — all rights reserved.
