
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { BlogPost } from '@/types/blog';
import { toast } from 'sonner';

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      setLoading(true);
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          author:authors(name, avatar)
        `)
        .order('date', { ascending: false });

      if (error) throw error;

      if (data) {
        const formattedPosts = data.map(post => ({
          id: post.id,
          title: post.title,
          slug: post.slug,
          content: post.content,
          excerpt: post.excerpt || '',
          coverImage: post.cover_image || '',
          date: post.date,
          tags: post.tags || [],
          author: {
            name: post.author?.name || 'Unknown Author',
            avatar: post.author?.avatar || 'https://via.placeholder.com/150'
          }
        }));
        
        setPosts(formattedPosts);
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast.error('Failed to load blog posts');
    } finally {
      setLoading(false);
    }
  }

  return { posts, loading, refetch: fetchPosts };
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select(`
        *,
        author:authors(name, avatar)
      `)
      .eq('slug', slug)
      .single();

    if (error) throw error;

    if (data) {
      return {
        id: data.id,
        title: data.title,
        slug: data.slug,
        content: data.content,
        excerpt: data.excerpt || '',
        coverImage: data.cover_image || '',
        date: data.date,
        tags: data.tags || [],
        author: {
          name: data.author?.name || 'Unknown Author',
          avatar: data.author?.avatar || 'https://via.placeholder.com/150'
        }
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
}

export async function createBlogPost(postData: Omit<BlogPost, 'id'>): Promise<string> {
  try {
    const { data: userData, error: userError } = await supabase.auth.getUser();
    
    if (userError || !userData.user) throw new Error('You must be logged in to create a post');
    
    const { data, error } = await supabase
      .from('blog_posts')
      .insert({
        title: postData.title,
        slug: postData.slug,
        content: postData.content,
        excerpt: postData.excerpt,
        cover_image: postData.coverImage,
        tags: postData.tags,
        author_id: userData.user.id,
        date: new Date().toISOString()
      })
      .select('slug')
      .single();

    if (error) throw error;
    
    return data.slug;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
}
