import { MapPin, Clock, Instagram } from "lucide-react";

const LocationSection = () => (
  <section id="locatie" className="py-20 px-4">
    <div className="container mx-auto max-w-5xl">
      <h2 className="font-heading text-3xl md:text-4xl text-center mb-12">Unde Ne Găsești</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="flex gap-4">
            <MapPin className="h-6 w-6 text-secondary shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Adresă</h3>
              <p className="text-muted-foreground">
                Bulevardul Regina Elisabeta 59, București<br />
                (Zona Cișmigiu)
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Clock className="h-6 w-6 text-secondary shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Program</h3>
              <p className="text-muted-foreground">
                Luni – Vineri: 08:00 – 18:00<br />
                Sâmbătă – Duminică: 09:00 – 16:00
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden border border-border min-h-[300px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.0!2d26.0876!3d44.4378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBulevardul+Regina+Elisabeta+59%2C+Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1700000000000!5m2!1sro!2sro"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Locația The Bagel Bar pe Google Maps"
          />
        </div>
      </div>
    </div>

    {/* Footer */}
    <footer className="container mx-auto max-w-5xl mt-20 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} The Bagel Bar Bucharest</p>
      <a
        href="https://instagram.com/thebagelbarbucharest"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-primary transition-colors"
      >
        <Instagram className="h-5 w-5" />
        @thebagelbarbucharest
      </a>
    </footer>
  </section>
);

export default LocationSection;
