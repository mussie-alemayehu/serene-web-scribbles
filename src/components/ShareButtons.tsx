
import { useState } from "react";
import { Twitter, Facebook, Linkedin, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { shareOnTwitter, shareOnFacebook, shareOnLinkedIn, copyToClipboard } from "@/utils/ShareUtils";
import { useToast } from "@/components/ui/use-toast";

interface ShareButtonsProps {
  title: string;
  slug: string;
}

export function ShareButtons({ title, slug }: ShareButtonsProps) {
  const { toast } = useToast();
  const [copying, setCopying] = useState(false);
  
  const url = `${window.location.origin}/blog/${slug}`;
  
  const handleCopyLink = async () => {
    if (copying) return;
    
    setCopying(true);
    const success = await copyToClipboard(url);
    
    toast({
      title: success ? "Link copied to clipboard" : "Failed to copy link",
      variant: success ? "default" : "destructive",
      duration: 2000,
    });
    
    setTimeout(() => setCopying(false), 1000);
  };
  
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-muted-foreground mr-1">Share:</span>
      
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => shareOnTwitter(title, url)} 
        aria-label="Share on Twitter"
        className="rounded-full h-8 w-8 hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10"
      >
        <Twitter size={16} />
      </Button>
      
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => shareOnFacebook(url)} 
        aria-label="Share on Facebook"
        className="rounded-full h-8 w-8 hover:text-[#4267B2] hover:bg-[#4267B2]/10"
      >
        <Facebook size={16} />
      </Button>
      
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={() => shareOnLinkedIn(title, url)} 
        aria-label="Share on LinkedIn"
        className="rounded-full h-8 w-8 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10"
      >
        <Linkedin size={16} />
      </Button>
      
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={handleCopyLink} 
        aria-label="Copy link"
        className="rounded-full h-8 w-8"
      >
        <Link2 size={16} />
      </Button>
    </div>
  );
}
