import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Star, Stethoscope, HeartPulse, Baby, Ambulance, Microscope, Pill, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { BookAppointment } from "@/components/BookAppointment";
import heroImg from "@/assets/hospital-hero.jpg";
import careImg from "@/assets/hospital-care.jpg";
import receptionImg from "@/assets/hospital-reception.jpg";
import surgeryImg from "@/assets/hospital-surgery.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mary Elms Mission Hospital Onitsha — 24/7 Compassionate Care" },
      { name: "description", content: "Mary Elms Mission Hospital in Odoakpu, Onitsha provides round-the-clock medical care with a 5-star reputation for compassion and quality." },
    ],
  }),
});

const services = [
  { icon: Stethoscope, title: "General Medicine", desc: "Consultations, diagnostics and ongoing care for all ages." },
  { icon: HeartPulse, title: "Emergency Care", desc: "24-hour emergency response with experienced staff on duty." },
  { icon: Baby, title: "Maternity & Pediatrics", desc: "Safe deliveries and gentle care for mothers and children." },
  { icon: Microscope, title: "Laboratory", desc: "Accurate, timely test results from our in-house lab." },
  { icon: Ambulance, title: "Ambulance Service", desc: "Rapid transport when every minute matters." },
  { icon: Pill, title: "Pharmacy", desc: "On-site pharmacy with quality, affordable medication." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-semibold">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
              <HeartPulse className="w-4 h-4" />
            </div>
            <span>Mary Elms Mission Hospital</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition">Services</a>
            <a href="#about" className="hover:text-foreground transition">About</a>
            <a href="#appointment" className="hover:text-foreground transition">Book</a>
            <a href="#visit" className="hover:text-foreground transition">Visit</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </nav>
          <Button asChild size="sm">
            <a href="#appointment"><CalendarCheck className="w-4 h-4 mr-1" /> Book</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Mary Elms Mission Hospital exterior" width={1920} height={1280} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.22 0.04 200 / 0.85), oklch(0.35 0.08 195 / 0.6))" }} />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 py-28 md:py-40 text-primary-foreground">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-xs mb-6">
            <Star className="w-3.5 h-3.5 fill-current text-accent" /> Rated 5.0 on Google
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-[1.1]">
            Compassionate care, around the clock in Onitsha.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Mary Elms Mission Hospital has served the people of Odoakpu and greater Onitsha with dedicated, faith-rooted healthcare — open 24 hours, every day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <a href="tel:+2348036151096"><Phone className="w-4 h-4 mr-2" /> +234 803 615 1096</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <a href="#visit"><MapPin className="w-4 h-4 mr-2" /> Get Directions</a>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/80">
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Open 24 hours</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Odoakpu, Onitsha</span>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-medium">About the hospital</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">Healing hands, hopeful hearts.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              For decades, Mary Elms Mission Hospital has stood as a trusted pillar of healthcare in Onitsha — combining
              modern clinical practice with the warmth of mission-driven service. Our doctors, nurses and support staff
              treat every patient as family.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <Stat value="24/7" label="Always open" />
              <Stat value="5.0★" label="Google rating" />
              <Stat value="All ages" label="Welcomed" />
            </div>
          </div>
          <div className="relative">
            <img src={careImg} alt="Doctor caring for a patient" width={1280} height={896} loading="lazy"
              className="rounded-2xl shadow-[var(--shadow-soft)] w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-secondary/40 border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-widest text-primary font-medium">Our services</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">Care for every stage of life.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-7 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-[var(--shadow-soft)] transition-all">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-5">
          <img src={receptionImg} alt="Hospital reception" width={1280} height={896} loading="lazy" className="rounded-2xl w-full h-72 md:h-96 object-cover" />
          <img src={surgeryImg} alt="Operating theatre" width={1280} height={896} loading="lazy" className="rounded-2xl w-full h-72 md:h-96 object-cover" />
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="py-24 bg-secondary/40 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-sm uppercase tracking-widest text-primary font-medium">Plan your visit</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">We're here, day and night.</h2>
            <ul className="mt-8 space-y-5 text-sm">
              <Info icon={MapPin} title="Address">25 Anionwu Street, Modebe Ave, Odoakpu, Onitsha 431108, Anambra, Nigeria</Info>
              <Info icon={Phone} title="Phone"><a href="tel:+2348036151096" className="hover:text-primary">+234 803 615 1096</a></Info>
              <Info icon={Clock} title="Hours">Open 24 hours, every day of the week</Info>
            </ul>
            <Button asChild size="lg" className="mt-8">
              <a href="https://maps.app.goo.gl/eH2EmKMEzw5A7Gts7" target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
            </Button>
          </div>
          <div className="rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-soft)] h-80 md:h-full min-h-80">
            <iframe
              title="Hospital location"
              src="https://www.google.com/maps?q=Mary+Elms+Mission+Hospital+Onitsha&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <footer id="contact" className="py-16 max-w-6xl mx-auto px-6">
        <div className="rounded-3xl p-10 md:p-14 text-primary-foreground relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <h3 className="text-2xl md:text-3xl font-bold max-w-xl">Need care now? Our team is ready.</h3>
          <p className="mt-3 text-white/80 max-w-lg">Call us any time — day or night — and we'll be there for you and your family.</p>
          <Button asChild size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="tel:+2348036151096"><Phone className="w-4 h-4 mr-2" /> Call +234 803 615 1096</a>
          </Button>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-10">
          © {new Date().getFullYear()} Mary Elms Mission Hospital Onitsha. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl md:text-3xl font-bold text-primary">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}

function Info({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-primary shrink-0">
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-muted-foreground mt-0.5">{children}</div>
      </div>
    </li>
  );
}
