import { MapPin, Phone, Mail, Clock } from "lucide-react";
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
  address: "42 Wellness Avenue, Suite 3B\nSydney, NSW 2000",
  phone: "(02) 9123 4567",
  email: "hello@elitephysio.com.au",
};

const fallbackHours = [
  { day: "Monday – Friday", time: "8:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const LocationSection = () => {
  const { data: locationData, isLoading } = useQuery<LocationData>({
    queryKey: ["locationSection"],
    queryFn: async () => {
      const result = await sanityClient.fetch(`*[_type == "locationSection"][0]`);
      return result;
    },
  });

  const badgeText = locationData?.badgeText || "Find Us";
  const sectionTitle = locationData?.title || "Visit Our Clinic";
  const sectionDescription = locationData?.description || "Conveniently located in the heart of the city with easy parking and public transport access.";

  const address = locationData?.address || fallbackDetails.address;
  const phone = locationData?.phone || fallbackDetails.phone;
  const email = locationData?.email || fallbackDetails.email;
  const hours = locationData?.hours?.length ? locationData.hours : fallbackHours;
  const mapEmbedUrl = locationData?.mapEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8!2d151.2093!3d-33.8688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUyJzA3LjciUyAxNTHCsDEyJzMzLjUiRQ!5e0!3m2!1sen!2sau!4v1";

  const detailsList = [
    { icon: MapPin, label: "Address", value: address },
    { icon: Phone, label: "Phone", value: phone },
    { icon: Mail, label: "Email", value: email },
  ];

  return (
    <section id="location" className="py-24 md:py-32 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-block mb-3 text-sm font-semibold tracking-wider text-muted-foreground uppercase">{badgeText}</span>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl text-foreground">{sectionTitle}</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {sectionDescription}
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
            className="space-y-10 rounded-3xl bg-section-alt p-8 md:p-12 border border-border/50 shadow-sm"
          >
            {detailsList.map((d) => (
              <div key={d.label} className="flex items-start gap-4 group">
                <div className="inline-flex rounded-xl bg-background p-4 text-primary shadow-sm transition-transform duration-300 group-hover:scale-110">
                  <d.icon className="h-6 w-6" />
                </div>
                <div className="pt-1">
                  <p className="font-semibold text-foreground text-lg">{d.label}</p>
                  <p className="whitespace-pre-line text-base text-muted-foreground mt-1 leading-relaxed">{d.value}</p>
                </div>
              </div>
            ))}

            <div className="h-px w-full bg-border" />

            <div className="flex items-start gap-4 group">
              <div className="inline-flex rounded-xl bg-background p-4 text-primary shadow-sm transition-transform duration-300 group-hover:scale-110">
                <Clock className="h-6 w-6" />
              </div>
              <div className="w-full pt-1">
                <p className="font-semibold text-foreground text-lg">Opening Hours</p>
                <ul className="mt-4 space-y-3 text-base text-muted-foreground">
                  {hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-6 border-b border-border/50 pb-2 last:border-0 last:pb-0">
                      <span>{h.day}</span>
                      <span className="font-medium text-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="overflow-hidden rounded-3xl border border-border/50 shadow-lg h-full min-h-[400px]"
          >
            <iframe
              title="Clinic location"
              src={mapEmbedUrl}
              className="h-full w-full min-h-[400px] border-0 filter grayscale-[20%] contrast-125 transition-all duration-700 hover:grayscale-0 hover:contrast-100"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
