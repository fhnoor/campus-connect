import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  AlertCircle, 
  LayoutDashboard, 
  Menu,
  X,
  GraduationCap,
  Lightbulb,
  LogIn
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home", icon: GraduationCap },
  { href: "/lost-found", label: "Lost & Found", icon: Search },
  { href: "/report-issue", label: "Report Issue", icon: AlertCircle },
  { href: "/suggestions", label: "Suggestions", icon: Lightbulb },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-medium group-hover:shadow-strong transition-shadow">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-foreground text-lg leading-tight">DIT</span>
            <span className="text-xs text-muted-foreground leading-tight">Student Affairs</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link key={link.href} to={link.href}>
                <Button 
                  variant={isActive ? "secondary" : "ghost"} 
                  size="sm"
                  className={cn(
                    "gap-2",
                    isActive && "bg-primary/10 text-primary hover:bg-primary/15"
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Button>
              </Link>
            );
          })}
          <Link to="/auth">
            <Button variant="default" size="sm" className="ml-2 gap-2">
              <LogIn className="h-4 w-4" />
              Login
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t border-border/50 bg-card p-4 animate-slide-up">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)}>
                  <Button 
                    variant={isActive ? "secondary" : "ghost"} 
                    className={cn(
                      "w-full justify-start gap-3",
                      isActive && "bg-primary/10 text-primary"
                    )}
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </Button>
                </Link>
              );
            })}
            <Link to="/auth" onClick={() => setIsOpen(false)}>
              <Button variant="default" className="w-full justify-start gap-3">
                <LogIn className="h-4 w-4" />
                Login
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
