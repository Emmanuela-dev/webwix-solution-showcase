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

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium tracking-wide text-accent">OUR STORY</p>
            <h2 className="mt-2 font-display text-3xl">From an idea to a platform company.</h2>
            <p className="mt-4 text-muted-foreground">
              WebWix Solutions started as a small team of engineers and operators who
              were tired of throwaway software. We saw first-hand how many digital
              products in our markets were built for demos, not for daily life — and
              set out to do the opposite.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today we build across three verticals — software, fintech, and agritech —
              with a single obsession: shipping products that people can rely on years
              from now, not just weeks.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium tracking-wide text-accent">HOW WE WORK</p>
            <h2 className="mt-2 font-display text-3xl">Small teams. Deep ownership.</h2>
            <ul className="mt-4 space-y-4 text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">Craft first.</span>{" "}
                We measure ourselves on the quality of what we ship, not the volume of tickets closed.
              </li>
              <li>
                <span className="font-semibold text-foreground">Close to the problem.</span>{" "}
                Our teams sit with the users we build for — farmers, operators, finance leads.
              </li>
              <li>
                <span className="font-semibold text-foreground">Long partnerships.</span>{" "}
                We work with a small number of clients deeply, rather than many shallowly.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-secondary/60 p-10">
          <h2 className="max-w-2xl font-display text-3xl">What we care about.</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              ["Impact over hype", "We choose problems where great software genuinely changes outcomes."],
              ["People first", "A calm, curious team culture — where engineers and operators grow together."],
              ["Built to last", "Every product is designed to still be useful, secure, and maintainable years from now."],
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
