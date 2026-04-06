import { useEffect, useRef } from "react";
import { Coffee, Flame, Leaf } from "lucide-react";
import bagelNyc from "@/assets/bagel-nyc.jpg";
import bagelBacon from "@/assets/bagel-bacon.jpg";
import bagelAvocado from "@/assets/bagel-avocado.jpg";

const items = [
  {
    name: "New York Classic",
    desc: "Somon afumat, cremă de brânză, capere, ceapă roșie",
    price: "35 RON",
    tag: "⭐ Best Seller",
    img: bagelNyc,
  },
  {
    name: "Bacon & Egg Morning",
    desc: "Bacon crocant, ou ochi, cheddar, sosul casei",
    price: "28 RON",
    tag: "🔥 Popular",
    img: bagelBacon,
  },
  {
    name: "Avocado Smash",
    desc: "Bagel vegan, guacamole, roșii cherry, semințe",
    price: "26 RON",
    tag: "🌱 Vegan",
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
      { threshold: 0.15 }
    );
    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="meniu" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-secondary mb-2">
            Ce comandă lumea
          </span>
          <h2 className="font-heading text-3xl md:text-4xl">
            Preferințele Clienților
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.name}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="fade-up group hover-lift rounded-xl overflow-hidden bg-card border border-border cursor-pointer"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={640}
                  height={640}
                />
                <span className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-xl">{item.name}</h3>
                  <span className="font-body font-bold text-lg text-secondary">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-3 rounded-full bg-secondary/10 border border-secondary/20 px-6 py-4 text-center">
          <Coffee className="h-5 w-5 text-secondary shrink-0" />
          <p className="text-sm font-medium text-foreground/80">
            +12 RON pentru o cafea de specialitate la orice bagel!
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
