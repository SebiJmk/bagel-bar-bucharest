import { useEffect, useRef } from "react";
import cafeInterior from "@/assets/cafe-interior.jpg";

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="povestea" className="py-24 md:py-32 px-6 bg-muted/40">
      <div
        ref={ref}
        className="fade-up container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        <div className="order-2 md:order-1">
          <span className="subtitle-label mb-3 block">Despre noi</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8 leading-tight">
            Povestea Noastră
          </h2>
          <p className="text-foreground/75 leading-[1.8] text-base md:text-lg font-light">
            The Bagel Bar nu este doar un loc unde mănânci, este locul tău de pauză.
            Fie că ești pe fugă spre facultate sau vrei să te relaxezi lângă Cișmigiu,
            te așteptăm cu rețete originale și o atmosferă prietenoasă.
          </p>
          <div className="mt-8 flex gap-8">
            <div>
              <p className="font-heading text-3xl font-bold text-secondary">100%</p>
              <p className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">Ingrediente naturale</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-secondary">5:00</p>
              <p className="text-xs text-muted-foreground mt-1 tracking-wide uppercase">Cuptor de la ora</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-[0_20px_60px_-12px_hsl(30_10%_18%/0.2)]">
          <img
            src={cafeInterior}
            alt="Interiorul cozy al The Bagel Bar"
            className="w-full h-full object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
