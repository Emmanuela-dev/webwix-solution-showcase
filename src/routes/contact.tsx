import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — WebWix Solutions" },
      { name: "description", content: "Get in touch with WebWix Solutions — partnerships, investors, and clients welcome." },
      { property: "og:title", content: "Contact — WebWix Solutions" },
      { property: "og:description", content: "Reach out to WebWix Solutions." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-medium tracking-wide text-accent">GET IN TOUCH</p>
            <h1 className="mt-2 font-display text-4xl md:text-5xl">Let's build something lasting.</h1>
            <p className="mt-4 text-muted-foreground">
              Whether you're an investor, prospective client, or future team member —
              we'd love to hear from you.
            </p>
            <dl className="mt-10 space-y-6 text-sm">
              <div>
                <dt className="font-semibold">Email</dt>
                <dd className="mt-1 text-muted-foreground">hello@webwixsolutions.com</dd>
              </div>
              <div>
                <dt className="font-semibold">Phone</dt>
                <dd className="mt-1 text-muted-foreground">+254 700 000 000</dd>
              </div>
              <div>
                <dt className="font-semibold">Office</dt>
                <dd className="mt-1 text-muted-foreground">Nairobi, Kenya</dd>
              </div>
              <div>
                <dt className="font-semibold">Investors</dt>
                <dd className="mt-1 text-muted-foreground">
                  Request our pitch deck: investors@webwixsolutions.com
                </dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — we'll be in touch shortly.");
            }}
            className="rounded-2xl border border-border bg-card p-8"
          >
            <div className="grid gap-4">
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Name</span>
                <input required className="rounded-md border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Email</span>
                <input type="email" required className="rounded-md border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Company</span>
                <input className="rounded-md border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
              </label>
              <label className="grid gap-1.5 text-sm">
                <span className="font-medium">Message</span>
                <textarea required rows={5} className="rounded-md border border-input bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
              </label>
              <button type="submit" className="mt-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
