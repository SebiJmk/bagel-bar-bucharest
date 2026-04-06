import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bagels.jpg";

const HeroSection = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        const scrollY = window.scrollY;
        imgRef.current.style.transform = `translateY(${scrollY * 0.35}px) scale(1.1)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        ref={imgRef}
        src={heroBg}
        alt="Bagels proaspete artizanale"
        className="absolute inset-0 w-full h-full object-cover will-change-transform scale-110"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(30_10%_10%/0.65)] via-[hsl(30_10%_10%/0.5)] to-[hsl(30_10%_10%/0.75)]" />

      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <span className="subtitle-label inline-block mb-6 text-primary-foreground/70">
          Artizanal · Proaspăt · Autentic
        </span>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-foreground leading-[1.1] mb-8 font-bold">
          Gustul Autentic de Bagel în Inima Bucureștiului.
        </h1>

        <p className="text-primary-foreground/80 text-base sm:text-lg md:text-xl mb-12 max-w-2xl mx-auto font-body leading-relaxed font-light">
          Proaspăt scoși din cuptor, crocanți la exterior și pufoși la interior.
          Cafea de specialitate și ingrediente premium.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a
            href="#meniu"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-base tracking-wide shadow-[0_8px_30px_hsl(28_56%_58%/0.35)] transition-all duration-300 hover:shadow-[0_12px_40px_hsl(28_56%_58%/0.5)] hover:-translate-y-0.5"
          >
            Vezi Meniul
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          <a
            href="#locatie"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm font-medium tracking-wide transition-colors duration-300"
          >
            <span>→</span>
            Cum ajungi la noi
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
