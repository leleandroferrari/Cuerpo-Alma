import { Leaf, Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="border-t border-border/50 bg-white py-12 md:py-16 overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="container flex flex-col items-center gap-8 md:flex-row md:justify-between"
    >
      <div className="flex items-center gap-3 text-lg font-bold tracking-tight text-foreground">
        <div className="bg-primary/10 p-2 rounded-xl">
          <Leaf className="h-6 w-6 text-primary" />
        </div>
        Elite Physio.
      </div>

      <p className="text-sm text-muted-foreground py-2 font-medium">
        © {new Date().getFullYear()} Elite Physiotherapy. All rights reserved. ·{" "}
        <a href="#" className="underline decoration-border underline-offset-4 hover:decoration-primary transition-colors">Privacy Policy</a>
      </p>

      <div className="flex gap-4 text-muted-foreground">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-section-alt hover:bg-primary hover:text-primary-foreground p-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"><Facebook className="h-5 w-5" /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-section-alt hover:bg-primary hover:text-primary-foreground p-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"><Instagram className="h-5 w-5" /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-section-alt hover:bg-primary hover:text-primary-foreground p-3 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"><Linkedin className="h-5 w-5" /></a>
      </div>
    </motion.div>
  </footer>
);

export default Footer;
