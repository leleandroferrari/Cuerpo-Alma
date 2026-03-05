import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-physio.jpg";

const HeroSection = () => (
  <section id="book" className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Modern physiotherapy clinic interior" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay/70" />
    </div>
    <div className="container relative z-10 py-24 md:py-36">
      <div className="max-w-2xl animate-fade-in-up">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          Move Better, Live Pain‑Free.
        </h1>
        <p className="mt-4 text-lg text-primary-foreground/80 md:text-xl">
          Expert, personalised physiotherapy care tailored to your body. Whether you're recovering from surgery or chasing a personal best, we're here every step of the way.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button size="lg" asChild>
            <a href="#book">Book Your Session</a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
            <a href="#services">View Our Services</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
