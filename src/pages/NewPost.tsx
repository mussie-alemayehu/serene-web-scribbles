
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { PostEditor } from "@/components/PostEditor";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { createBlogPost } from "@/hooks/useBlogPosts";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";

export default function NewPost() {
  const navigate = useNavigate();
  const { user, isLoading } = useAuth();

  // Check authentication
  useEffect(() => {
    if (!isLoading && !user) {
      toast.error("You must be logged in to create a post");
      navigate('/auth');
    }
  }, [user, isLoading, navigate]);

  const handleSave = async (postData: any) => {
    try {
      const slug = postData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      
      const newPostData = {
        ...postData,
        id: uuidv4(),
        slug,
      };
      
      await createBlogPost(newPostData);
      toast.success("Post saved successfully!");
      navigate(`/blog/${slug}`);
    } catch (error: any) {
      console.error('Error saving post:', error);
      toast.error(error.message || "Failed to save post");
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <p className="text-center">Loading...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold mb-8">Create New Post</h1>
        <PostEditor onSave={handleSave} />
      </div>
    </Layout>
  );
}
