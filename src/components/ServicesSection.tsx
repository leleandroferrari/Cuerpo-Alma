import { Activity, Hand, Bone, AlignVerticalSpaceAround, Brain, Zap } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "Sports Injury Rehab",
    description:
      "Get back in the game with evidence-based rehabilitation programs. We treat sprains, strains, and overuse injuries to restore full function.",
  },
  {
    icon: Hand,
    title: "Manual Therapy",
    description:
      "Hands-on techniques including joint mobilisation and soft tissue work. Relieve pain and restore movement through skilled therapeutic touch.",
  },
  {
    icon: Bone,
    title: "Post-Op Recovery",
    description:
      "Structured post-surgical rehabilitation for joint replacements, ligament repairs, and more. We guide your recovery from day one.",
  },
  {
    icon: AlignVerticalSpaceAround,
    title: "Posture Correction",
    description:
      "Address the root cause of chronic pain with personalised posture analysis. Build lasting habits through targeted strengthening exercises.",
  },
  {
    icon: Brain,
    title: "Neurological Rehab",
    description:
      "Specialised programs for stroke recovery, MS, and Parkinson's disease. Improve mobility, balance, and independence with expert guidance.",
  },
  {
    icon: Zap,
    title: "Dry Needling",
    description:
      "Targeted trigger-point therapy to release deep muscle tension. Fast, effective relief for persistent pain and restricted movement.",
  },
];

const ServicesSection = () => (
  <section id="services" className="bg-section-alt py-20 md:py-28">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Physiotherapy Services</h2>
        <p className="mt-3 text-muted-foreground">
          Comprehensive care designed around your needs — from acute injury management to long-term wellness.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="group rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
          >
            <div className="mb-4 inline-flex rounded-lg bg-accent p-3 text-accent-foreground">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
