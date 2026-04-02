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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-md bg-dark/80 border-b border-olive/20 shadow-luxury'
          : 'bg-transparent border-b border-olive/10'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <h1 className="font-heading text-2xl font-bold text-olive tracking-widest hover:text-olive/80 transition-colors duration-300">
              OLIVE &amp; ASH
            </h1>
          </Link>

          <ul className="flex gap-12">
            <li>
              <Link
                href="/"
                className="font-body text-xs text-gray-300 hover:text-olive transition-all duration-300 uppercase tracking-widest font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-olive after:transition-all after:duration-500 hover:after:w-full"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#journal"
                className="font-body text-xs text-gray-300 hover:text-olive transition-all duration-300 uppercase tracking-widest font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-olive after:transition-all after:duration-500 hover:after:w-full"
              >
                Journal
              </Link>
            </li>
            <li>
              <a
                href="#about"
                className="font-body text-xs text-gray-300 hover:text-olive transition-all duration-300 uppercase tracking-widest font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-olive after:transition-all after:duration-500 hover:after:w-full"
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
