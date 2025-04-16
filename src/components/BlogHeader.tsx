
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export function BlogHeader() {
  const { user } = useAuth();

  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-3xl font-serif font-bold">Blog Posts</h1>
      {user && (
        <Button asChild className="gap-2">
          <Link to="/new-post">
            <Plus className="h-4 w-4" />
            Add Blog
          </Link>
        </Button>
      )}
    </div>
  );
}
