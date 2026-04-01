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
    image: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1200&h=600&fit=crop',
  },
  {
    slug: 'the-art-of-minimalism',
    title: 'The Art of Minimalism',
    excerpt:
      'Minimalism is not about emptiness—it\'s about clarity. Discover how reducing physical and mental clutter can lead to a more meaningful existence.',
    category: 'Philosophy',
    author: 'Sarah Mitchell',
    date: '2024-03-08',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop',
  },
  {
    slug: 'earthy-interiors-design-guide',
    title: 'Earthy Interiors: A Design Guide',
    excerpt:
      'Learn how to incorporate natural materials, warm tones, and organic textures into your living space for a home that feels grounded and inviting.',
    category: 'Design',
    author: 'Sarah Mitchell',
    date: '2024-02-28',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop',
  },
  {
    slug: 'seasonal-rituals-embrace-change',
    title: 'Seasonal Rituals: Embrace Change',
    excerpt:
      'The changing seasons offer us a natural rhythm for renewal and reflection. Explore rituals that align us with the earth\'s cycles.',
    category: 'Wellness',
    author: 'Sarah Mitchell',
    date: '2024-02-20',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop',
  },
  {
    slug: 'sustainable-fashion-choices',
    title: 'Sustainable Fashion Choices',
    excerpt:
      'Building a wardrobe that reflects your values doesn\'t mean sacrificing style. Discover timeless pieces and conscious brands.',
    category: 'Style',
    author: 'Sarah Mitchell',
    date: '2024-02-12',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=500&fit=crop',
  },
  {
    slug: 'the-power-of-intentional-reading',
    title: 'The Power of Intentional Reading',
    excerpt:
      'In an age of endless content, reading with intention becomes a revolutionary act. Let\'s explore how books can deepen our understanding of the world.',
    category: 'Culture',
    author: 'Sarah Mitchell',
    date: '2024-02-05',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop',
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
    <div className="min-h-screen bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <HeroPost
          slug={featuredPost.slug}
          title={featuredPost.title}
          excerpt={featuredPost.excerpt}
          category={featuredPost.category}
          author={featuredPost.author}
          date={featuredPost.date}
          image={featuredPost.image}
        />

        <section id="journal" className="scroll-mt-20">
          <div className="mb-16 scroll-reveal">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-2">
              Recent Essays
            </h2>
            <div className="w-12 h-1 bg-olive rounded" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {recentPosts.map((post) => (
              <div key={post.slug} className="scroll-reveal">
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

          <div className="text-center scroll-reveal">
            <Link
              href="#all-posts"
              className="inline-block bg-olive text-cream px-8 py-3 rounded hover:bg-ash hover:-translate-y-1 transition-all duration-500 font-semibold shadow-md hover:shadow-lg"
            >
              View All Essays
            </Link>
          </div>

          <hr className="my-16" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12">
            {blogPosts.slice(3).map((post) => (
              <div key={post.slug} className="scroll-reveal">
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
        </section>

        <section className="py-16 text-center scroll-reveal">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-ash mb-8">
              Subscribe to our newsletter for thoughtful essays delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-6 py-3 bg-white border border-sage rounded text-charcoal placeholder-sage focus:outline-none focus:border-olive transition-all duration-300 focus:shadow-md"
              />
              <button
                type="submit"
                className="bg-olive text-cream px-8 py-3 rounded hover:bg-ash hover:-translate-y-1 transition-all duration-500 font-semibold whitespace-nowrap shadow-md hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
