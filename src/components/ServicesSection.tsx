import { motion, Variants } from "framer-motion";
import { Activity, Hand, Bone, AlignVerticalSpaceAround, Brain, Zap, LucideIcon } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "@/lib/sanity";

// We map string names from sanity to lucide icons
const iconMap: Record<string, LucideIcon> = {
  Activity,
  Hand,
  Bone,
  AlignVerticalSpaceAround,
  Brain,
  Zap,
};

// Fallback services
const fallbackServices = [
  {
    iconName: "Activity",
    title: "Sports Injury Rehab",
    description:
      "Get back in the game with evidence-based rehabilitation programs. We treat sprains, strains, and overuse injuries to restore full function.",
  },
  {
    iconName: "Hand",
    title: "Manual Therapy",
    description:
      "Hands-on techniques including joint mobilisation and soft tissue work. Relieve pain and restore movement through skilled therapeutic touch.",
  },
  {
    iconName: "Bone",
    title: "Post-Op Recovery",
    description:
      "Structured post-surgical rehabilitation for joint replacements, ligament repairs, and more. We guide your recovery from day one.",
  },
  {
    iconName: "AlignVerticalSpaceAround",
    title: "Posture Correction",
    description:
      "Address the root cause of chronic pain with personalised posture analysis. Build lasting habits through targeted strengthening exercises.",
  },
  {
    iconName: "Brain",
    title: "Neurological Rehab",
    description:
      "Specialised programs for stroke recovery, MS, and Parkinson's disease. Improve mobility, balance, and independence with expert guidance.",
  },
  {
    iconName: "Zap",
    title: "Dry Needling",
    description:
      "Targeted trigger-point therapy to release deep muscle tension. Fast, effective relief for persistent pain and restricted movement.",
  },
];

interface Service {
  iconName: string;
  title: string;
  description: string;
}

interface ServicesData {
  badgeText?: string;
  title?: string;
  description?: string;
  services?: Service[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ServicesSection = () => {
  const { data: servicesData, isLoading } = useQuery<ServicesData>({
    queryKey: ["servicesSection"],
    queryFn: async () => {
      const result = await sanityClient.fetch(`*[_type == "servicesSection"][0]`);
      return result;
    },
  });

  const badgeText = servicesData?.badgeText || "Expert Care";
  const sectionTitle = servicesData?.title || "Our Physiotherapy Services";
  const sectionDescription = servicesData?.description || "Comprehensive care designed around your needs — from acute injury management to long-term wellness.";
  const displayServices = servicesData?.services?.length ? servicesData.services : fallbackServices;

  return (
    <section id="services" className="bg-section-alt py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block mb-3 text-sm font-semibold tracking-wider text-muted-foreground uppercase">{badgeText}</span>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl text-foreground">{sectionTitle}</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {sectionDescription}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {displayServices.map((s, index) => {
            const Icon = iconMap[s.iconName] || Activity;
            return (
              <motion.article
                variants={itemVariants}
                key={s.title || index}
                className="group rounded-2xl border border-border/50 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-border"
              >
                <div className="mb-6 inline-flex rounded-xl bg-accent p-4 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground shadow-sm">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground tracking-tight">{s.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
