import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-muted/40 backdrop-blur-sm">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-serif font-bold tracking-tight transition-colors duration-300 hover:text-accent">
              Mindful<span className="text-accent">Blog</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Exploring ideas at the intersection of technology, design, and personal growth.
              Join me on this journey of continuous learning and discovery.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              {['Home', 'Blog', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-muted-foreground transition-all duration-300 hover:text-accent hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              {[
                { icon: Github, label: "GitHub", url: "https://github.com/mussie-alemayehu" },
                { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/mussie-alemayehu/" }
              ].map(({ icon: Icon, label, url }) => (
                <a 
                  key={label}
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={label} 
                  className="hover:text-accent transition-all duration-300 hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} MindfulBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
