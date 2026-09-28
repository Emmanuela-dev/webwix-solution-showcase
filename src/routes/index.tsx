import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { testimonials } from "@/data/testimonials";
import iotProjectsImg from "@/assets/iot-projects.jpg";
import iotMentorshipImg from "@/assets/iot-mentorship.jpg";
import epiqueInteriorsImg from "@/assets/epique-interiors.jpg";
import bsGreensmartImg from "@/assets/bs-greensmart-farm.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WebWix Solutions — Software, Fintech, Agritech & IoT Systems" },
      {
        name: "description",
        content:
          "WebWix Solutions builds resilient software, fintech, agritech, and IoT & embedded systems with hands-on mentorship and training.",
      },
      { property: "og:title", content: "WebWix Solutions — Building softwares & IoT systems that last" },
      {
        property: "og:description",
        content: "Software, fintech, agritech, and IoT & embedded hardware innovations engineered to last.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    title: "Software Development",
    desc: "Custom platforms, web and mobile apps engineered for scale, security, and long-term maintainability.",
  },
  {
    title: "Fintech Innovations",
    desc: "Payments, digital wallets, lending and financial infrastructure that expand access and trust.",
  },
  {
    title: "Agritech Solutions",
    desc: "Data-driven tools that connect farmers, markets, and finance — modernising the food value chain.",
  },
  {
    title: "IoT & Embedded Systems",
    desc: "Custom PCB design, smart sensors, firmware development, and edge telemetry hardware.",
  },
  {
    title: "IoT Mentorship & Training",
    desc: "Practical hands-on training, circuit debugging, and mentorship programs for engineers and student innovators.",
  },
];

const featuredWorks = [
  {
    id: "epique-interiors",
    title: "Epique Interiors",
    category: "INTERIOR DESIGN WEBSITE",
    desc: "A luxury digital experience engineered for an elite interior design firm — featuring interactive project galleries, 3D space previews, and online consultation booking.",
    image: epiqueInteriorsImg,
  },
  {
    id: "bs-greensmart-farm",
    title: "BS GREENSMART FARM",
    tagline: "Smart Agritech Platform",
    category: "SMART FARM & AGRITECH",
    desc: "An end-to-end digital agritech portal for BS GREENSMART FARM — connecting smart greenhouse IoT telemetry, fresh produce e-commerce, and harvest tracking.",
    image: bsGreensmartImg,
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1200px 500px at 20% 0%, oklch(0.92 0.04 75) 0%, transparent 60%), radial-gradient(900px 400px at 90% 20%, oklch(0.88 0.06 70) 0%, transparent 55%), var(--background)",
          }}
        />
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
            SOFTWARE · FINTECH · AGRITECH · IOT & EMBEDDED
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] font-semibold md:text-6xl">
            Building software & IoT systems <span className="text-accent">that last.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            WebWix Solutions is a technology startup engineering resilient digital
            products and IoT hardware — offering custom development alongside hands-on
            IoT mentorship and technical training.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Partner with us
            </Link>
            <Link
              to="/works"
              className="rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              View Our Client Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-medium tracking-wide text-accent">OUR SOLUTIONS & SERVICES</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">Core verticals & technical mentorship.</h2>
          </div>
          <Link to="/services" className="hidden text-sm text-muted-foreground hover:text-foreground md:inline">
            All solutions →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary font-display text-lg font-semibold text-primary">
                  0{i + 1}
                </div>
                <h3 className="mt-6 font-display text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Works Showcase */}
      <section className="border-t border-border bg-card py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium tracking-wide text-accent">FEATURED CLIENT WORKS</p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">Websites & Platforms We've Built</h2>
            </div>
            <Link to="/works" className="mt-4 md:mt-0 text-sm font-medium text-accent hover:underline">
              Explore all case studies →
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {featuredWorks.map((w) => (
              <div key={w.id} className="group overflow-hidden rounded-2xl border border-border bg-background transition-all hover:border-accent/60">
                <div className="aspect-[16/10] overflow-hidden bg-secondary">
                  <img
                    src={w.image}
                    alt={w.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold tracking-wide text-accent">
                    {w.category}
                  </span>
                  <h3 className="mt-3 font-display text-2xl">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                  <Link
                    to="/works"
                    className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:text-accent"
                  >
                    View project story →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IoT & Embedded Systems Showcase Section */}
      <section className="border-t border-border bg-secondary/20 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-wide text-accent">IOT & EMBEDDED SHOWCASE</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">Hardware Engineering & IoT Mentorship</h2>
            <p className="mt-4 text-muted-foreground">
              We design connected hardware solutions for industrial and agricultural application,
              while actively mentoring developers and teams in embedded systems engineering.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={iotProjectsImg}
                  alt="IoT Hardware Projects Showcase"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <span className="text-xs font-semibold text-accent">EMBEDDED HARDWARE</span>
                <h3 className="mt-2 font-display text-2xl">IoT & Embedded Systems Projects</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Prototyping and deploying smart microcontrollers, wireless sensor arrays, telemetry devices, and IoT telemetry dashboards.
                </p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-2xl border border-border bg-card">
              <div className="aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={iotMentorshipImg}
                  alt="IoT Mentorship and Technical Training"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <span className="text-xs font-semibold text-accent">EDUCATION & CAPACITY</span>
                <h3 className="mt-2 font-display text-2xl">IoT Mentorship & Hands-on Training</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Interactive workshops, hardware bootcamps, and 1-on-1 mentorship for students and engineers building real-world embedded devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / trust */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
          {[
            ["5", "Core solutions & services"],
            ["10+", "IoT & software projects"],
            ["100+", "Mentees & trainees taught"],
            ["1", "Standard — excellence"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-4xl text-primary">{n}</div>
              <div className="mt-2 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium tracking-wide text-accent">TESTIMONIALS</p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl md:text-4xl">
          Trusted by teams building for the long term.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-8"
            >
              <blockquote className="flex-1 font-display text-lg leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">
                  {t.role}, {t.company}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-primary px-8 py-14 text-primary-foreground md:px-14">
          <h2 className="max-w-2xl font-display text-3xl md:text-4xl">
            Let's build hardware or software together.
          </h2>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            Whether you need custom software, IoT project development, or IoT mentorship & training — we'd love to partner with you.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

