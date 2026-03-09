import { motion, Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Aurelius",
    role: "Professional Athlete",
    image: "/avatars/marcus.png",
    quote:
      "The Sport Massage and BMS sessions at Jose's clinic have been a game-changer for my recovery. I feel more explosive and my muscle tension is virtually gone.",
    rating: 5,
  },
  {
    name: "Elena Fischer",
    role: "Wellness Advocate",
    image: "/avatars/elena.png",
    quote:
      "Frequency Therapy with Biophotonlight sounded futuristic, but the results were almost immediate. My sleep quality and energy levels have never been better.",
    rating: 5,
  },
  {
    name: "Thomas Mueller",
    role: "Chronic Pain Patient",
    image: "/avatars/thomas.png",
    quote:
      "After years of back issues, the Combination of Schröpfen and Bioplasmatic treatment finally provided the relief I needed. Truly a holistic healing experience.",
    rating: 5,
  },
  {
    name: "Sophia Chen",
    role: "Corporate Executive",
    image: "/avatars/sophia.png",
    quote:
      "Health Consulting with Jose helped me restructure my lifestyle for sustainable vitality. The personalized approach is unlike anything else I've tried.",
    rating: 5,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <span className="inline-block mb-3 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl text-foreground">
            Trusted by Leaders <br />
            <span className="text-primary italic">& Future Seekers.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Real stories of transformation from clients who experience the power of advanced vitality care.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
        >
          {testimonials.map((t, idx) => (
            <motion.article
              variants={itemVariants}
              key={idx}
              className="group relative rounded-3xl border border-border/40 bg-white/50 backdrop-blur-sm p-8 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-white hover:border-primary/20"
            >
              <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote className="h-12 w-12" />
              </div>

              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-lg leading-relaxed text-foreground/80 mb-8 italic relative z-10">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-2xl overflow-hidden border-2 border-primary/10 group-hover:border-primary/30 transition-colors">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">{t.name}</p>
                  <p className="text-xs font-black uppercase tracking-widest text-primary/60">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

