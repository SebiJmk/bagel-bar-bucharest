import { useEffect, useRef } from "react";
import aboutImg from "@/assets/about-barista.jpg";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll(".fade-up").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="povestea" className="py-32 md:py-40 px-6" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Text */}
          <div className="space-y-10">
            <div className="fade-up">
              <span className="subtitle-label mb-4 block">Despre noi</span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                Povestea
                <br />
                <span className="italic text-primary">Noastră</span>
              </h2>
            </div>

            <div className="fade-up">
              <p className="text-foreground/70 text-base md:text-lg leading-[2] font-light max-w-lg">
                The Bagel Bar nu este doar un loc unde mănânci — este locul tău de pauză.
                Fie că ești pe fugă spre facultate sau vrei să te relaxezi lângă Cișmigiu,
                te așteptăm cu rețete originale și o atmosferă prietenoasă.
              </p>
            </div>

            <div className="fade-up">
              <div className="h-px w-16 bg-primary/40 mb-8" />
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="font-heading text-4xl font-bold text-secondary leading-none">100%</p>
                  <p className="text-[11px] text-muted-foreground mt-2 tracking-[0.2em] uppercase font-medium">
                    Aluat Artizanal
                  </p>
                </div>
                <div>
                  <p className="font-heading text-4xl font-bold text-secondary leading-none italic">Zilnic</p>
                  <p className="text-[11px] text-muted-foreground mt-2 tracking-[0.2em] uppercase font-medium">
                    Scoși din cuptor
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Image */}
          <div className="fade-up">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_hsl(30_10%_18%/0.25)]">
                <img
                  src={aboutImg}
                  alt="Barista pregătind cafea la The Bagel Bar"
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                  width={768}
                  height={1024}
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-primary/10 -z-10" />
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-secondary/10 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
