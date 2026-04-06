import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bagels.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <img
      src={heroBg}
      alt="Bagels proaspete pe masă de lemn"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-foreground/50" />

    <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
      <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6">
        Gustul Autentic de Bagel în Inima Bucureștiului.
      </h1>
      <p className="text-primary-foreground/90 text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto font-body">
        Proaspăt scoși din cuptor, crocanți la exterior și pufoși la interior.
        Cafea de specialitate și ingrediente premium.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="text-base transition-transform hover:scale-105" asChild>
          <a href="#meniu">Vezi Meniul</a>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="text-base bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 transition-transform hover:scale-105"
          asChild
        >
          <a href="#locatie">Cum ajungi la noi</a>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
