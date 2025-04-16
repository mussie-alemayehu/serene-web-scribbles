
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, User, Tag } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ShareButtons } from '@/components/ShareButtons';
import { blogPosts } from '@/data/blogPosts';
import { formatDate } from '@/utils/SearchUtils';
import ReactMarkdown from 'react-markdown';

function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const post = blogPosts.find((post) => post.slug === slug);

  useEffect(() => {
    // If post doesn't exist, navigate to 404
    if (!slug || !post) {
      navigate('/404');
      return;
    }

    setVisible(true);

    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [slug, post, navigate]);

  if (!post) return null;

  return (
    <Layout>
      <article className={`py-16 transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container max-w-4xl mx-auto px-4">
          <header className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
              <div className="flex items-center gap-1">
                <User size={16} />
                <span className="flex items-center gap-1">
                  <img src={post.author.avatar} alt={post.author.name} className="w-6 h-6 rounded-full" />
                  {post.author.name}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Tag size={16} />
                <span>{post.tags.join(', ')}</span>
              </div>
            </div>

            <div className="mb-10">
              <img
                src={post.coverImage}
                alt={post.title}
                className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-md"
              />
            </div>
          </header>

          <div className="blog-content prose prose-lg md:prose-xl dark:prose-invert mx-auto mb-12">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <footer className="border-t pt-6">
            <div className="flex justify-center md:justify-end">
              <ShareButtons title={post.title} slug={post.slug} />
            </div>
          </footer>
        </div>
      </article>
    </Layout>
  );
}

export default BlogPost;
