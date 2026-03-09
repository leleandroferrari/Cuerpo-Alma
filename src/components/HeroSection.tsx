import { Button } from "@/components/ui/button";
import heroImageFallback from "@/assets/hero-physio.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { sanityClient, urlFor } from "@/lib/sanity";
import { useState } from "react";
import ContactDialog from "@/components/ContactDialog";

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

  const badgeText = heroData?.badgeText || "Premium Physiotherapy Care";
  const title = heroData?.title || "Move Better,\nLive Pain‑Free.";
  const subtitle = heroData?.subtitle || "Expert, personalised physiotherapy care tailored to your body. Whether you're recovering from surgery or chasing a personal best, we're here every step of the way.";
  const imageUrl = heroData?.image ? urlFor(heroData.image).url() : heroImageFallback;

  return (
    <section id="book" className="relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <motion.img
          style={{ y: y1 }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={imageUrl}
          alt="Modern physiotherapy clinic interior"
          className="h-[120%] w-full object-cover origin-top"
        />
        <div className="absolute inset-0 bg-hero-overlay/60 backdrop-blur-[2px]" />
      </div>
      <div className="container relative z-10 py-24 md:py-40">
        <motion.div
          style={{ y: y2, opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-3xl"
        >
          <span className="inline-block mb-4 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md border border-white/20">
            {badgeText}
          </span>
          <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl whitespace-pre-line">
            {title}
          </h1>
          <p className="mt-6 text-lg text-white/90 md:text-xl font-light leading-relaxed max-w-2xl">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="rounded-full shadow-lg hover:shadow-xl transition-all h-14 px-8 text-base font-medium"
              onClick={() => setDialogOpen(true)}
            >
              Contact Us
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 border-white/40 text-white hover:bg-white hover:text-black transition-all text-base font-medium backdrop-blur-sm bg-black/10" asChild>
              <a href="#services">View Our Services</a>
            </Button>
          </div>
          <ContactDialog open={dialogOpen} onOpenChange={setDialogOpen} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
