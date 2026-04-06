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
    <section id="meniu" className="py-24 md:py-32 px-5 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="subtitle-label mb-3 block">Ce comandă lumea</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Preferințele Clienților
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.name}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="fade-up group hover-lift rounded-2xl overflow-hidden bg-background border border-border"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={640}
                  height={640}
                />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md">
                  {item.label}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <span className="font-bold text-primary">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-3">
          <Coffee className="h-4 w-4 text-primary" />
          <p className="text-sm text-muted-foreground italic">
            Asortează bagelul tău preferat cu o selecție de cafea de specialitate prăjită local.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
