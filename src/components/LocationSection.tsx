import { MapPin, Phone, Mail, Clock, Sparkles, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { sanityClient } from "@/lib/sanity";

interface LocationData {
  badgeText?: string;
  title?: string;
  description?: string;
  address?: string;
  phone?: string;
  email?: string;
  hours?: { day: string; time: string }[];
  mapEmbedUrl?: string;
}

const fallbackDetails = {
  address: "Premium Wellness Plaza, Suite 402\nCity Health District",
  phone: "+41 (0) 123 456 789",
  email: "contact@barassa-vitality.com",
};

const fallbackHours = [
  { day: "Montag – Freitag", time: "08:30 – 19:30" },
  { day: "Samstag", time: "09:00 – 14:00" },
  { day: "Sonntag", time: "Geschlossen" },
];

const LocationSection = () => {
  const { data: locationData, isLoading } = useQuery<LocationData>({
    queryKey: ["locationSection"],
    queryFn: async () => {
      const result = await sanityClient.fetch(`*[_type == "locationSection"][0]`);
      return result;
    },
  });

  const badgeText = locationData?.badgeText || "So finden Sie uns";
  const sectionTitle = locationData?.title || "Besuchen Sie unsere Klinik";
  const sectionDescription = locationData?.description || "Erleben Sie professionelle Pflege in einer modernen, ruhigen Umgebung, die für Ihren Komfort und Ihre Erholung konzipiert wurde.";

  const address = locationData?.address || fallbackDetails.address;
  const phone = locationData?.phone || fallbackDetails.phone;
  const email = locationData?.email || fallbackDetails.email;
  const hours = locationData?.hours?.length ? locationData.hours : fallbackHours;
  const mapEmbedUrl = locationData?.mapEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115165.4678225585!2d8.448057283407983!3d47.37743360667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900b9749bea219%3A0xe63ee62d11013f37!2sZurich%2C%20Switzerland!5e0!3m2!1sen!2sch!4v1710000000000!5m2!1sen!2sch";

  const detailsList = [
    { icon: MapPin, label: "Adresse", value: address },
    { icon: Phone, label: "Telefon", value: phone },
    { icon: MessageCircle, label: "WhatsApp", value: phone },
    { icon: Mail, label: "E-Mail", value: email },
  ];

  return (
    <section id="location" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3 h-3" />
            {badgeText}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">{sectionTitle}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {sectionDescription}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="flex flex-col gap-8 rounded-[2rem] bg-white border border-border/50 p-8 md:p-12 shadow-2xl shadow-primary/5"
          >
            <div className="space-y-10 flex-1">
              {detailsList.map((d) => (
                <div key={d.label} className="flex items-start gap-5 group">
                  <div className="inline-flex flex-shrink-0 rounded-2xl bg-primary/5 p-4 text-primary shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:rotate-6">
                    <d.icon className="h-6 w-6" />
                  </div>
                  <div className="pt-1">
                    <p className="text-xs font-black uppercase tracking-widest text-primary/60 mb-1">{d.label}</p>
                    <p className="whitespace-pre-line text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">{d.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-px w-full bg-gradient-to-r from-border/0 via-border to-border/0" />

            <div className="flex items-start gap-5 group">
              <div className="inline-flex flex-shrink-0 rounded-2xl bg-primary/5 p-4 text-primary shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white">
                <Clock className="h-6 w-6" />
              </div>
              <div className="w-full pt-1">
                <p className="text-xs font-black uppercase tracking-widest text-primary/60 mb-4">Öffnungszeiten</p>
                <ul className="space-y-4">
                  {hours.map((h) => (
                    <li key={h.day} className="flex justify-between items-center gap-6 group/item">
                      <span className="text-base font-medium text-muted-foreground group-hover/item:text-foreground transition-colors">{h.day}</span>
                      <span className="text-base font-bold text-foreground px-3 py-1 rounded-lg bg-section-alt transition-all group-hover/item:bg-primary/10 group-hover/item:text-primary">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="overflow-hidden rounded-[2rem] border border-border/50 shadow-2xl relative min-h-[500px]"
          >
            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply pointer-events-none z-10" />
            <iframe
              title="Standort der Klinik"
              src={mapEmbedUrl}
              className="h-full w-full border-0 filter grayscale-[40%] contrast-110 transition-all duration-1000 hover:grayscale-0 hover:contrast-100"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-sm font-bold tracking-[0.3em] text-primary/40 uppercase mb-2">Zitat des Monats</p>
          <p className="text-lg text-muted-foreground italic font-light">
            "Ihr Körper ist ein Tempel, aber nur, wenn Sie ihn als solchen behandeln. Vitalität ist der Lohn für achtsames Leben."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;

