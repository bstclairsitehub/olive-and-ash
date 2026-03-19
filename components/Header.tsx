'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-cream border-b border-sage">
      <nav className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <h1 className="font-heading text-3xl font-bold text-olive tracking-wide">
              Olive &amp; Ash
            </h1>
          </Link>

          <ul className="flex gap-8">
            <li>
              <Link
                href="/"
                className="font-body text-sm text-charcoal hover:text-olive transition-colors duration-200 uppercase tracking-wide"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#journal"
                className="font-body text-sm text-charcoal hover:text-olive transition-colors duration-200 uppercase tracking-wide"
              >
                Journal
              </Link>
            </li>
            <li>
              <a
                href="#about"
                className="font-body text-sm text-charcoal hover:text-olive transition-colors duration-200 uppercase tracking-wide"
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
