
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { BlogPost } from "@/data/blogPosts";
import { FilePlus, Image, Tags, Eye } from "lucide-react";
import ReactMarkdown from "react-markdown";

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
        name: "John Smith",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      }
    };

    onSave(post);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
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

      <Tabs defaultValue="edit" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="edit">Edit</TabsTrigger>
          <TabsTrigger value="preview" className="gap-2">
            <Eye className="h-4 w-4" />
            Preview
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="edit">
          <div className="space-y-2">
            <Label htmlFor="content">Content (Markdown)</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Write your post content in Markdown"
              className="min-h-[400px] font-mono text-sm"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="preview" className="rounded-md border p-6">
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <h1 className="mb-4">{formData.title || "Untitled Post"}</h1>
            {formData.coverImage && (
              <img 
                src={formData.coverImage} 
                alt={formData.title} 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            )}
            {formData.excerpt && (
              <p className="text-lg text-muted-foreground mb-4 italic">
                {formData.excerpt}
              </p>
            )}
            <ReactMarkdown>{formData.content || "*No content yet*"}</ReactMarkdown>
            {formData.tags && (
              <div className="flex gap-2 mt-6">
                {formData.tags.split(',').map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 bg-muted rounded-full text-sm"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-4">
        <Button type="submit" className="w-full sm:w-auto">
          <FilePlus className="mr-2 h-4 w-4" />
          Save Post
        </Button>
      </div>
    </form>
  );
}
