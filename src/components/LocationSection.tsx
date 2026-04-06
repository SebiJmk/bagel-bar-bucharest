import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Instagram, Heart } from "lucide-react";
import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";
import insta4 from "@/assets/insta-4.jpg";
import insta5 from "@/assets/insta-5.jpg";
import insta6 from "@/assets/insta-6.jpg";

const instaPosts = [insta1, insta2, insta3, insta4, insta5, insta6];
const ease = [0.22, 1, 0.36, 1] as const;

const LocationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <>
      <section id="locatie" className="py-24 md:py-32 px-5 bg-muted" ref={ref}>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
          >
            <span className="subtitle-label mb-3 block">Contact</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Unde Ne Găsești</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  title: "Adresă",
                  text: (
                    <>
                      Bulevardul Regina Elisabeta 59, București<br />
                      Zona Cișmigiu
                    </>
                  ),
                },
                {
                  icon: Clock,
                  title: "Program",
                  text: (
                    <>
                      Luni – Vineri: 08:00 – 18:00<br />
                      Sâmbătă – Duminică: 09:00 – 16:00
                    </>
                  ),
                },
              ].map((tile, i) => (
                <motion.div
                  key={tile.title}
                  className="info-tile flex gap-4 items-start bg-background"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.15, ease }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <tile.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold mb-1">{tile.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{tile.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="rounded-2xl overflow-hidden border border-border min-h-[300px]"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.0!2d26.0876!3d44.4378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBulevardul+Regina+Elisabeta+59%2C+Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1700000000000!5m2!1sro!2sro"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 300 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Locația The Bagel Bar pe Google Maps"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border pt-16 pb-8 px-5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <a
              href="https://instagram.com/thebagelbarbucharest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span className="text-sm font-bold">@thebagelbarbucharest</span>
            </a>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 mb-12">
            {instaPosts.map((src, i) => (
              <a
                key={i}
                href="https://instagram.com/thebagelbarbucharest"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-lg overflow-hidden"
              >
                <img
                  src={src}
                  alt={`Instagram post ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={640}
                  height={640}
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                  <Instagram className="h-5 w-5 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            ))}
          </div>

          <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              The Bagel Bar Bucharest © 2026. All rights reserved.
            </p>
            <p className="text-[11px] text-muted-foreground/50 flex items-center gap-1">
              Made with <Heart className="h-3 w-3 text-primary fill-primary" /> by{" "}
              <span className="font-semibold text-muted-foreground/70">Bit & Form</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LocationSection;
