import { motion } from "framer-motion";
import { Heart, Award, Users, Target } from "lucide-react";

const aboutFeatures = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "We put your health and wellness at the center of everything we do, creating personalized treatment plans tailored to your unique needs."
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Our highly qualified physiotherapists bring years of experience and stay current with the latest treatment techniques and research."
  },
  {
    icon: Users,
    title: "Community Focus",
    description: "We're proud to serve our local community, building lasting relationships and helping neighbors achieve their health goals."
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on measurable outcomes and functional improvements, ensuring you can return to the activities you love."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Elite Physio.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated to helping you move better, recover faster, and live pain-free. 
            Our expert team combines cutting-edge techniques with compassionate care.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {aboutFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
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
    </section>
  );
};

export default AboutSection;
