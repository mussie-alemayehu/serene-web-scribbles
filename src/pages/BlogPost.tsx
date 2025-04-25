
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, User, Tag } from 'lucide-react';
import { Layout } from '@/components/Layout';
import { ShareButtons } from '@/components/ShareButtons';
import { getBlogPostBySlug } from '@/hooks/useBlogPosts';
import { formatDate } from '@/utils/SearchUtils';
import ReactMarkdown from 'react-markdown';
import { toast } from 'sonner';

function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  const authorInitials = post?.author?.name
    ? post.author.name.substring(0, 2).toUpperCase()
    : 'A';

  useEffect(() => {
    async function loadPost() {
      if (!slug) {
        navigate('/404');
        return;
      }

      try {
        setLoading(true);
        const postData = await getBlogPostBySlug(slug);
        
        if (!postData) {
          navigate('/404');
          return;
        }
        
        setPost(postData);
        setVisible(true);
      } catch (error) {
        console.error('Error loading post:', error);
        toast.error('Failed to load post');
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    }

    loadPost();
    window.scrollTo(0, 0);
  }, [slug, navigate]);

  if (loading) {
    return (
      <Layout>
        <div className="container max-w-4xl mx-auto px-4 py-16">
          <p className="text-center">Loading article...</p>
        </div>
      </Layout>
    );
  }

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
                  <img 
                    src={post.author.avatar} 
                    alt={authorInitials} 
                    className="w-6 h-6 rounded-full" 
                  />
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
