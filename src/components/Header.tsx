import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactDialog from "@/components/ContactDialog";

const navLinks = [
  { label: "Home", href: "#book" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Location", href: "#location" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-xl border-b border-border/50 shadow-sm py-3" : "bg-transparent py-5"}`}>
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight text-foreground transition-transform hover:scale-105">
          <Leaf className="h-6 w-6 text-primary" />
          Elite Physio.
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <div className="flex bg-white/50 backdrop-blur-md rounded-full px-6 py-2 border border-border/30 shadow-sm gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
              >
                {l.label}
                <span className="absolute left-0 bottom-[-4px] w-full h-0.5 bg-primary origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>
          <Button asChild className="rounded-full shadow-md text-sm px-6 hover:shadow-lg transition-all">
            <a href="#book">Book Appointment</a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground bg-white/50 backdrop-blur-md p-2 rounded-full border border-border/30"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/50 bg-white/95 backdrop-blur-xl overflow-hidden shadow-lg absolute w-full top-full left-0 origin-top"
          >
            <div className="container flex flex-col gap-6 py-8">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors border-b border-border/50 pb-2"
                >
                  {l.label}
                </a>
              ))}
              <Button asChild className="w-full rounded-full h-12 text-base shadow-md mt-4">
                <a href="#book" onClick={() => setMobileOpen(false)}>Book Your Appointment</a>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
