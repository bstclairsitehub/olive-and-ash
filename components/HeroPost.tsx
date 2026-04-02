'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface HeroPostProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image?: string;
}

const heroImage = 'https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=1600&h=900&fit=crop&q=80';

export default function HeroPost({
  slug,
  title,
  excerpt,
  category,
  author,
  date,
  image,
}: HeroPostProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden mt-20 pt-20 mb-32">
      {/* Cinematic Background Image */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img
          src={image || heroImage}
          alt={title}
          className="hero-image w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay Gradient */}
      <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-dark/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/80" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-8 pt-20">
        <div className="hero-text">
          {/* Category Badge */}
          <div className="mb-8 flex items-center gap-3">
            <div className="accent-bar" />
            <span className="inline-block uppercase text-xs font-bold tracking-widest text-gold fade-up fade-up-delay-1">
              Featured Essay
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight fade-up fade-up-delay-2 max-w-4xl">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-10 fade-up fade-up-delay-3 max-w-3xl font-light">
            {excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12 fade-up fade-up-delay-4">
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <span className="font-medium text-gold">By {author}</span>
              <span className="mx-2">•</span>
              <time dateTime={date} className="text-gray-400">
                {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>
          </div>

          {/* CTA Button */}
          <div className="fade-up fade-up-delay-4">
            <Link
              href={`/blog/${slug}`}
              className="btn-luxury inline-block"
            >
              Read Full Essay
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-gold uppercase tracking-widest">Scroll</span>
          <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
