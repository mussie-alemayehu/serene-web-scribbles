
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { BlogPost } from "@/data/blogPosts";
import { formatDate } from "@/utils/SearchUtils";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <Link to={`/blog/${post.slug}`} className="block group">
      <Card className={`h-full overflow-hidden transition-all duration-300 ${featured ? 'lg:flex' : ''} hover:shadow-md`}>
        <div className={`relative ${featured ? 'lg:w-2/5' : 'h-48'}`}>
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className={`flex flex-col ${featured ? 'lg:w-3/5' : ''}`}>
          <CardHeader className="flex-grow">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>•</span>
              <span className="flex items-center gap-1">
                <img src={post.author.avatar} alt={post.author.name} className="w-6 h-6 rounded-full" />
                {post.author.name}
              </span>
            </div>
            <h3 className={`${featured ? 'text-2xl md:text-3xl' : 'text-xl'} font-serif font-bold transition-colors duration-200 group-hover:text-accent`}>
              {post.title}
            </h3>
            <p className="text-muted-foreground mt-2 line-clamp-3">
              {post.excerpt}
            </p>
          </CardHeader>
          
          <CardFooter className="pt-4 pb-6 flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span key={tag} className="inline-flex items-center rounded-full border bg-secondary px-2.5 py-0.5 text-xs font-semibold transition-colors">
                {tag}
              </span>
            ))}
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
}
