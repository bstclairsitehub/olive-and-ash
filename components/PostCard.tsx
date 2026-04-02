'use client';

import Link from 'next/link';

interface PostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image?: string;
}

export default function PostCard({
  slug,
  title,
  excerpt,
  category,
  author,
  date,
  image,
}: PostCardProps) {
  return (
    <article className="card-luxury group">
      {/* Image Container */}
      <div className="img-container mb-8 h-64 rounded-sm overflow-hidden bg-darker relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
          <div className="accent-bar mr-3" />
          <span className="text-xs font-bold tracking-widest text-olive uppercase">Read Article</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative">
        {/* Category Badge */}
        <span className="inline-block uppercase text-xs font-bold tracking-widest text-olive mb-4 transition-colors duration-300 group-hover:text-olive/80">
          {category}
        </span>

        {/* Title */}
        <Link href={`/blog/${slug}`}>
          <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-olive transition-colors duration-300 leading-tight">
            {title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-400 leading-relaxed mb-6 text-base line-clamp-3">
          {excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-olive/10">
          <span className="text-xs text-gray-500 uppercase tracking-widest">
            <span className="text-gray-400 font-medium">{author}</span>
            <span className="mx-2">•</span>
            <time dateTime={date}>
              {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
            </time>
          </span>

          <Link
            href={`/blog/${slug}`}
            className="text-olive hover:text-olive/80 transition-colors duration-200 font-bold text-lg"
          >
            →
          </Link>
        </div>
      </div>
    </article>
  );
}
