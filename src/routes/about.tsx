import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — WebWix Solutions" },
      { name: "description", content: "Our mission, vision and values at WebWix Solutions." },
      { property: "og:title", content: "About — WebWix Solutions" },
      { property: "og:description", content: "The company behind software, fintech, and agritech that lasts." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium tracking-wide text-accent">ABOUT US</p>
        <h1 className="mt-2 max-w-3xl font-display text-4xl md:text-5xl">
          A technology company built for the long horizon.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          WebWix Solutions was founded on a simple belief: software should outlast
          trends. We partner with clients and communities to design digital products
          that create durable value — economically, socially, and technically.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Our Mission",
              d: "To engineer resilient technology that unlocks growth in software, finance, and agriculture across emerging markets.",
            },
            {
              t: "Our Vision",
              d: "A future where African-built platforms set the global standard for reliability, inclusion, and craft.",
            },
            {
              t: "Our Values",
              d: "Depth over hype. Ownership. Long-term partnerships. Uncompromising engineering standards.",
            },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-8">
              <h3 className="font-display text-xl">{c.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-secondary/60 p-10">
          <h2 className="max-w-2xl font-display text-3xl">Why investors partner with WebWix.</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              ["Focused portfolio", "Three high-growth verticals with clear synergies and cross-selling potential."],
              ["Founder-led", "Operating leadership with deep technical and domain expertise."],
              ["Built to last", "Products designed for resilience, compliance, and long-term unit economics."],
            ].map(([t, d]) => (
              <div key={t}>
                <h4 className="font-display text-lg">{t}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
