import Link from 'next/link';
import type { Metadata } from 'next';

interface BlogPostParams {
  slug: string;
}

interface BlogPost {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
  content: React.ReactNode;
}

const blogPosts: Record<string, BlogPost> = {
  'slow-living-in-modern-times': {
    slug: 'slow-living-in-modern-times',
    title: 'Slow Living in Modern Times',
    category: 'Lifestyle',
    author: 'Sarah Mitchell',
    date: '2024-03-15',
    excerpt:
      'Exploring how to cultivate intentionality and presence amidst the constant noise of contemporary life.',
    content: (
      <>
        <p>
          In a world that celebrates hustle, productivity, and constant connectivity, the concept of slow living emerges as a gentle rebellion. It is not about laziness or apathy—rather, it is a deliberate choice to be present, intentional, and mindful of how we spend our time and energy.
        </p>

        <p>
          The modern pace can be intoxicating. We find ourselves caught in an endless cycle of notifications, expectations, and self-imposed deadlines. Our mornings begin with screens, our days are fragmented by alerts, and our evenings often blur into more of the same. We are, paradoxically, more connected than ever before, yet more isolated in our thoughts.
        </p>

        <h2>The Foundation of Slow Living</h2>

        <p>
          Slow living asks a simple question: What if we paused? What if we examined our habits, our schedules, and our priorities with fresh eyes? It is not about rejecting modernity wholesale, but rather about being intentional about which aspects of contemporary life serve us and which ones diminish our wellbeing.
        </p>

        <p>
          This practice finds its roots in various philosophical and cultural traditions. The Japanese concept of "ma"—the meaningful emptiness or space—teaches us that what we leave blank is as important as what we fill in. The Italian "dolce vita" reminds us that life's sweetness often lies in the seemingly simple moments: a good meal shared with loved ones, an unhurried conversation, a walk through a quiet neighborhood.
        </p>

        <h2>Practical Steps Toward Intentionality</h2>

        <p>
          Beginning a slow living practice does not require drastic change. Small, consistent shifts can profound effects:
        </p>

        <ul>
          <li><strong>Create technology boundaries:</strong> Designate spaces or times where phones and screens have no place. This might be your morning routine, meals, or the bedroom.</li>
          <li><strong>Practice single-tasking:</strong> Choose one activity and give it your full attention. Whether reading, cooking, or working, depth of focus creates richness of experience.</li>
          <li><strong>Cultivate rituals:</strong> Daily rituals ground us and create structure without rigidity. A morning tea ceremony, an evening walk, a weekly book club.</li>
          <li><strong>Invest in quality over quantity:</strong> Whether in possessions, relationships, or experiences, fewer things done well often bring more joy than many things done hastily.</li>
          <li><strong>Connect with seasons:</strong> Eat seasonal foods, adjust your routine with daylight, notice the subtle shifts in nature throughout the year.</li>
        </ul>

        <h2>The Ripple Effect</h2>

        <p>
          When we slow down, we often discover unexpected benefits. Better sleep emerges naturally from reduced evening screen time. Meals taste richer when we are not scrolling simultaneously. Relationships deepen when we are truly present. Creativity flourishes in spaces of quietude.
        </p>

        <p>
          Slow living is not a destination to arrive at, but a continuous practice of mindfulness. It is about reclaiming agency over our own lives—deciding what deserves our attention, what brings us joy, and what truly matters. In this act of conscious choosing, we find both freedom and peace.
        </p>

        <blockquote>
          <p>
            "The secret of getting ahead is getting started. The secret of getting started is breaking your complex overwhelming problems into small manageable tasks, and then starting on the first one." — Mark Twain
          </p>
        </blockquote>

        <p>
          As you move through your day, try pausing and asking yourself: Is this choice aligned with what I truly value? In these small moments of reflection lies the quiet power of slow living.
        </p>
      </>
    ),
  },
  'the-art-of-minimalism': {
    slug: 'the-art-of-minimalism',
    title: 'The Art of Minimalism',
    category: 'Philosophy',
    author: 'Sarah Mitchell',
    date: '2024-03-08',
    excerpt:
      'Minimalism is not about emptiness—it\'s about clarity. Discover how reducing clutter can lead to meaning.',
    content: (
      <>
        <p>
          There is a misconception that minimalism means living in a sparse, austere environment devoid of comfort or joy. The truth is far more nuanced. True minimalism is about intentional living—keeping what resonates with you and releasing what does not. It is a practice of abundance through subtraction.
        </p>

        <p>
          In our consumer-driven culture, we are conditioned to believe that more equals better. More clothes, more gadgets, more decorations, more experiences to document and share. Yet studies consistently show that beyond meeting basic needs, additional possessions bring diminishing returns on happiness. What does increase satisfaction is space—mental space, physical space, temporal space.
        </p>

        <h2>Beyond the Physical</h2>

        <p>
          While minimalism often begins in our physical surroundings, its reach extends much further. A minimalist mindset transforms how we approach relationships, commitments, and even our thoughts. When we stop accepting every invitation, every obligation, every thought that arises, we create room for what truly matters.
        </p>

        <p>
          Minimalism in relationships means investing deeply in those bonds that nourish us. It means saying no to superficial connections that drain energy without offering genuine connection. It means being fully present with the people we love, rather than splitting our attention across a dozen acquaintances.
        </p>

        <h2>The Practice of Letting Go</h2>

        <p>
          One of the most liberating aspects of minimalism is the practice of letting go. This might mean releasing possessions that once served us but no longer do. A gift you keep out of obligation rather than love. A book you felt you should read but never will. Clothes that don't make you feel good.
        </p>

        <p>
          Each item you release is an act of honesty—an acknowledgment that your space, time, and energy are valuable and deserve to be used intentionally. This is not cruelty toward objects, but kindness toward yourself.
        </p>

        <h2>Creating Space for Life</h2>

        <p>
          When we clear our environment of unnecessary things, something magical happens. Mental clarity improges. Creativity awakens. We notice details we had overlooked. We find ourselves with both time and energy we didn't know we had. This is the real gift of minimalism.
        </p>

        <p>
          It is not about deprivation. It is about sufficiency. It is about discovering that "enough" is far more satisfying than "more."
        </p>
      </>
    ),
  },
  'earthy-interiors-design-guide': {
    slug: 'earthy-interiors-design-guide',
    title: 'Earthy Interiors: A Design Guide',
    category: 'Design',
    author: 'Sarah Mitchell',
    date: '2024-02-28',
    excerpt:
      'Learn how to create a home that feels grounded and inviting through natural materials and warm tones.',
    content: (
      <>
        <p>
          There is something profoundly soothing about spaces filled with natural materials and earthy tones. When we surround ourselves with the colors and textures of the natural world—soft beiges, deep ochres, muted greens—our nervous systems respond with a sense of calm. We are, after all, creatures of the earth, and our homes should reflect this fundamental connection.
        </p>

        <p>
          Earthy interiors need not feel dated or rustic. Modern minimalism pairs beautifully with natural elements, creating spaces that feel both timeless and contemporary. The key is intentionality and balance.
        </p>

        <h2>Color Palettes for Grounded Spaces</h2>

        <p>
          Begin with a foundation of warm neutrals. Off-whites, creams, and soft beiges create a serene backdrop. Layer in deeper tones: warm grays, dusty olive greens, terracotta, and burnt sienna. These colors are naturally harmonious because they exist together in nature—in soil, stone, plant life, and sky.
        </p>

        <p>
          You need not paint entire walls. Accent walls, textiles, and artwork can introduce these tones in measured doses. A single watercolor piece featuring warm ochres can anchor a room. Linen curtains in natural beige let light filter softly. A wool throw in sage green adds warmth to a seating area.
        </p>

        <h2>Materials That Matter</h2>

        <p>
          The tactile experience of a space is as important as its visual aesthetic. Incorporate natural materials that improve with age and use:
        </p>

        <ul>
          <li><strong>Wood:</strong> Unfinished or lightly stained wood brings warmth. Consider it in flooring, shelving, or furniture.</li>
          <li><strong>Stone:</strong> Marble, slate, or limestone introduce cool elegance while remaining earthy.</li>
          <li><strong>Natural fibers:</strong> Linen, wool, cotton, and jute in rugs, cushions, and curtains add texture.</li>
          <li><strong>Clay and ceramics:</strong> Handmade pottery pieces tell stories and bring human warmth to interiors.</li>
          <li><strong>Plants:</strong> Living greenery is perhaps the most essential element, purifying air and connecting us to nature.</li>
        </ul>

        <h2>Lighting for Ambiance</h2>

        <p>
          Harsh artificial light disrupts the calm of earthy spaces. Instead, opt for warm-toned lighting that mimics natural light. Edison bulbs, fabric lampshades, and candles create a gentle glow that makes spaces feel both welcoming and intimate.
        </p>

        <p>
          Maximize natural light by keeping windows uncluttered. Let sunlight move through your space during the day; it will naturally bring out the warmth in your color palette and materials.
        </p>

        <h2>Bringing It All Together</h2>

        <p>
          An earthy interior is ultimately about creating a retreat—a place where you feel grounded, nourished, and at peace. Start with one room or even one corner, and allow your space to evolve organically. Let your home tell the story of who you are and what brings you comfort.
        </p>
      </>
    ),
  },
  'seasonal-rituals-embrace-change': {
    slug: 'seasonal-rituals-embrace-change',
    title: 'Seasonal Rituals: Embrace Change',
    category: 'Wellness',
    author: 'Sarah Mitchell',
    date: '2024-02-20',
    excerpt: 'Explore rituals that align us with the earth\'s cycles and help us flow with the seasons.',
    content: (
      <>
        <p>
          For much of human history, our lives were intimately tied to the seasons. Planting and harvest determined rhythms of work and rest. Daylight hours shaped our sleep patterns. The changing temperatures guided our clothing, food, and activities. We lived in harmony with natural cycles.
        </p>

        <p>
          Modern life has largely disconnected us from these rhythms. We heat and cool our homes to constant temperatures year-round. Supermarkets stock strawberries in winter and pumpkins in summer. Our artificial lighting extends productive daylight indefinitely. While these conveniences offer comfort, we have lost something precious: the grounding effect of seasonal change.
        </p>

        <h2>The Power of Seasonal Rituals</h2>

        <p>
          Reconnecting with seasons does not require moving to a farm or rejecting modern conveniences. Instead, it invites us to intentionally mark seasonal transitions and align our practices with natural rhythms. These rituals—small acts performed with awareness—anchor us and create a sense of flow rather than constant striving.
        </p>

        <h2>Spring: Renewal and Emergence</h2>

        <p>
          Spring invites us to renew. Begin a spring cleaning practice not as a chore, but as a ritual of release and purification. Open windows and let fresh air circulate. Declutter a space you use daily. Plant seeds or tend young plants—the act of nurturing new growth mirrors our own potential for renewal.
        </p>

        <p>
          Consider a spring reset for your routines. Adjust your sleep schedule with lengthening daylight. Begin moving your body outdoors. Refresh your wardrobe with lighter fabrics and brighter colors.
        </p>

        <h2>Summer: Vitality and Warmth</h2>

        <p>
          Summer gifts us abundant light and warmth. Embrace it. Extend your days by spending morning and evening outdoors. Eat seasonally—fresh berries, tomatoes, stone fruits. Engage in activities that feel playful rather than productive. Summer is permission to slow down in a different way, to exist more lightly.
        </p>

        <h2>Autumn: Harvest and Gratitude</h2>

        <p>
          Autumn teaches us about abundance and completion. Celebrate the harvest, whether in a farmer's market or your own garden. Cook warming foods made from fresh ingredients. Create a gratitude practice as daylight lessens—acknowledging what has been gathered (literally and metaphorically) before moving into winter's introspection.
        </p>

        <h2>Winter: Rest and Reflection</h2>

        <p>
          Winter invites us inward. Honor the shortened days by adjusting your expectations. Sleep longer if you can. Create cozy spaces for rest and reflection. This is the season for books, for journaling, for quiet pursuits. Winter is not something to endure, but an opportunity to deepen.
        </p>

        <h2>The Rhythm Beneath</h2>

        <p>
          By consciously moving through seasonal cycles, we remember that life is not static but constantly evolving. Each season brings gifts and lessons. When we attune ourselves to these natural rhythms, we find that we move with life's flow rather than against it. This alignment brings a deep sense of peace.
        </p>
      </>
    ),
  },
};

export async function generateMetadata({
  params,
}: {
  params: BlogPostParams;
}): Promise<Metadata> {
  const post = blogPosts[params.slug];

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Olive & Ash`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: { params: BlogPostParams }) {
  const post = blogPosts[params.slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-cream">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold text-charcoal mb-4">
              Post Not Found
            </h1>
            <p className="text-lg text-ash mb-8">
              We could not find the post you are looking for.
            </p>
            <Link
              href="/"
              className="inline-block bg-olive text-cream px-8 py-3 rounded hover:bg-ash transition-colors duration-200 font-semibold"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-olive hover:text-ash transition-colors duration-200 mb-8"
          >
            <span className="mr-2">←</span>
            <span>Back to Essays</span>
          </Link>
        </div>

        <article className="max-w-prose mx-auto">
          <header className="mb-12">
            <span className="inline-block uppercase text-xs font-bold tracking-widest text-olive mb-4">
              {post.category}
            </span>

            <h1 className="font-heading text-5xl font-bold text-charcoal mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-sage border-t border-b border-sage py-4">
              <div>
                <span>{post.author}</span>
                <span className="mx-3">•</span>
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
              <span className="text-xs mt-4 sm:mt-0">
                Estimated reading time: 6 min
              </span>
            </div>
          </header>

          <div className="prose prose-lg max-w-prose">
            {post.content}
          </div>

          <footer className="mt-16 pt-12 border-t border-sage">
            <div className="bg-sage bg-opacity-10 p-8 rounded">
              <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
                About {post.author}
              </h3>
              <p className="text-ash leading-relaxed">
                Sarah Mitchell is a writer and thoughtful observer of contemporary life. Through her essays on Olive & Ash, she explores slow living, minimalism, and the intersections of design, wellness, and culture.
              </p>
            </div>
          </footer>
        </article>

        <section className="mt-20 pt-12 border-t border-sage">
          <div className="max-w-prose mx-auto">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-8">
              More Essays
            </h2>
            <div className="space-y-6">
              {Object.values(blogPosts)
                .filter((p) => p.slug !== post.slug)
                .slice(0, 3)
                .map((relatedPost) => (
                  <div key={relatedPost.slug} className="group">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <h3 className="font-heading text-lg font-bold text-charcoal group-hover:text-olive transition-colors duration-200 mb-2">
                        {relatedPost.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-sage mb-3">
                      <span>{relatedPost.category}</span>
                      <span className="mx-2">•</span>
                      <time dateTime={relatedPost.date}>
                        {new Date(relatedPost.date).toLocaleDateString(
                          'en-US',
                          { year: 'numeric', month: 'short', day: 'numeric' }
                        )}
                      </time>
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
