import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import aboutImg from "@/assets/about-barista.jpg";

const ease = [0.22, 1, 0.36, 1];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="povestea" className="py-24 md:py-32 px-5" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0, ease }}
            >
              <span className="subtitle-label mb-3 block">Despre noi</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                Povestea
                <br />
                <span className="text-primary">Noastră</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease }}
            >
              <p className="text-muted-foreground text-base md:text-lg leading-[1.9] max-w-lg">
                The Bagel Bar nu este doar un loc unde mănânci — este locul tău de pauză.
                Fie că ești pe fugă spre facultate sau vrei să te relaxezi lângă Cișmigiu,
                te așteptăm cu rețete originale și o atmosferă prietenoasă.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease }}
            >
              <div className="h-px w-12 bg-primary mb-6" />
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-4xl font-bold text-primary leading-none">100%</p>
                  <p className="text-[11px] text-muted-foreground mt-2 tracking-[0.15em] uppercase font-medium">
                    Aluat Artizanal
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary leading-none italic">Zilnic</p>
                  <p className="text-[11px] text-muted-foreground mt-2 tracking-[0.15em] uppercase font-medium">
                    Scoși din cuptor
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease }}
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src={aboutImg}
                alt="Barista pregătind cafea la The Bagel Bar"
                className="w-full aspect-[3/4] object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
                width={768}
                height={1024}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
