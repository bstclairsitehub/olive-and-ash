'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-darker text-gray-100 border-t border-olive/20">
      {/* Accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-olive/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          {/* Brand Section */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-olive mb-4 tracking-widest">OLIVE &amp; ASH</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium editorial insights on intentional living, design, and contemporary lifestyle.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-olive mb-6">Navigate</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-olive transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#journal" className="text-sm text-gray-400 hover:text-olive transition-colors duration-300">
                  Journal
                </Link>
              </li>
              <li>
                <a href="#about" className="text-sm text-gray-400 hover:text-olive transition-colors duration-300">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-olive mb-6">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-olive transition-colors duration-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-olive transition-colors duration-300">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-olive transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-widest text-olive mb-6">Subscribe</h4>
            <p className="text-xs text-gray-500 mb-4">Get new essays in your inbox</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2.5 bg-darker/50 border border-olive/20 rounded-sm text-sm text-white placeholder-gray-600 focus:outline-none focus:border-olive/50 transition-colors duration-300"
              />
              <button
                type="submit"
                className="btn-luxury text-xs py-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider my-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            &copy; {currentYear} Olive &amp; Ash. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 uppercase tracking-widest mt-6 md:mt-0">
            Designed &amp; Developed by St. Clair Design Co.
          </p>
        </div>
      </div>
    </footer>
  );
}
