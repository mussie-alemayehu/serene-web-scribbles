
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { BlogPost } from "@/data/blogPosts";
import { FilePlus, Image, Tags } from "lucide-react";

interface PostEditorProps {
  onSave: (post: Partial<BlogPost>) => void;
  initialData?: Partial<BlogPost>;
}

export function PostEditor({ onSave, initialData }: PostEditorProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    coverImage: initialData?.coverImage || "",
    tags: initialData?.tags?.join(", ") || "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      toast.error("Please fill in all required fields");
      return;
    }

    const post: Partial<BlogPost> = {
      ...formData,
      tags: formData.tags.split(",").map(tag => tag.trim()).filter(Boolean),
      date: new Date().toISOString(),
      author: {
        name: "John Smith", // This would come from authenticated user
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      }
    };

    onSave(post);
    toast.success("Post saved successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-6">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Enter post title"
          className="text-lg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="excerpt">Excerpt</Label>
        <Textarea
          id="excerpt"
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          placeholder="Brief description of your post"
          className="h-20"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="coverImage">Cover Image URL</Label>
        <div className="flex gap-2">
          <Input
            id="coverImage"
            value={formData.coverImage}
            onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
            placeholder="Enter image URL"
            className="flex-1"
          />
          <Button type="button" variant="outline" size="icon">
            <Image className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="tags">Tags</Label>
        <div className="flex gap-2">
          <Input
            id="tags"
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            placeholder="Enter tags separated by commas"
          />
          <Button type="button" variant="outline" size="icon">
            <Tags className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Content (Markdown)</Label>
        <Textarea
          id="content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          placeholder="Write your post content in Markdown"
          className="min-h-[300px] font-mono text-sm"
        />
      </div>

      <div className="flex justify-end gap-4">
        <Button type="submit" className="w-full sm:w-auto">
          <FilePlus className="mr-2 h-4 w-4" />
          Save Post
        </Button>
      </div>
    </form>
  );
}
