import { Button } from "@/components/ui/button";
import heroImageFallback from "@/assets/hero-physio.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { sanityClient, urlFor } from "@/lib/sanity";
import { useState } from "react";
import ContactDialog from "@/components/ContactDialog";
import { Sparkles, ArrowRight } from "lucide-react";

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
  const y1 = useTransform(scrollY, [0, 1000], [0, 350]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const y2 = useTransform(scrollY, [0, 800], [0, 200]);

  const { data: heroData, isLoading } = useQuery<HeroData>({
    queryKey: ["hero"],
    queryFn: async () => {
      const result = await sanityClient.fetch(`*[_type == "hero"][0]`);
      return result;
    },
  });

  const badgeText = heroData?.badgeText || "Innovative persönliche Wellness";
  const title = heroData?.title || "Holen Sie sich Ihre\nVitalität zurück.";
  const subtitle = heroData?.subtitle || "Jose Barassa kombiniert fortschrittliche biomechanische Stimulation mit spezialisierter Frequenztherapie, um Ihr Körpergleichgewicht wiederherzustellen und Ihr volles körperliches Potenzial freizusetzen.";
  const imageUrl = heroData?.image ? urlFor(heroData.image).url() : heroImageFallback;

  return (
    <section id="book" className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <motion.img
          style={{ y: y1 }}
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src={imageUrl}
          alt="Moderne Vitalitätsklinik"
          className="h-[120%] w-full object-cover origin-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 backdrop-blur-[1px]" />
      </div>

      <div className="container relative z-10 pt-32 pb-20 md:pt-48 md:pb-32">
        <motion.div
          style={{ y: y2, opacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30 px-5 py-2 text-xs font-bold tracking-widest text-white uppercase"
          >
            <Sparkles className="w-3 h-3 text-primary-foreground" />
            {badgeText}
          </motion.div>

          <h1 className="text-5xl font-black tracking-tight text-white md:text-7xl lg:text-8xl whitespace-pre-line leading-[1.1]">
            {title.split('\n').map((line, i) => (
              <span key={i} className="block overflow-hidden pb-2">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 text-xl text-white/80 md:text-2xl font-light leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12 flex flex-wrap gap-5"
          >
            <Button
              size="lg"
              className="rounded-2xl shadow-2xl shadow-primary/40 hover:shadow-primary/60 transition-all h-16 px-10 text-sm font-bold uppercase tracking-widest group"
              onClick={() => setDialogOpen(true)}
            >
              Beratungstermin buchen
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-2xl h-16 px-10 border-white/20 text-white hover:bg-white hover:text-black transition-all text-sm font-bold uppercase tracking-widest backdrop-blur-md bg-white/5"
              asChild
            >
              <a href="#services">Dienstleistungen entdecken</a>
            </Button>
          </motion.div>

          <ContactDialog open={dialogOpen} onOpenChange={setDialogOpen} />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent opacity-50" />
        <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">Scrollen</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;

