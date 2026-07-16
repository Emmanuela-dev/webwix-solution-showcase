import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — WebWix Solutions" },
      { name: "description", content: "Software development, fintech, and agritech innovations from WebWix Solutions." },
      { property: "og:title", content: "Services — WebWix Solutions" },
      { property: "og:description", content: "What we build: software, fintech, and agritech." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Software Development",
    tagline: "Product engineering, done properly.",
    points: [
      "Web & mobile product development",
      "Cloud-native architecture and DevOps",
      "API platforms and integrations",
      "Legacy modernisation",
    ],
  },
  {
    title: "Fintech Innovations",
    tagline: "Financial infrastructure that expands access.",
    points: [
      "Payments and wallet platforms",
      "Digital lending and credit scoring",
      "Compliance-ready KYC/AML workflows",
      "Embedded finance for SMEs",
    ],
  },
  {
    title: "Agritech Solutions",
    tagline: "Technology for the food value chain.",
    points: [
      "Farmer marketplaces and cooperatives",
      "Supply chain traceability",
      "Data analytics for yield & climate",
      "Agri-finance and insurance rails",
    ],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium tracking-wide text-accent">SERVICES</p>
        <h1 className="mt-2 max-w-3xl font-display text-4xl md:text-5xl">
          What we build at WebWix.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          We focus on three interconnected verticals — each guided by the same
          engineering discipline and long-term thinking.
        </p>

        <div className="mt-14 space-y-6">
          {services.map((s, i) => (
            <div key={s.title} className="grid gap-8 rounded-2xl border border-border bg-card p-8 md:grid-cols-[1fr_2fr] md:p-10">
              <div>
                <span className="font-display text-5xl text-accent">0{i + 1}</span>
                <h2 className="mt-4 font-display text-2xl">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 rounded-lg bg-secondary/60 p-4 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
