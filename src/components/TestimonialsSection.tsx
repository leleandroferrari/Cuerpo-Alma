import { motion, Variants } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marathon Runner",
    quote:
      "After my knee injury, I thought my running days were over. The team at Elite Physio not only got me back on track but helped me set a new personal best.",
    rating: 5,
  },
  {
    name: "James O'Connor",
    role: "Office Professional",
    quote:
      "Years of desk work left me with chronic back pain. The posture correction program here completely transformed my daily comfort and productivity.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Yoga Instructor",
    quote:
      "The manual therapy sessions were incredible. The therapists truly understand the body and provided relief I hadn't found anywhere else.",
    rating: 5,
  },
  {
    name: "David Kowalski",
    role: "Post-Surgery Patient",
    quote:
      "My post-op recovery was seamless thanks to their structured rehabilitation plan. I felt supported and motivated every step of the way.",
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
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="container">
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
            What Our Patients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Real stories from real people who trusted us with their recovery.
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
              className="group relative rounded-2xl border border-border/50 bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-border"
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-muted-foreground/15" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-base leading-relaxed text-muted-foreground mb-6 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
