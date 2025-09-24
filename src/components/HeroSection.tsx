import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-honey.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium honey with golden dripping honey and honeycomb background"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-honey-dark/40 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
          Puhas Eesti Mesi
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white drop-shadow-md max-w-3xl mx-auto">
          Looduslikult magus, täiesti puhas - otse loodusest teie lauale
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg">
            Telli Kohe
          </Button>
          <Button variant="outline" size="lg" className="text-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-foreground">
            Vaata Tooteid
          </Button>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;