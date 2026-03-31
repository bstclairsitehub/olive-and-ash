'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-md bg-cream/90 border-b border-sage/50 shadow-sm'
          : 'bg-cream border-b border-sage'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <h1 className="font-heading text-3xl font-bold text-olive tracking-wide hover:text-ash transition-colors duration-300">
              Olive &amp; Ash
            </h1>
          </Link>

          <ul className="flex gap-8">
            <li>
              <Link
                href="/"
                className="font-body text-sm text-charcoal hover:text-olive transition-all duration-300 uppercase tracking-wide relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-olive after:transition-all after:duration-300 hover:after:w-full"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#journal"
                className="font-body text-sm text-charcoal hover:text-olive transition-all duration-300 uppercase tracking-wide relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-olive after:transition-all after:duration-300 hover:after:w-full"
              >
                Journal
              </Link>
            </li>
            <li>
              <a
                href="#about"
                className="font-body text-sm text-charcoal hover:text-olive transition-all duration-300 uppercase tracking-wide relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-olive after:transition-all after:duration-300 hover:after:w-full"
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
