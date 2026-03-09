import { motion, Variants } from "framer-motion";
import { Activity, Hand, Bone, Brain, Zap, Check, LucideIcon, Sparkles } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Activity,
  Hand,
  Bone,
  Brain,
  Zap,
};

const services = [
  {
    iconName: "Hand",
    title: "Individual Massages",
    price: "120",
    items: ["Classic", "Sport", "Schröpfen"],
    description: "Personalized massage therapy tailored to your muscular needs and relaxation goals.",
  },
  {
    iconName: "Activity",
    title: "Biomechanic Stimulation (BMS)",
    price: "155",
    items: ["PLACEHOLDER_JOSE"],
    description: "Advanced mechanical vibration therapy to enhance muscle function and recovery.",
  },
  {
    iconName: "Zap",
    title: "Frequency Therapy",
    price: "145",
    items: ["Treatment with Biophotonlight"],
    description: "Innovative frequency-based treatments to promote cellular healing and energy balance.",
  },
  {
    iconName: "Brain",
    title: "Bioplasmatic",
    price: "170",
    items: [],
    description: "A specialized approach to energy field balancing and systemic wellness.",
  },
  {
    iconName: "Bone",
    title: "Health Consulting",
    price: "110",
    items: [],
    description: "Professional guidance on lifestyle, nutrition, and sustainable health practices.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="bg-section-alt py-24 md:py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3 h-3" />
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Services
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Professional therapeutic solutions designed to restore balance, enhance performance, and improve your quality of life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-8"
        >
          {services.map((s, index) => {
            const Icon = iconMap[s.iconName] || Activity;
            const isBMS = s.title.includes("BMS");

            return (
              <motion.article
                variants={itemVariants}
                key={s.title}
                className={`flex-1 min-w-[320px] max-w-[400px] group rounded-3xl border border-border/40 bg-white/70 backdrop-blur-sm p-8 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-white hover:border-primary/20 ${index >= 3 ? 'lg:max-w-[450px]' : ''}`}
              >
                <div className="mb-8 flex items-start justify-between">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
                    <div className="relative inline-flex rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-4 text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 mb-1">Session from</span>
                    <div className="text-2xl font-black text-foreground">
                      <span className="text-sm font-bold text-primary mr-1">$</span>
                      {(s as any).price}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground tracking-tight mb-3 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {s.description}
                </p>

                {s.items.length > 0 ? (
                  <ul className="space-y-4 border-t border-border/50 pt-6">
                    {s.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        {item === "PLACEHOLDER_JOSE" ? (
                          <div className="w-full rounded-2xl bg-primary/5 border border-dashed border-primary/30 p-6 shadow-inner">
                            <p className="text-sm font-medium text-primary leading-relaxed italic text-center">
                              Coming soon: Deep dive into Jose Barassa's unique BMS methodology and clinical approach.
                            </p>
                          </div>
                        ) : (
                          <>
                            <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                              <Check className="w-3 h-3" />
                            </div>
                            <span className="text-base font-medium text-foreground/80">{item}</span>
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="pt-6 border-t border-border/50">
                    <button className="text-sm font-semibold text-primary/80 hover:text-primary flex items-center gap-2 group/btn">
                      Learn more
                      <span className="block w-5 h-[1px] bg-primary/80 group-hover/btn:w-8 transition-all" />
                    </button>
                  </div>
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;


