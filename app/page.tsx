'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import HeroPost from '@/components/HeroPost';
import PostCard from '@/components/PostCard';

const blogPosts = [
  {
    slug: 'slow-living-in-modern-times',
    title: 'Slow Living in Modern Times',
    excerpt:
      'Exploring how to cultivate intentionality and presence amidst the constant noise of contemporary life. A reflection on stepping back and rediscovering what truly matters.',
    category: 'Lifestyle',
    author: 'Sarah Mitchell',
    date: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=1200&h=600&fit=crop&q=80',
  },
  {
    slug: 'the-art-of-minimalism',
    title: 'The Art of Minimalism',
    excerpt:
      'Minimalism is not about emptiness—it\'s about clarity. Discover how reducing physical and mental clutter can lead to a more meaningful existence.',
    category: 'Philosophy',
    author: 'Sarah Mitchell',
    date: '2024-03-08',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop&q=80',
  },
  {
    slug: 'earthy-interiors-design-guide',
    title: 'Earthy Interiors: A Design Guide',
    excerpt:
      'Learn how to incorporate natural materials, warm tones, and organic textures into your living space for a home that feels grounded and inviting.',
    category: 'Design',
    author: 'Sarah Mitchell',
    date: '2024-02-28',
    image: 'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&h=500&fit=crop&q=80',
  },
  {
    slug: 'seasonal-rituals-embrace-change',
    title: 'Seasonal Rituals: Embrace Change',
    excerpt:
      'The changing seasons offer us a natural rhythm for renewal and reflection. Explore rituals that align us with the earth\'s cycles.',
    category: 'Wellness',
    author: 'Sarah Mitchell',
    date: '2024-02-20',
    image: 'https://images.unsplash.com/photo-1505228395891-9a51e7e86e81?w=800&h=500&fit=crop&q=80',
  },
  {
    slug: 'sustainable-fashion-choices',
    title: 'Sustainable Fashion Choices',
    excerpt:
      'Building a wardrobe that reflects your values doesn\'t mean sacrificing style. Discover timeless pieces and conscious brands.',
    category: 'Style',
    author: 'Sarah Mitchell',
    date: '2024-02-12',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&h=500&fit=crop&q=80',
  },
  {
    slug: 'the-power-of-intentional-reading',
    title: 'The Power of Intentional Reading',
    excerpt:
      'In an age of endless content, reading with intention becomes a revolutionary act. Let\'s explore how books can deepen our understanding of the world.',
    category: 'Culture',
    author: 'Sarah Mitchell',
    date: '2024-02-05',
    image: 'https://images.unsplash.com/photo-150784272343-583f20270319?w=800&h=500&fit=crop&q=80',
  },
];

export default function Home() {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 4);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    scrollRevealElements.forEach((el) => observer.observe(el));

    return () => {
      scrollRevealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-dark text-white">
      {/* Hero Section */}
      <HeroPost
        slug={featuredPost.slug}
        title={featuredPost.title}
        excerpt={featuredPost.excerpt}
        category={featuredPost.category}
        author={featuredPost.author}
        date={featuredPost.date}
        image={featuredPost.image}
      />

      {/* Recent Essays Section - Dark Background */}
      <section id="journal" className="relative bg-dark py-32">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="mb-20 scroll-reveal">
            <div className="flex items-center gap-4 mb-6">
              <div className="accent-bar" />
              <span className="uppercase text-xs font-bold tracking-widest text-gold">Curated Collection</span>
            </div>
            <h2 className="font-heading text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight max-w-2xl">
              Recent Essays
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              Thoughtful writing on design, lifestyle, and intentional living.
            </p>
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
            {recentPosts.map((post, idx) => (
              <div key={post.slug} className="scroll-reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                <PostCard
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  author={post.author}
                  date={post.date}
                  image={post.image}
                />
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center scroll-reveal">
            <Link href="#all-posts" className="btn-luxury">
              Explore All Essays
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider mx-8" />

      {/* All Essays Section - Slightly Lighter Dark */}
      <section className="relative bg-darker py-32">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="mb-20 scroll-reveal">
            <div className="flex items-center gap-4 mb-6">
              <div className="accent-bar" />
              <span className="uppercase text-xs font-bold tracking-widest text-gold">Complete Archive</span>
            </div>
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white">
              All Essays
            </h2>
          </div>

          {/* Full Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12">
            {blogPosts.slice(3).map((post, idx) => (
              <div key={post.slug} className="scroll-reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                <PostCard
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  author={post.author}
                  date={post.date}
                  image={post.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Premium Dark */}
      <section className="relative bg-dark py-32 border-t border-gold/20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="scroll-reveal">
            <div className="flex items-center gap-4 mb-8">
              <div className="accent-bar" />
              <span className="uppercase text-xs font-bold tracking-widest text-gold">Stay Connected</span>
            </div>

            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
              Subscribe to Our Newsletter
            </h2>

            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl">
              Receive curated essays and insights delivered directly to your inbox. Premium editorial content, no spam.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-3.5 bg-darker border border-gold/30 rounded-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-all duration-300 font-body text-sm"
              />
              <button
                type="submit"
                className="btn-luxury whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            <p className="text-xs text-gray-600 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
