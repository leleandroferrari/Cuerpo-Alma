import { Button } from "@/components/ui/button";
import josePlaceholder from "@/assets/jose_placeholder.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { sanityClient, urlFor } from "@/lib/sanity";
import { useState } from "react";
import ContactDialog from "@/components/ContactDialog";
import { Sparkles, ArrowRight, Star } from "lucide-react";

interface HeroData {
  badgeText?: string;
  title?: string;
  subtitle?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: any;
}

const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 100]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  const { data: heroData } = useQuery<HeroData>({
    queryKey: ["hero"],
    queryFn: async () => {
      const result = await sanityClient.fetch(`*[_type == "hero"][0]`);
      return result;
    },
  });

  const badgeText = heroData?.badgeText || "Innovative persönliche Wellness";
  const title = heroData?.title || "Moderne Therapie für\nspürbar mehr\nLebensqualität.";
  const subtitle = heroData?.subtitle || "Personalisierte Therapie für Ihre einzigartigen Bedürfnisse. Ich kombiniere fortschrittliche biomechanische Stimulation mit spezialisierter Frequenztherapie, um Ihr Körpergleichgewicht wiederherzustellen.";
  // We prioritize the placeholder for the new design as requested, fallback to Sanity later if updated
  const imageUrl = heroData?.image ? urlFor(heroData.image).url() : josePlaceholder;

  return (
    <section id="book" className="relative overflow-hidden min-h-screen flex items-center bg-background">
      <div className="container relative z-10 pt-32 pb-20 md:pt-40 md:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

        {/* Left Side: Content */}
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex flex-col items-start text-left max-w-xl"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-bold tracking-widest text-primary uppercase"
          >
            <Sparkles className="w-3 h-3 text-primary" />
            {badgeText}
          </motion.div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl whitespace-pre-line sm:whitespace-normal leading-[1.1] sm:leading-[1.05] mb-6">
            {title}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed mb-10"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="rounded-lg shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all h-14 px-8 text-sm font-bold tracking-wide group"
              onClick={() => setDialogOpen(true)}
            >
              Beratungstermin buchen
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-lg h-14 px-8 border-border text-foreground hover:bg-section-alt transition-all text-sm font-bold tracking-wide"
              asChild
            >
              <a href="#services">Dienstleistungen</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side: Image and Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative lg:ml-auto w-full max-w-lg"
        >
          {/* Main Image Container */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <motion.img
              style={{ y: y1 }}
              src={imageUrl}
              alt="Jose Barassa - Physiotherapeut"
              className="w-full h-[115%] object-cover object-center origin-top"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Decorative Floating Card 1 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute top-4 -right-2 sm:top-12 sm:-right-6 md:-right-12 bg-card/95 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-xl border border-border flex items-center gap-3 sm:gap-4 scale-90 sm:scale-100 origin-right"
          >
            <div className="bg-primary/10 p-2 rounded-lg text-primary">
              <Star className="w-5 h-5 fill-primary" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-bold text-foreground leading-tight mb-0.5">Für Körper und Seele</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="flex text-amber-500 text-[10px] sm:text-xs">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-muted-foreground break-words max-w-[120px] sm:max-w-none leading-snug">150+ zufriedene Kunden</span>
              </div>
            </div>
          </motion.div>

          {/* Decorative Floating Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 md:-left-12 bg-card/95 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-xl border border-border flex items-center gap-3 sm:gap-4 max-w-[200px] sm:max-w-[240px] scale-90 sm:scale-100 origin-left"
          >
            <div className="bg-accent p-3 rounded-full text-primary shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="text-xs font-medium text-muted-foreground leading-snug">
              Holistische Ansätze für körperliche & emotionale Gesundheit
            </p>
          </motion.div>
        </motion.div>

      </div>
      <ContactDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default HeroSection;
