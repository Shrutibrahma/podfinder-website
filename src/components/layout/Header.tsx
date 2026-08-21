import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Find a pod", path: "/search" },
  { label: "Request a pod", path: "/request" },
  { label: "Teach a pod", path: "/for-instructors" },
  { label: "How it works", path: "/how-it-works" },
  { label: "Safety", path: "/safety" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === "/";
  const showTransparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        showTransparent
          ? "bg-transparent"
          : "bg-card/95 backdrop-blur-md shadow-card border-b border-border"
      )}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5">
          <span
            className={cn(
              "w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300",
              showTransparent ? "bg-white/15 text-accent" : "bg-brand-light text-brand-deep"
            )}
          >
            <Network className="w-5 h-5" />
          </span>
          <span
            className={cn(
              "text-xl md:text-2xl font-display font-bold transition-colors duration-300",
              showTransparent ? "text-white" : "text-foreground"
            )}
          >
            Pod<span className="text-accent">Finder</span>
          </span>
          <span
            className={cn(
              "hidden sm:inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300",
              showTransparent
                ? "border-white/30 text-white/80"
                : "border-border text-muted-foreground"
            )}
          >
            <MapPin className="w-3 h-3" /> Illustrative demo data
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                location.pathname === link.path
                  ? "text-accent"
                  : showTransparent
                    ? "text-white/85"
                    : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            size="sm"
            className="bg-accent hover:bg-coral-hover text-accent-foreground rounded-full"
            asChild
          >
            <Link to="/request">Request a pod</Link>
          </Button>
          <Link
            to="/profile"
            aria-label="Your profile"
            className={cn(
              "w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold transition-colors",
              showTransparent
                ? "bg-white/15 text-white hover:bg-white/25"
                : "bg-brand-light text-brand-deep hover:bg-brand-soft"
            )}
          >
            RA
          </Link>
        </div>

        <button
          className={cn(
            "lg:hidden p-2 rounded-md transition-colors",
            showTransparent ? "text-white hover:bg-white/10" : "hover:bg-muted"
          )}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border shadow-lg overflow-hidden"
          >
            <nav className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="py-3 px-4 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
                <Button
                  className="bg-accent hover:bg-coral-hover text-accent-foreground rounded-full"
                  asChild
                >
                  <Link to="/request">Request a pod</Link>
                </Button>
                <Button variant="outline" className="rounded-full" asChild>
                  <Link to="/saved">Saved</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
