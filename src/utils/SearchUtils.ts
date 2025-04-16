
import { BlogPost } from "@/data/blogPosts";

export function searchBlogPosts(posts: BlogPost[], searchTerm: string): BlogPost[] {
  if (!searchTerm.trim()) {
    return posts;
  }

  const lowercaseSearch = searchTerm.toLowerCase().trim();
  
  return posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(lowercaseSearch) ||
      post.content.toLowerCase().includes(lowercaseSearch) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseSearch)) ||
      post.excerpt.toLowerCase().includes(lowercaseSearch)
    );
  });
}

export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  
  return new Date(dateString).toLocaleDateString('en-US', options);
}
