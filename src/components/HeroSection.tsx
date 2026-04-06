import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import heroBg from "@/assets/hero-bagels.jpg";

const ease = [0.22, 1, 0.36, 1];

const HeroSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-foreground">
      <img
        src={heroBg}
        alt="Bagels proaspete artizanale"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-transparent" />

      <div className="relative z-10 container mx-auto px-5 lg:px-8 py-32">
        <div className="max-w-2xl">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/25 text-primary text-xs font-semibold tracking-wider uppercase mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Deschis acum · București
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background leading-[1.05] tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25, ease }}
          >
            Gustul Autentic
            <br />
            de Bagel în Inima
            <br />
            <span className="text-primary">Bucureștiului.</span>
          </motion.h1>

          <motion.p
            className="text-background/60 text-base sm:text-lg mb-10 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease }}
          >
            Proaspăt scoși din cuptor, crocanți la exterior și pufoși la interior.
            Cafea de specialitate și ingrediente premium.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.55, ease }}
          >
            <a
              href="#meniu"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Vezi Meniul
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href="#locatie"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-background/20 text-background/70 text-sm font-medium transition-all duration-200 hover:border-background/40 hover:text-background"
            >
              → Cum ajungi la noi
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
