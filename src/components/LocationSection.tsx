import { useEffect, useRef } from "react";
import { MapPin, Clock, Instagram } from "lucide-react";

const LocationSection = () => {
  const tilesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    tilesRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const instagramPlaceholders = Array.from({ length: 6 });

  return (
    <>
      <section id="locatie" className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="subtitle-label mb-3 block">Contact</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold">Unde Ne Găsești</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Info tiles */}
            <div className="space-y-5">
              <div
                ref={(el) => { tilesRef.current[0] = el; }}
                className="fade-up info-tile flex gap-5 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-1">Adresă</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Bulevardul Regina Elisabeta 59, București<br />
                    Zona Cișmigiu
                  </p>
                </div>
              </div>

              <div
                ref={(el) => { tilesRef.current[1] = el; }}
                className="fade-up info-tile flex gap-5 items-start"
                style={{ transitionDelay: "150ms" }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-1">Program</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Luni – Vineri: 08:00 – 18:00<br />
                    Sâmbătă – Duminică: 09:00 – 16:00
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border-2 border-primary/15 shadow-[0_8px_30px_hsl(30_10%_18%/0.08)] min-h-[320px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.0!2d26.0876!3d44.4378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBulevardul+Regina+Elisabeta+59%2C+Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1700000000000!5m2!1sro!2sro"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locația The Bagel Bar pe Google Maps"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram grid + Footer */}
      <footer className="bg-muted/40 border-t border-border py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <a
              href="https://instagram.com/thebagelbarbucharest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="font-heading text-lg font-semibold">@thebagelbarbucharest</span>
            </a>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-12">
            {instagramPlaceholders.map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-lg bg-muted border border-border/50 flex items-center justify-center overflow-hidden hover:opacity-80 transition-opacity cursor-pointer"
              >
                <Instagram className="h-5 w-5 text-muted-foreground/30" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xs text-muted-foreground tracking-wider">
              The Bagel Bar Bucharest © 2026. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LocationSection;
