'use client';

import Link from 'next/link';

interface PostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
}

export default function PostCard({
  slug,
  title,
  excerpt,
  category,
  author,
  date,
}: PostCardProps) {
  return (
    <article className="group">
      <div className="mb-6 h-48 bg-gradient-to-br from-sage to-ash rounded-lg overflow-hidden" />

      <span className="inline-block uppercase text-xs font-bold tracking-widest text-olive mb-3">
        {category}
      </span>

      <Link href={`/blog/${slug}`}>
        <h3 className="font-heading text-2xl font-bold text-charcoal mb-4 group-hover:text-olive transition-colors duration-200">
          {title}
        </h3>
      </Link>

      <p className="text-ash leading-relaxed mb-4">
        {excerpt}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-sm text-sage">
          <span>{author}</span>
          <span className="mx-2">•</span>
          <time dateTime={date}>
            {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
          </time>
        </span>

        <Link
          href={`/blog/${slug}`}
          className="text-sm font-semibold text-olive hover:text-ash transition-colors duration-200"
        >
          →
        </Link>
      </div>
    </article>
  );
}
