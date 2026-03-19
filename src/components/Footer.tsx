
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-white py-12 md:py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container flex flex-col items-center gap-8 md:flex-col"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 w-full justify-between">
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 text-2xl font-bold tracking-tight text-foreground">
              <div className="bg-primary/10 p-2 rounded-xl">
                {/* Leaf icon removed as per instruction, but keeping the div for styling consistency if needed */}
                {/* <Leaf className="h-6 w-6 text-primary" /> */}
              </div>
              Cuerpo & Alma.
            </div>
            <p className="text-muted-foreground max-w-sm">
              Körper und Seele im Einklang.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-muted-foreground items-center md:items-end">
            <a href="https://maps.google.com/?q=Gewerbestrasse+4+9524+Zuzwil" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <MapPin className="h-4 w-4" />
              Gewerbestrasse 4, 9524 Zuzwil
            </a>
            <a href="tel:0794830806" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              079 483 08 06
            </a>
            <a href="mailto:kontakt@cuerpo-alma.ch" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              kontakt@cuerpo-alma.ch
            </a>
          </div>
        </div>

        <div className="w-full border-t border-border/50 mt-4 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-6 text-sm text-foreground/60 w-full justify-between items-center">
            <p>&copy; {currentYear} Cuerpo & Alma. Alle Rechte vorbehalten.</p>
            <div className="flex gap-4 md:gap-8">
              <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutzbestimmungen</Link>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
