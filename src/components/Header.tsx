
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useIsMobile } from "@/hooks/use-mobile";
import { UserMenu } from "@/components/UserMenu";
import { useAuth } from "@/context/AuthContext";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/85 backdrop-blur-lg shadow-sm dark:shadow-accent/5' 
        : 'bg-background/50 backdrop-blur-md'
    } border-b border-border/40`}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16 sm:h-20">
        <Link to="/" className="text-xl sm:text-2xl font-serif font-bold transition-colors duration-300 hover:text-accent">
          Mindful<span className="text-accent">Blog</span>
        </Link>

        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <UserMenu />
              <button
                className="p-2 transition-transform duration-300 hover:rotate-3"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {mobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b shadow-lg animate-fade-in dark:shadow-accent/5">
                <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block py-2.5 text-lg font-medium transition-all duration-300 hover:text-accent hover:translate-x-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-4">
            <nav className="flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-3 py-2 text-sm font-medium relative group"
                >
                  <span className="transition-colors duration-300 hover:text-accent">{item.name}</span>
                  <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-accent transform -translate-x-1/2 transition-all duration-300 group-hover:w-1/2"></span>
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <UserMenu />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
