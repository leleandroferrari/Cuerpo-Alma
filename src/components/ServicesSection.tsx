import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Activity, Hand, Bone, Brain, Zap, ChevronDown, LucideIcon, Sparkles } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Activity,
  Hand,
  Bone,
  Brain,
  Zap,
};

interface Service {
  iconName: string;
  title: string;
  price: string;
  description: string;
  accent: string;       // soft light bg color class
  iconBg: string;       // icon container bg
  iconColor: string;    // icon & text accent color
  border: string;       // card border color
  detail: string;       // expanded detail text
  highlights: string[]; // bullet highlights shown on expand
}

const services: Service[] = [
  {
    iconName: "Hand",
    title: "Individuelle Massagen",
    price: "120",
    accent: "from-rose-50 to-pink-50/60",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    border: "border-rose-100 hover:border-rose-300",
    description: "Personalisierte Massagetherapie, die auf Ihre muskulären Bedürfnisse und Entspannungsziele zugeschnitten ist.",
    detail:
      "Wählen Sie aus unserem Trio fachmännisch entwickelter Massagemodaliäten. Die klassische Massage nutzt lange, fließende Bewegungen, um Verspannungen zu lösen und tiefe Entspannung zu fördern. Die Sportmassage zielt auf die sportliche Erholung ab, spült Stoffwechselabfälle aus und verbessert die Beweglichkeit. Schröpfen wendet Unterdruck auf das Weichteilgewebe an, löst Verklebungen und stimuliert die Durchblutung in tieferen Schichten. Jede Sitzung wird tagesaktuell an Ihren Körper angepasst.",
    highlights: ["Klassische Massage", "Sportmassage", "Schröpfen"],
  },
  {
    iconName: "Activity",
    title: "Biomechanische Stimulation (BMS)",
    price: "155",
    accent: "from-sky-50 to-blue-50/60",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
    border: "border-sky-100 hover:border-sky-300",
    description: "Fortschrittliche mechanische Vibrationstherapie zur Verbesserung der Muskelfunktion und Erholung.",
    detail:
      "BMS nutzt präzise kalibrierte mechanische Vibrationen, die direkt auf das Muskel- und Bindegewebe einwirken. Die Oszillationen lösen unwillkürliche Muskelkontraktionen aus, beschleunigen den Lymphfluss, verbessern die Propriozeption und steigern die Mikrozirkulation. Klienten erleben typischerweise weniger Muskelkater, eine schnellere Erholung nach Verletzungen und messbare Kraftzuwächse. Jose Barassas einzigartiges BMS-Protokoll kombiniert Frequenzsequenzierung mit gezielter Haltungskorrektur für nachhaltige Ergebnisse.",
    highlights: ["Gezielte Vibrationstherapie", "Unterstützung des Lymphabflusses", "Beschleunigte Muskelerholung"],
  },
  {
    iconName: "Zap",
    title: "Frequenztherapie",
    price: "145",
    accent: "from-amber-50 to-yellow-50/60",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    border: "border-amber-100 hover:border-amber-300",
    description: "Innovative frequenzbasierte Behandlungen zur Förderung der Zellheilung und des Energiegleichgewichts.",
    detail:
      "Mit dem Biophotonlight-Gerät werden spezifische Lichtfrequenzen auf zellulärer Ebene an das Gewebe abgegeben. Die Photobiomodulation stimuliert die Mitochondrienaktivität, beschleunigt die ATP-Produktion, reduziert Entzündungsmarker und fördert die Kollagensynthese. Das Ergebnis ist eine schnellere Wundheilung, linderung chronischer Schmerzen und eine wiederhergestellte Vitalität. Die Behandlungspläne werden nach einer gründlichen energetischen Einschätzung personalisiert.",
    highlights: ["Biophotonlight-Behandlung", "Mitochondriale Stimulation", "Reduzierung von Entzündungen"],
  },
  {
    iconName: "Brain",
    title: "Bioplasmatik",
    price: "170",
    accent: "from-violet-50 to-purple-50/60",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    border: "border-violet-100 hover:border-violet-300",
    description: "Ein spezialisierter Ansatz zum Ausgleich des Energiefeldes und zum systemischen Wohlbefinden.",
    detail:
      "Die bioplasmatische Therapie arbeitet mit dem bioelektrischen und energetischen Feld des Körpers – der subtilen Informationsebene, die physiologische Prozesse steuert. Durch präzise, nicht-invasive Techniken liest und harmonisiert Jose Störungen in diesem Feld, die mit chronischen Schmerzen, Müdigkeit, Immunstörungen und emotionalem Stress korrelieren. Die Sitzungen führen oft zu tiefgreifenden Veränderungen des Wohlbefindens, der Klarheit und der körperlichen Funktion, die herkömmliche Behandlungen allein nicht erreichen können.",
    highlights: ["Bioelektrischer Energiefeldausgleich", "Systemischer Wellness-Reset", "Linderung von chronischer Müdigkeit & Schmerzen"],
  },
  {
    iconName: "Bone",
    title: "Gesundheitsberatung",
    price: "110",
    accent: "from-emerald-50 to-teal-50/60",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    border: "border-emerald-100 hover:border-emerald-300",
    description: "Professionelle Beratung zu Lebensstil, Ernährung und nachhaltigen Gesundheitspraktiken.",
    detail:
      "Eine gründliche 1-zu-1-Beratung, die Ihre aktuelle Gesundheitslandschaft abbildet – von Ernährungslücken und Schlafqualität bis hin zu Bewegungsmustern und Stressbelastung. Jose wertet diese Daten aus, um einen personalisierten Fahrplan zu erstellen, der Ernährungsstrategie, Supplementierung, Erholungsprotokolle und Lebensstilanpassungen abdeckt. Follow-up-Sitzungen verfolgen den Fortschritt und passen den Plan an die Reaktion Ihres Körpers an, um eine nachhaltige, langfristige Transformation zu gewährleisten.",
    highlights: ["Personalisierter Gesundheitsfahrplan", "Ernährungs- & Nahrungsergänzungsstrategie", "Lebensstil- & Erholungsprotokolle"],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
  },
};

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-rose-50 via-pink-50/60 to-white">
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-[640px] h-[640px] rounded-full bg-gradient-to-br from-rose-200/40 to-pink-100/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[560px] h-[560px] rounded-full bg-gradient-to-tr from-pink-100/50 to-rose-50/30 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="mx-auto max-w-3xl text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/8 border border-primary/10 text-primary text-[11px] font-bold tracking-[0.18em] uppercase mb-5 shadow-sm">
            <Sparkles className="w-3 h-3" />
            Unsere Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-5 leading-[1.1]">
            Dienstleistungen
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Professionelle therapeutische Lösungen, die darauf ausgerichtet sind, das Gleichgewicht wiederherzustellen, die Leistung zu steigern und Ihre Lebensqualität zu verbessern.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {services.map((s, idx) => {
            const Icon = iconMap[s.iconName] || Activity;
            const isOpen = openIndex === idx;

            return (
              <motion.article
                variants={cardVariants}
                key={s.title}
                className={`group relative rounded-3xl border bg-gradient-to-br ${s.accent} ${s.border} shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 overflow-hidden flex flex-col`}
              >
                {/* Subtle sheen overlay on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-white/20" />

                <div className="relative p-7 flex flex-col flex-1">
                  {/* Icon + Price row */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Icon */}
                    <div className={`relative inline-flex rounded-2xl ${s.iconBg} p-3.5 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className={`h-7 w-7 ${s.iconColor}`} />
                    </div>

                    {/* Price */}
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-foreground/40 mb-0.5">
                        Sitzung ab
                      </span>
                      <div className="text-2xl font-black text-foreground leading-none">
                        <span className={`text-sm font-bold ${s.iconColor} mr-0.5`}>$</span>
                        {s.price}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold text-foreground tracking-tight mb-2.5 transition-colors duration-300 group-hover:${s.iconColor}`}>
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] text-foreground/60 leading-relaxed mb-6 flex-1">
                    {s.description}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-black/5 mb-5" />

                  {/* Learn more toggle */}
                  <button
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    className={`flex items-center justify-between w-full text-sm font-semibold ${s.iconColor} hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-current rounded-lg`}
                  >
                    <span>{isOpen ? "Weniger anzeigen" : "Mehr erfahren"}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.span>
                  </button>

                  {/* Expandable detail panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="detail"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5">
                          <p className="text-[14px] text-foreground/70 leading-relaxed mb-4">
                            {s.detail}
                          </p>

                          {/* Highlight pills */}
                          <ul className="flex flex-col gap-2">
                            {s.highlights.map((h, i) => (
                              <li key={i} className="flex items-center gap-2.5">
                                <span className={`inline-flex w-1.5 h-1.5 rounded-full flex-shrink-0 ${s.iconBg} ring-2 ring-offset-1 ring-current ${s.iconColor}`} />
                                <span className="text-[13px] font-medium text-foreground/75">{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-base text-muted-foreground mb-4">
            Unsicher, welche Behandlung die richtige für Sie ist?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-foreground"
          >
            Kostenlosen Beratungstermin buchen
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
