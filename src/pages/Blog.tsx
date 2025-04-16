
import { useState, useEffect } from 'react';
import { Layout } from '@/components/Layout';
import { BlogCard } from '@/components/BlogCard';
import { BlogSearch } from '@/components/BlogSearch';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { searchBlogPosts } from '@/utils/SearchUtils';
import { BlogPost } from '@/types/blog';

function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [visible, setVisible] = useState(false);
  const { posts, loading } = useBlogPosts();

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    setFilteredPosts(searchBlogPosts(posts, searchTerm));
  }, [searchTerm, posts]);

  // Sort posts by date (newest first)
  const sortedPosts = [...filteredPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Layout>
      <section className={`py-16 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Thoughts, insights, and tutorials on technology and design.
            </p>

            <div className="max-w-md mx-auto">
              <BlogSearch onSearch={setSearchTerm} />
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-xl">Loading posts...</p>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl font-medium mb-2">No posts found</p>
              <p className="text-muted-foreground">
                Try adjusting your search terms or browse all posts.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
              {sortedPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Blog;
