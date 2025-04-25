
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { BlogPost } from "@/types/blog";
import { formatDate } from "@/utils/SearchUtils";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const authorInitials = post.author.name
    ? post.author.name.substring(0, 2).toUpperCase()
    : 'A';

  return (
    <Link to={`/blog/${post.slug}`} className="block group h-full">
      <Card className={`h-full overflow-hidden transition-all duration-300 hover:shadow-md dark:shadow-accent/5 hover:translate-y-[-4px] border-border/50 ${featured ? 'lg:flex' : ''}`}>
        <div className={`relative ${featured ? 'lg:w-2/5' : ''}`}>
          <AspectRatio ratio={16/9}>
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </AspectRatio>
        </div>
        
        <div className={`flex flex-col ${featured ? 'lg:w-3/5' : ''} backdrop-blur-sm bg-card/80`}>
          <CardHeader className="flex-grow">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <time dateTime={post.date} className="font-mono">{formatDate(post.date)}</time>
              <span>•</span>
              <span className="flex items-center gap-1">
                <img 
                  src={post.author.avatar} 
                  alt={authorInitials} 
                  className="w-6 h-6 rounded-full border border-border/50" 
                />
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
              <span key={tag} className="inline-flex items-center rounded-full border border-border/50 bg-secondary/50 backdrop-blur-sm px-2.5 py-0.5 text-xs font-semibold transition-colors hover:bg-secondary">
                {tag}
              </span>
            ))}
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
}
