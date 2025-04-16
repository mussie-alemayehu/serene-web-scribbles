import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { FilePlus } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <Link 
            to="/" 
            className="text-2xl md:text-3xl font-serif font-bold tracking-tight hover:text-accent transition-colors"
          >
            Mindful<span className="bg-gradient-to-r from-accent to-accent-foreground bg-clip-text text-transparent">Blog</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "font-medium transition-colors hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform",
                  location.pathname === link.href && "text-accent after:scale-x-100"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4">
              <Button asChild variant="ghost" size="sm" className="gap-2">
                <Link to="/new-post">
                  <FilePlus className="h-4 w-4" />
                  <span>New Post</span>
                </Link>
              </Button>
              <ThemeToggle />
            </div>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <Button asChild variant="ghost" size="icon">
              <Link to="/new-post">
                <FilePlus className="h-4 w-4" />
              </Link>
            </Button>
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-1"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border/40 shadow-lg animate-fade-in">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "py-2 font-medium transition-colors hover:text-accent",
                    location.pathname === link.href && "text-accent"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
