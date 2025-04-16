
import { useTheme } from "@/components/ui/theme-provider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-full w-9 h-9 transition-all duration-300 hover:bg-accent/30"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Moon className={`absolute h-5 w-5 transition-all duration-500 rotate-90 ${theme === 'dark' ? 'rotate-0 opacity-100' : 'opacity-0'}`} />
        <Sun className={`absolute h-5 w-5 transition-all duration-500 ${theme === 'light' ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
      </div>
    </Button>
  );
}
