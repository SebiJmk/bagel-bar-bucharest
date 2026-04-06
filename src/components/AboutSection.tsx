import cafeInterior from "@/assets/cafe-interior.jpg";

const AboutSection = () => (
  <section className="py-20 px-4 bg-muted/50">
    <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="font-heading text-3xl md:text-4xl mb-6">Povestea Noastră</h2>
        <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
          The Bagel Bar nu este doar un loc unde mănânci, este locul tău de pauză.
          Fie că ești pe fugă spre facultate sau vrei să te relaxezi lângă Cișmigiu,
          te așteptăm cu rețete originale și o atmosferă prietenoasă.
        </p>
      </div>
      <div className="rounded-xl overflow-hidden shadow-lg">
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

export default AboutSection;
