'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream mt-24">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Olive &amp; Ash</h3>
            <p className="text-sm text-sage">
              A minimalist editorial space exploring slow living and thoughtful lifestyle.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wide mb-4">Navigate</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-cream hover:text-olive transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#journal" className="text-sm text-cream hover:text-olive transition-colors duration-200">
                  Journal
                </Link>
              </li>
              <li>
                <a href="#about" className="text-sm text-cream hover:text-olive transition-colors duration-200">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wide mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-cream hover:text-olive transition-colors duration-200">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-cream hover:text-olive transition-colors duration-200">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-cream hover:text-olive transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sage pt-8">
          <p className="text-center text-sm text-sage">
            &copy; {currentYear} Olive &amp; Ash. All rights reserved.
          </p>
          <p className="text-center text-xs text-sage/60 mt-2 tracking-widest uppercase">
            Designed &amp; Developed by St. Clair Design Co.
          </p>
        </div>
      </div>
    </footer>
  );
}
