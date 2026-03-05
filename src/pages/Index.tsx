import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">
      <HeroSection />
      <ServicesSection />
      <LocationSection />
    </main>
    <Footer />
  </div>
);

export default Index;
