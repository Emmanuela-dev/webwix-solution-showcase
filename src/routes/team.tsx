import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { team } from "@/data/team";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team & Founders — WebWix Solutions" },
      { name: "description", content: "Meet the founders and leadership team behind WebWix Solutions." },
      { property: "og:title", content: "Team & Founders — WebWix Solutions" },
      { property: "og:description", content: "The people building WebWix Solutions." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium tracking-wide text-accent">FOUNDERS & LEADERSHIP</p>
        <h1 className="mt-2 max-w-3xl font-display text-4xl md:text-5xl">
          The people building WebWix.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A founder-led team combining engineering depth, operational rigor, and financial discipline.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {team.map((m) => (
            <article key={m.name} className="overflow-hidden rounded-2xl border border-border bg-card md:flex">
              <div className="aspect-square w-full flex-none overflow-hidden bg-secondary md:aspect-auto md:w-56">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 md:p-7">
                {m.founder && (
                  <span className="inline-flex rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-primary">
                    FOUNDER
                  </span>
                )}
                <h2 className="mt-2 font-display text-xl">{m.name}</h2>
                <p className="text-sm font-medium text-accent">{m.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
