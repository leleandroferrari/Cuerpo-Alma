import { Leaf, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-section-alt py-10">
    <div className="container flex flex-col items-center gap-6 md:flex-row md:justify-between">
      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <Leaf className="h-5 w-5 text-primary" />
        Elite Physiotherapy
      </div>

      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Elite Physiotherapy. All rights reserved. ·{" "}
        <a href="#" className="underline hover:text-foreground">Privacy Policy</a>
      </p>

      <div className="flex gap-4 text-muted-foreground">
        <a href="#" aria-label="Facebook" className="hover:text-foreground transition-colors"><Facebook className="h-5 w-5" /></a>
        <a href="#" aria-label="Instagram" className="hover:text-foreground transition-colors"><Instagram className="h-5 w-5" /></a>
        <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition-colors"><Linkedin className="h-5 w-5" /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
