import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/innovations")({
  head: () => ({
    meta: [
      { title: "Innovations — WebWix Solutions" },
      {
        name: "description",
        content:
          "Explore the products and innovations WebWix Solutions is building — from solar-powered irrigation to B2B organic waste marketplaces.",
      },
      { property: "og:title", content: "Innovations — WebWix Solutions" },
      {
        property: "og:description",
        content:
          "From SolarFlow smart irrigation to Doki organic waste marketplace — a look at what we're building.",
      },
    ],
  }),
  component: InnovationsPage,
});

type InnovationStatus = "Live" | "Beta" | "In Build" | "Research";

const statusStyles: Record<InnovationStatus, string> = {
  Live: "bg-emerald-100 text-emerald-800",
  Beta: "bg-blue-100 text-blue-800",
  "In Build": "bg-amber-100 text-amber-800",
  Research: "bg-secondary text-muted-foreground",
};

const innovations = [
  {
    id: "solarflow",
    number: "01",
    title: "SolarFlow",
    tagline: "Solar-powered smart irrigation for smallholder farms.",
    description:
      "An off-grid solar irrigation system combining IoT sensor arrays, automated valve control, and a mobile dashboard. SolarFlow monitors soil moisture and weather data in real time, then schedules water delivery to maximise crop yield while eliminating reliance on grid power or manual labour.",
    vertical: "IoT & Agritech",
    status: "In Build" as InnovationStatus,
    highlights: [
      "Off-grid solar power with battery backup",
      "Soil moisture & weather sensor fusion",
      "Automated zone-based valve scheduling",
      "Mobile dashboard for remote farm control",
    ],
    year: "2025",
    accentColor: "text-emerald-700",
  },
  {
    id: "doki",
    number: "02",
    title: "Doki",
    tagline: "B2B marketplace for organic waste and circular materials.",
    description:
      "A business-to-business platform connecting generators of organic waste — farms, food processors, and restaurants — with buyers who convert it into compost, biogas, animal feed, and other circular economy products. Doki brings price discovery, logistics coordination, and compliance documentation to a supply chain that previously ran entirely on phone calls.",
    vertical: "Software & Sustainability",
    status: "Beta" as InnovationStatus,
    highlights: [
      "Verified buyer & seller onboarding",
      "Real-time waste listing & price discovery",
      "Logistics & collection coordination tools",
      "Compliance & sustainability reporting",
    ],
    year: "2025",
    accentColor: "text-accent",
  },
];

function StatusBadge({ status }: { status: InnovationStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[status]}`}
    >
      {status === "Live" && (
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
      )}
      {status}
    </span>
  );
}

function InnovationsPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1000px 400px at 10% 0%, oklch(0.92 0.04 75) 0%, transparent 60%), radial-gradient(700px 350px at 85% 30%, oklch(0.90 0.05 68) 0%, transparent 55%), var(--background)",
          }}
        />
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="text-sm font-medium tracking-wide text-accent">INNOVATIONS</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.08] font-semibold md:text-5xl">
            Ideas engineered into{" "}
            <span className="text-accent">real products.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Beyond client work, we build our own. Here's a look at the products
            we're creating — solving real problems in agriculture, sustainability,
            and beyond.
          </p>

          {/* Quick stats */}
          <div className="mt-10 flex flex-wrap gap-4">
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4">
              <span className="font-display text-3xl text-primary">{innovations.length}</span>
              <span className="text-sm text-muted-foreground">Active innovations</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4">
              <span className="font-display text-3xl text-blue-700">
                {innovations.filter((i) => i.status === "Beta").length}
              </span>
              <span className="text-sm text-muted-foreground">In beta</span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4">
              <span className="font-display text-3xl text-amber-600">
                {innovations.filter((i) => i.status === "In Build").length}
              </span>
              <span className="text-sm text-muted-foreground">In active build</span>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation cards */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="space-y-6">
          {innovations.map((item) => (
            <article
              key={item.id}
              className="grid gap-8 rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg md:grid-cols-[200px_1fr] md:p-10"
            >
              {/* Left col */}
              <div className="flex flex-col justify-between gap-6 md:gap-0">
                <div>
                  <span className={`font-display text-5xl font-semibold ${item.accentColor}`}>
                    {item.number}
                  </span>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <StatusBadge status={item.status} />
                    <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                      {item.vertical}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Est. {item.year}</p>
              </div>

              {/* Right col */}
              <div>
                <h2 className="font-display text-2xl">{item.title}</h2>
                <p className={`mt-1 text-sm font-medium ${item.accentColor}`}>
                  {item.tagline}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 rounded-lg bg-secondary/60 p-4 text-sm"
                    >
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Co-build / contact CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-primary px-8 py-14 text-primary-foreground md:px-14">
          <p className="text-sm font-medium tracking-wide text-primary-foreground/60">
            BUILD WITH US
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl md:text-4xl">
            Have an innovation you want to bring to life?
          </h2>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            Whether you have a raw idea, a prototype, or a problem you haven't
            found a solution to yet — we can help you engineer it into a real
            product. We're open to co-building, partnerships, and custom
            innovation projects.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
            >
              Let's build together
            </Link>
            <Link
              to="/services"
              className="inline-flex rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:border-primary-foreground/60"
            >
              See what we offer
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
