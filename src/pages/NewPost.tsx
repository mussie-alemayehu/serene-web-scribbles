
import { Layout } from "@/components/Layout";
import { PostEditor } from "@/components/PostEditor";
import { blogPosts } from "@/data/blogPosts";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function NewPost() {
  const navigate = useNavigate();

  const handleSave = (postData: any) => {
    const newPost = {
      ...postData,
      id: uuidv4(),
      slug: postData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
    };
    
    // In a real app, this would be an API call
    blogPosts.unshift(newPost);
    navigate(`/blog/${newPost.slug}`);
  };

  return (
    <Layout>
      <div className="container max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold mb-8">Create New Post</h1>
        <PostEditor onSave={handleSave} />
      </div>
    </Layout>
  );
}
