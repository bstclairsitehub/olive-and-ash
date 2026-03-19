# Olive & Ash Setup Guide

## Project Overview

Olive & Ash is a minimalist, earthy editorial blog built with Next.js 14, TypeScript, Tailwind CSS, and modern web standards. The design emphasizes warm neutrals, serif typography, and intentional spacing.

## Quick Start

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to view the site locally.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
olive-and-ash-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── globals.css         # Global styles, fonts, typography
│   ├── page.tsx            # Homepage with hero post and grid
│   └── blog/
│       └── [slug]/
│           └── page.tsx    # Dynamic blog post pages
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── HeroPost.tsx        # Featured post component
│   └── PostCard.tsx        # Post grid card component
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind customization
├── tsconfig.json           # TypeScript config
└── next.config.js          # Next.js config
```

## Design System

### Color Palette

- **Olive** (`#6B7242`): Primary brand color, headings, CTA buttons
- **Ash** (`#8B8C85`): Secondary accent, hover states
- **Cream** (`#F5F0E8`): Background, warm off-white
- **Charcoal** (`#2D2D2D`): Body text, dark accents
- **Sage** (`#A3A88F`): Light accent, borders, subtle backgrounds

### Typography

- **Headings**: Playfair Display (serif) — elegant, editorial feel
- **Body**: Lato (sans-serif) — clean, highly readable
- **Imported via Google Fonts** in `globals.css`

### Spacing

Uses Tailwind's default spacing scale with generous padding and margins for a luxurious feel. Key spacings:
- Section margins: `py-16`
- Component gaps: `gap-12`
- Element breathing room: `mb-8`, `mb-12`

## Key Features

### Homepage (`/`)
- Featured hero post with gradient background
- "Recent Essays" grid showing 3 posts
- Expandable grid showing all blog posts
- Email subscription section

### Blog Post Pages (`/blog/[slug]`)
- Dynamic routing based on post slug
- Article header with metadata (category, author, date)
- Rich prose typography optimized for reading
- Related posts section at bottom
- Author bio section
- "Back to essays" navigation

### Responsive Design
- Mobile-first approach using Tailwind CSS
- Grid layouts adapt from 1 column (mobile) → 2-3 columns (desktop)
- Touch-friendly navigation and buttons

## Adding New Blog Posts

Blog posts are currently hardcoded in the components. To add a new post:

1. **In `app/page.tsx`**: Add an object to the `blogPosts` array:

```typescript
{
  slug: 'post-slug-here',
  title: 'Post Title',
  excerpt: 'Brief excerpt that appears in previews',
  category: 'Category Name',
  author: 'Author Name',
  date: 'YYYY-MM-DD',
}
```

2. **In `app/blog/[slug]/page.tsx`**: Add the post to the `blogPosts` object:

```typescript
'post-slug-here': {
  slug: 'post-slug-here',
  title: 'Post Title',
  category: 'Category Name',
  author: 'Author Name',
  date: 'YYYY-MM-DD',
  excerpt: 'Brief excerpt',
  content: (
    <>
      <p>Your post content here...</p>
      <h2>Section Heading</h2>
      <p>More content...</p>
    </>
  ),
}
```

## Customization

### Updating Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  olive: '#6B7242',      // Change brand colors here
  ash: '#8B8C85',
  cream: '#F5F0E8',
  charcoal: '#2D2D2D',
  sage: '#A3A88F',
}
```

Also update CSS variables in `globals.css` for consistency:

```css
:root {
  --color-olive: #6B7242;
  --color-ash: #8B8C85;
  /* ... etc */
}
```

### Updating Fonts

In `globals.css`, modify the Google Fonts import URL to use different typefaces.

## Performance

- Code splitting via Next.js App Router
- Optimized images (use `next/image` for dynamic images)
- Smooth animations with CSS transitions
- Clean, minimal JavaScript footprint

## Browser Support

- Chrome/Edge 88+
- Firefox 87+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Vercel (Recommended)

1. Push code to GitHub/GitLab/Bitbucket
2. Connect repo to Vercel
3. Deploy with one click

### Other Platforms

Works with any Node.js 18+ hosting:
- Netlify
- AWS Amplify
- Railway
- Render
- Self-hosted servers

## Development Tips

- Use Tailwind's `@apply` directive for custom utility classes in `globals.css`
- Leverage TypeScript for type safety
- Keep component files small and focused
- Use semantic HTML for accessibility
- Test responsive design with browser dev tools (F12)

## License

Private project. All rights reserved.
