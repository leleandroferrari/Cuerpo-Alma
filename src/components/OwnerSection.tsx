import { motion } from "framer-motion";
import { User, Quote } from "lucide-react";

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
                            Das Herz hinter der <br />
                            <span className="text-primary italic">Cuerpo-alma.</span>
                        </h2>
                        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Ich bin der Gründer und leitende Therapeut von Cuerpo-alma und verfüge über mehr als zwei Jahrzehnte klinische Erfahrung im Bereich menschlicher Leistung und Erholung. Meine Reise begann mit der einfachen Überzeugung: dass jeder Einzelne eine angeborene Fähigkeit zur Heilung besitzt, wenn ihm die richtigen Werkzeuge und Anleitungen gegeben werden.
                            </p>
                            <p>
                                Inspiriert durch meine eigene Erfahrung mit körperlicher Rehabilitation, widmete ich mein Leben der Beherrschung von Biomechanik und energetischer Therapie. Heute kombiniere ich traditionelles klinisches Wissen mit modernsten Technologien wie BMS und Frequenztherapie, um meinen Klienten zu Ergebnissen zu verhelfen, die sie nie für möglich gehalten hätten.
                            </p>
                            <p>
                                "Letztendlich ist es mein Ziel, dass Sie sich besser bewegen, sich stärker fühlen und mit mehr Vitalität leben als gestern. Ihr Weg zum Wohlbefinden ist persönlich, und ich fühle mich geehrt, ein Teil davon zu sein."
                            </p>
                        </div>

                        <div className="mt-10 p-6 bg-white rounded-2xl border border-border/50 shadow-sm relative italic text-foreground/80">
                            <Quote className="absolute -top-4 -left-4 w-10 h-10 text-primary/20" />
                            Ich glaube an eine Welt, in der jeder Zugang zur besten Version seiner selbst hat.
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
                                src="/images/jose-barassa.png"
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
