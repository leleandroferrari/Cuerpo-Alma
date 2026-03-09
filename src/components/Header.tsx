import { Zap, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactDialog from "@/components/ContactDialog";

const navLinks = [
  { label: "Home", href: "#book" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Location", href: "#location" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ease-in-out ${isScrolled
          ? "bg-white/70 backdrop-blur-md border-b border-border/40 shadow-sm py-4"
          : "bg-transparent py-8"
        }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex flex-col group transition-transform hover:scale-[1.02]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-500">
              <Zap className="h-5 w-5 fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tighter text-foreground uppercase">
              Jose Barassa
            </span>
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase ml-10 -mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
            Vitality Clinic
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <div className="flex items-center gap-10">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs font-bold tracking-widest uppercase text-foreground/70 hover:text-primary transition-all relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          <Button
            onClick={() => setDialogOpen(true)}
            className="rounded-full shadow-lg hover:shadow-primary/20 transition-all font-bold text-xs uppercase tracking-widest px-8"
          >
            <Phone className="w-3 h-3 mr-2" />
            Contact
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground bg-white/50 backdrop-blur-md p-3 rounded-xl border border-border/30 shadow-sm"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden mt-2 mx-4 rounded-3xl border border-border/50 bg-white shadow-2xl overflow-hidden absolute top-full left-0 right-0 origin-top"
          >
            <div className="flex flex-col p-6 gap-2">
              {navLinks.map((l, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-bold uppercase tracking-widest text-foreground py-4 px-4 hover:bg-primary/5 hover:text-primary rounded-xl transition-all border-b border-border/5 last:border-0"
                >
                  {l.label}
                </motion.a>
              ))}
              <Button
                onClick={() => {
                  setMobileOpen(false);
                  setDialogOpen(true);
                }}
                className="w-full rounded-2xl h-14 text-xs font-bold uppercase tracking-widest shadow-xl mt-4"
              >
                Contact Us
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <ContactDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </header>
  );
};

export default Header;

