import { motion } from "framer-motion";
import { Heart, Award, Users, Target, Sparkles } from "lucide-react";

const aboutFeatures = [
  {
    icon: Heart,
    title: "Patientenzentrierte Pflege",
    description: "Ihre Gesundheit und Ihr Wohlbefinden stehen im Mittelpunkt meines Handelns. Ich erstelle personalisierte Behandlungspläne, die auf Ihre individuellen Bedürfnisse zugeschnitten sind."
  },
  {
    icon: Award,
    title: "Expertise & Innovation",
    description: "Kombination jahrelanger klinischer Erfahrung mit innovativen Technologien wie BMS und Frequenztherapie für erstklassige Ergebnisse."
  },
  {
    icon: Users,
    title: "Ganzheitlicher Ansatz",
    description: "Ich glaube daran, den Menschen zu behandeln, nicht nur die Symptome, und integriere körperliches, systemisches und energetisches Wohlbefinden."
  },
  {
    icon: Target,
    title: "Ergebnisorientiert",
    description: "Mein Fokus liegt auf messbaren Verbesserungen, damit Sie mit Zuversicht zu Ihrer Höchstleistung und Ihrem täglichen Leben zurückkehren können."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
              <Sparkles className="w-3 h-3" />
              Meine Philosophie
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
              Erleben Sie die Zukunft von <br />
              <span className="text-primary italic">Vitalität & Heilung.</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                In <span className="text-foreground font-semibold">meiner Praxis Cuerpo-alma</span> schlage ich die Brücke zwischen traditioneller therapeutischer Exzellenz und modernsten Wellness-Technologien.
              </p>
              <p>
                Meine Mission ist es, Menschen durch einen mehrdimensionalen Gesundheitsansatz zu stärken. Durch die Integration von biomechanischer Stimulation, Frequenztherapie und personalisierter Beratung setze ich das körpereigene Potenzial für Erholung und Leistung frei.
              </p>
            </div>
          </motion.div>

          <div className="lg:w-1/2 grid gap-6 sm:grid-cols-2">
            {aboutFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="group bg-white border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

