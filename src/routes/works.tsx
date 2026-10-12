import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import epiqueInteriorsImg from "@/assets/epique-interiors.jpg";
import restaurantPosImg from "@/assets/iot-projects.jpg";

export const Route = createFileRoute("/works")({
  head: () => ({
    meta: [
      { title: "Our Work — WebWix Solutions" },
      { name: "description", content: "Explore featured client projects built by WebWix Solutions including Epique Interiors and a full-featured Restaurant POS System." },
      { property: "og:title", content: "Our Work — WebWix Solutions Showcase" },
      { property: "og:description", content: "Featured websites and platforms engineered by WebWix Solutions." },
    ],
  }),
  component: WorksPage,
});

const projects = [
  {
    id: "epique-interiors",
    title: "Epique Interiors",
    tagline: "Luxury Interior Design Studio Web Experience",
    category: "INTERIOR DESIGN & ARCHITECTURE",
    image: epiqueInteriorsImg,
    url: "https://epiqueinteriors.vercel.app/",
    summary:
      "A bespoke, high-end digital web application built for Epique Interiors — an elite interior design firm. We designed and engineered a modern platform featuring interactive portfolio showcases, high-definition space previews, automated client inquiry routing, and online consultation booking.",
    highlights: [
      "High-performance interactive project galleries",
      "Custom consultation booking & onboarding flow",
      "Seamless mobile & desktop responsive experience",
      "SEO & speed optimization tailored for luxury clients",
    ],
    tech: ["React / TypeScript", "Tailwind CSS", "CMS Portfolio Engine", "Form Automation"],
  },
  {
    id: "restaurant-pos",
    title: "Restaurant POS System",
    tagline: "End-to-End Point-of-Sale & Operations Platform for Restaurants",
    category: "HOSPITALITY & RETAIL TECH",
    image: restaurantPosImg,
    url: "#",
    summary:
      "A full-featured restaurant point-of-sale system designed for quick-service and sit-down dining. The platform handles table management, order taking, kitchen display routing, inventory tracking, and daily sales reporting — all from a single, fast tablet interface built to survive a busy service.",
    highlights: [
      "Real-time table & order management",
      "Kitchen Display System (KDS) integration",
      "Inventory tracking & low-stock alerts",
      "Daily sales, tips & staff performance reports",
    ],
    tech: ["React / TypeScript", "Node.js Backend", "Real-time WebSockets", "Offline-first PWA"],
  },
];

function WorksPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-wide text-accent">FEATURED PROJECTS</p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl">
            Our Work & Client Showcase.
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore recent digital platforms, brand experiences, and smart IoT applications
            built by WebWix Solutions for ambitious businesses.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {projects.map((p, idx) => (
            <article
              key={p.id}
              className="grid gap-10 overflow-hidden rounded-3xl border border-border bg-card p-8 md:grid-cols-2 md:p-12"
            >
              <div className="flex flex-col justify-between">
                <div>
                  <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold tracking-wide text-accent">
                    {p.category}
                  </span>
                  <h2 className="mt-4 font-display text-3xl md:text-4xl">{p.title}</h2>
                  <p className="mt-2 font-display text-lg text-foreground/90">{p.tagline}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>

                  <div className="mt-6">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Key Highlights</h3>
                    <ul className="mt-3 space-y-2">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-foreground/90">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="rounded-md bg-secondary/80 px-2.5 py-1 text-xs font-medium text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                    {p.url !== "#" && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-md"
                      >
                        Visit Live Website ↗
                      </a>
                    )}                  </div>
                </div>
              </div>

              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-secondary md:aspect-auto md:h-full">
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="group block h-full w-full">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="rounded-full bg-background/90 px-4 py-2 text-xs font-semibold text-foreground backdrop-blur">
                      View Live Website ↗
                    </span>
                  </div>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 rounded-3xl bg-secondary/50 p-10 text-center md:p-16">
          <h2 className="mx-auto max-w-xl font-display text-3xl md:text-4xl">Have a project in mind?</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Whether you need a custom website, an e-commerce platform, or an IoT hardware integration — let's bring it to life.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start your project with us
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
