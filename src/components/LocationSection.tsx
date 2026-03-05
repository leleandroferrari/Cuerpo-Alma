import { MapPin, Phone, Mail, Clock } from "lucide-react";

const details = [
  { icon: MapPin, label: "Address", value: "42 Wellness Avenue, Suite 3B\nSydney, NSW 2000" },
  { icon: Phone, label: "Phone", value: "(02) 9123 4567" },
  { icon: Mail, label: "Email", value: "hello@elitephysio.com.au" },
];

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 7:00 PM" },
  { day: "Saturday", time: "9:00 AM – 2:00 PM" },
  { day: "Sunday", time: "Closed" },
];

const LocationSection = () => (
  <section id="location" className="py-20 md:py-28">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Visit Our Clinic</h2>
        <p className="mt-3 text-muted-foreground">
          Conveniently located in the heart of the city with easy parking and public transport access.
        </p>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        {/* Details */}
        <div className="space-y-8">
          {details.map((d) => (
            <div key={d.label} className="flex items-start gap-4">
              <div className="inline-flex rounded-lg bg-accent p-3 text-accent-foreground">
                <d.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">{d.label}</p>
                <p className="whitespace-pre-line text-sm text-muted-foreground">{d.value}</p>
              </div>
            </div>
          ))}

          <div className="flex items-start gap-4">
            <div className="inline-flex rounded-lg bg-accent p-3 text-accent-foreground">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <p className="font-semibold">Opening Hours</p>
              <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-6">
                    <span>{h.day}</span>
                    <span className="font-medium text-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="overflow-hidden rounded-xl border shadow-lg">
          <iframe
            title="Clinic location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8!2d151.2093!3d-33.8688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUyJzA3LjciUyAxNTHCsDEyJzMzLjUiRQ!5e0!3m2!1sen!2sau!4v1"
            className="h-72 w-full lg:h-full lg:min-h-[380px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;
