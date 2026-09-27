import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { testimonials } from "@/data/testimonials";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WebWix Solutions — Building softwares that last" },
      {
        name: "description",
        content:
          "WebWix Solutions is a technology startup building resilient software, fintech, and agritech products for Africa and beyond.",
      },
      { property: "og:title", content: "WebWix Solutions — Building softwares that last" },
      {
        property: "og:description",
        content: "Software, fintech, and agritech innovations engineered to last.",
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
            SOFTWARE · FINTECH · AGRITECH
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] font-semibold md:text-6xl">
            Building softwares <span className="text-accent">that last.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            WebWix Solutions is a technology startup engineering resilient digital
            products across software, financial services, and agriculture — designed
            for real-world impact.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Partner with us
            </Link>
            <Link
              to="/services"
              className="rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Explore what we build
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-medium tracking-wide text-accent">WHAT WE DO</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">Three verticals. One standard of craft.</h2>
          </div>
          <Link to="/services" className="hidden text-sm text-muted-foreground hover:text-foreground md:inline">
            All services →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="group rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary font-display text-lg font-semibold text-primary">
                0{i + 1}
              </div>
              <h3 className="mt-6 font-display text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats / trust */}
      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
          {[
            ["3", "Focus verticals"],
            ["10+", "Products in build"],
            ["100%", "Founder-led"],
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
            Let's build something lasting, together.
          </h2>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            Whether you're exploring a partnership, starting a new product, or joining
            the team — we'd love to hear from you.
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
