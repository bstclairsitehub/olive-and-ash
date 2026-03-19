'use client';

import Link from 'next/link';

interface HeroPostProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
}

export default function HeroPost({
  slug,
  title,
  excerpt,
  category,
  author,
  date,
}: HeroPostProps) {
  return (
    <section className="mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="h-80 lg:h-96 bg-gradient-to-br from-olive to-ash rounded-lg" />

        <div>
          <span className="inline-block uppercase text-xs font-bold tracking-widest text-olive mb-4">
            {category}
          </span>

          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-charcoal mb-6 leading-tight">
            {title}
          </h2>

          <p className="text-lg text-ash leading-relaxed mb-8">
            {excerpt}
          </p>

          <div className="flex items-center justify-between mb-8">
            <div className="text-sm text-sage">
              <span>{author}</span>
              <span className="mx-3">•</span>
              <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </div>
          </div>

          <Link
            href={`/blog/${slug}`}
            className="inline-block bg-olive text-cream px-8 py-3 rounded hover:bg-ash transition-colors duration-200 font-semibold"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
