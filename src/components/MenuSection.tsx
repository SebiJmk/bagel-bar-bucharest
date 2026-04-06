import { useEffect, useRef } from "react";
import { Coffee } from "lucide-react";
import bagelNyc from "@/assets/bagel-nyc.jpg";
import bagelBacon from "@/assets/bagel-bacon.jpg";
import bagelAvocado from "@/assets/bagel-avocado.jpg";

const items = [
  {
    name: "New York Classic",
    desc: "Somon afumat, cremă de brânză, capere, ceapă roșie",
    price: "35 RON",
    label: "Best Seller",
    img: bagelNyc,
  },
  {
    name: "Bacon & Egg Morning",
    desc: "Bacon crocant, ou ochi, cheddar, sosul casei",
    price: "28 RON",
    label: "Popular",
    img: bagelBacon,
  },
  {
    name: "Avocado Smash",
    desc: "Bagel vegan, guacamole, roșii cherry, semințe",
    price: "26 RON",
    label: "Vegan",
    img: bagelAvocado,
  },
];

const MenuSection = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="meniu" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="subtitle-label mb-3 block">Ce comandă lumea</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">
            Preferințele Clienților
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.name}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="fade-up group hover-lift rounded-2xl overflow-hidden bg-card border border-border/60 cursor-pointer"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  width={640}
                  height={640}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-4 left-4 bg-background/85 backdrop-blur-md text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full text-foreground/80">
                  {item.label}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading text-xl font-semibold leading-snug">{item.name}</h3>
                  <span className="font-body font-bold text-lg text-secondary ml-3 whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex items-center justify-center gap-4 py-5">
          <div className="h-px flex-1 max-w-[60px] bg-border" />
          <div className="flex items-center gap-3 text-muted-foreground">
            <Coffee className="h-5 w-5 text-secondary" />
            <p className="text-sm font-medium italic">
              Asortează bagelul tău preferat cu o selecție de cafea de specialitate prăjită local.
            </p>
          </div>
          <div className="h-px flex-1 max-w-[60px] bg-border" />
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
