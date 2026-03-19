import { motion } from "framer-motion";
import { User, Quote } from "lucide-react";
import joseProfile from "@/assets/jose_profile.png";

const OwnerSection = () => {
    return (
        <section id="owner" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
            <div className="container">
                <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                            <User className="w-3 h-3" />
                            Lernen Sie mich kennen
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
                            Das Herz hinter <br />
                            <span className="text-primary italic">Cuerpo & Alma.</span>
                        </h2>
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Als ehemaliger Fussballspieler war mir Gesundheit immer sehr wichtig – nicht nur körperlich, sondern auch mental. Meine Reise begann mit dem Wunsch, Menschen zu helfen und zu sehen, wie sie nach einer Behandlung mit einem Lächeln auf den Lippen meine Praxis verlassen.
                            </p>
                            <p>
                                Ich habe früh gemerkt, dass ich mit meinen Händen viel Gutes bewegen kann. Seit 2014 arbeite ich als klassischer Masseur. Durch stetige Weiterbildungen, unter anderem in der Energetikarbeit, Schröpfen sowie der Gesundheits- und Sportberatung, habe ich mein Wissen kontinuierlich vertieft. Das Helfen ist mehr als ein Beruf für mich – es ist meine Lebensaufgabe.
                            </p>
                        </div>

                        <div className="mt-10 p-6 bg-white rounded-2xl border border-border/50 shadow-sm relative italic text-foreground/80">
                            <Quote className="absolute -top-4 -left-4 w-10 h-10 text-primary/20" />
                            Jeder Mensch ist einzigartig und deshalb braucht er auch eine individuelle Behandlung.
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                            <img
                                src={joseProfile}
                                alt="Jose Barassa"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl z-0" />
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/50 rounded-full blur-3xl z-0" />
                        <div className="absolute top-1/2 -right-12 w-24 h-24 border border-primary/20 rounded-full z-0" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OwnerSection;
