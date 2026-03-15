import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Activity, Hand, Bone, Brain, Zap, ChevronDown, LucideIcon, Sparkles } from "lucide-react";

import serviceMassage from "@/assets/service_massage.png";
import serviceBms from "@/assets/service_bms.png";
import serviceFrequency from "@/assets/service_frequency.png";
import serviceBioplasmatic from "@/assets/service_bioplasmatic.png";
import serviceConsultation from "@/assets/service_consultation.png";

const iconMap: Record<string, LucideIcon> = {
  Activity,
  Hand,
  Bone,
  Brain,
  Zap,
};

interface Service {
  iconName: string;
  image: string;
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
    image: serviceMassage,
    title: "Therapeutische Massage",
    price: "Ab 120",
    accent: "from-white to-slate-50/60",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-800",
    border: "border-slate-200 hover:border-slate-300",
    description: "Personalisierte Massagetherapie, die auf Ihre muskulären Bedürfnisse und Entspannungsziele zugeschnitten ist.",
    detail:
      "Wählen Sie aus meinem Trio fachmännisch entwickelter Massagemodaliäten. Die klassische Massage nutzt lange, fließende Bewegungen, um Verspannungen zu lösen und tiefe Entspannung zu fördern. Die Sportmassage zielt auf die sportliche Erholung ab, spült Stoffwechselabfälle aus und verbessert die Beweglichkeit. Schröpfen wendet Unterdruck auf das Weichteilgewebe an, löst Verklebungen und stimuliert die Durchblutung in tieferen Schichten. Jede Sitzung wird tagesaktuell an Ihren Körper angepasst.",
    highlights: ["Klassische Massage", "Sportmassage", "Schröpfen"],
  },
  {
    iconName: "Activity",
    image: serviceBms,
    title: "Biomechanische Stimulation (BMS)",
    price: "155",
    accent: "from-white to-slate-50/60",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-800",
    border: "border-slate-200 hover:border-slate-300",
    description: "Fortschrittliche mechanische Vibrationstherapie zur Verbesserung der Muskelfunktion und Erholung.",
    detail:
      "BMS nutzt präzise kalibrierte mechanische Vibrationen, die direkt auf das Muskel- und Bindegewebe einwirken. Die Oszillationen lösen unwillkürliche Muskelkontraktionen aus, beschleunigen den Lymphfluss, verbessern die Propriozeption und steigern die Mikrozirkulation. Klienten erleben typischerweise weniger Muskelkater, eine schnellere Erholung nach Verletzungen und messbare Kraftzuwächse. Mein einzigartiges BMS-Protokoll kombiniert Frequenzsequenzierung mit gezielter Haltungskorrektur für nachhaltige Ergebnisse.",
    highlights: ["Gezielte Vibrationstherapie", "Unterstützung des Lymphabflusses", "Beschleunigte Muskelerholung"],
  },
  {
    iconName: "Zap",
    image: serviceFrequency,
    title: "Frequenztherapie",
    price: "145",
    accent: "from-white to-slate-50/60",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-800",
    border: "border-slate-200 hover:border-slate-300",
    description: "Innovative frequenzbasierte Behandlungen zur Förderung der Zellheilung und des Energiegleichgewichts.",
    detail:
      "Mit dem Biophotonlight-Gerät werden spezifische Lichtfrequenzen auf zellulärer Ebene an das Gewebe abgegeben. Die Photobiomodulation stimuliert die Mitochondrienaktivität, beschleunigt die ATP-Produktion, reduziert Entzündungsmarker und fördert die Kollagensynthese. Das Ergebnis ist eine schnellere Wundheilung, linderung chronischer Schmerzen und eine wiederhergestellte Vitalität. Die Behandlungspläne werden nach einer gründlichen energetischen Einschätzung personalisiert.",
    highlights: ["Biophotonlight-Behandlung", "Mitochondriale Stimulation", "Reduzierung von Entzündungen"],
  },
  {
    iconName: "Brain",
    image: serviceBioplasmatic,
    title: "Bioplasmatik",
    price: "170",
    accent: "from-white to-slate-50/60",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-800",
    border: "border-slate-200 hover:border-slate-300",
    description: "Ein spezialisierter Ansatz zum Ausgleich des Energiefeldes und zum systemischen Wohlbefindens.",
    detail:
      "Die bioplasmatische Therapie arbeitet mit dem bioelektrischen und energetischen Feld des Körpers – der subtilen Informationsebene, die physiologische Prozesse steuert. Durch präzise, nicht-invasive Techniken lese und harmonisiere ich Störungen in diesem Feld, die mit chronischen Schmerzen, Müdigkeit, Immunstörungen und emotionalem Stress korrelieren. Die Sitzungen führen oft zu tiefgreifenden Veränderungen des Wohlbefindens, der Klarheit und der körperlichen Funktion, die herkömmliche Behandlungen allein nicht erreichen können.",
    highlights: ["Bioelektrischer Energiefeldausgleich", "Systemischer Wellness-Reset", "Linderung von chronischer Müdigkeit & Schmerzen"],
  },
  {
    iconName: "Bone",
    image: serviceConsultation,
    title: "Gesundheitsberatung",
    price: "110",
    accent: "from-white to-slate-50/60",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-800",
    border: "border-slate-200 hover:border-slate-300",
    description: "Professionelle Beratung zu Lebensstil, Ernährung und nachhaltigen Gesundheitspraktiken.",
    detail:
      "Eine gründliche 1-zu-1-Beratung, die Ihre aktuelle Gesundheitslandschaft abbildet – von Ernährungslücken und Schlafqualität bis hin zu Bewegungsmustern und Stressbelastung. Ich werte diese Daten aus, um einen personalisierten Fahrplan zu erstellen, der Ernährungsstrategie, Supplementierung, Erholungsprotokolle und Lebensstilanpassungen abdeckt. Follow-up-Sitzungen verfolgen den Fortschritt und passen den Plan an die Reaktion Ihres Körpers an, um eine nachhaltige, langfristige Transformation zu gewährleisten.",
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
    <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-white via-slate-50/40 to-white">
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-[640px] h-[640px] rounded-full bg-gradient-to-br from-slate-200/40 to-slate-100/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[560px] h-[560px] rounded-full bg-gradient-to-tr from-slate-100/50 to-slate-50/30 blur-3xl pointer-events-none" />

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
            Meine Expertise
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
          className="flex flex-wrap justify-center gap-7 w-full"
        >
          {services.map((s, idx) => {
            const Icon = iconMap[s.iconName] || Activity;
            const isOpen = openIndex === idx;

            return (
              <motion.article
                variants={cardVariants}
                key={s.title}
                className={`w-full sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)] group relative rounded-3xl border bg-gradient-to-br ${s.accent} border-border shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 overflow-hidden flex flex-col`}
              >
                {/* Image Header */}
                <div className="relative h-48 w-full overflow-hidden shrink-0 border-b border-border">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-transparent" />
                </div>

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
                        <span className={`text-sm font-bold ${s.iconColor} mr-1`}>CHF</span>
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
                    className={`flex items-center justify-between w-full text-sm font-semibold ${s.iconColor} hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-current rounded-lg ${isOpen ? 'mb-2' : ''}`}
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
                        <div className="pt-2">
                          <p className="text-[14px] text-foreground/70 leading-relaxed mb-5">
                            {s.detail}
                          </p>

                          {/* Highlight pills */}
                          <ul className="flex flex-col gap-3">
                            {s.highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className={`mt-1.5 inline-flex w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary`} />
                                <span className="text-[13px] font-medium text-foreground/75 leading-snug">{h}</span>
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
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary mb-12"
          >
            Kostenlosen Beratungstermin buchen
          </a>

          {/* Payment Info */}
          <div className="mx-auto max-w-2xl bg-white/60 backdrop-blur-sm border border-black/5 rounded-2xl p-6 md:p-8 shadow-sm text-center">
            <p className="text-sm md:text-[15px] text-foreground/80 leading-relaxed mb-4">
              Um mich voll und ganz auf Ihre persönliche und qualitativ hochwertige Behandlung konzentrieren zu können, arbeite ich unabhängig und bin <span className="font-semibold text-foreground">nicht krankenkassenanerkannt</span>.
            </p>
            <p className="text-sm md:text-[15px] text-foreground/80 leading-relaxed">
              Ihre Investition in Ihre Gesundheit können Sie im Anschluss ganz bequem abstimmen – ich akzeptiere Zahlungen via <span className="font-semibold text-primary">Twint, Bar oder auf Rechnung</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
