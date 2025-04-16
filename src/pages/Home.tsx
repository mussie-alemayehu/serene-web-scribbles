
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { BlogCard } from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import { useBlogPosts } from '@/hooks/useBlogPosts';

function Home() {
  const [visible, setVisible] = useState(false);
  const { posts, loading } = useBlogPosts();

  useEffect(() => {
    setVisible(true);
  }, []);

  // Show most recent posts first
  const recentPosts = [...posts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 3);

  const featuredPost = recentPosts[0];
  const otherPosts = recentPosts.slice(1);

  return (
    <Layout>
      <section className={`py-16 md:py-24 transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight">
              Welcome to <span className="text-accent">Mindful</span>Blog
            </h1>
            <p className="text-xl text-muted-foreground">
              Exploring ideas at the intersection of technology, design, and personal growth.
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-xl">Loading posts...</p>
            </div>
          ) : (
            <div className="space-y-16">
              {featuredPost && (
                <div className="animate-fade-in">
                  <BlogCard post={featuredPost} featured />
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-serif font-bold">Recent Posts</h2>
                  <Link to="/blog">
                    <Button variant="ghost" className="gap-1">
                      View all <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
                  {otherPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Home;
