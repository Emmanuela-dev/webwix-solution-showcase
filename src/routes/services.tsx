import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import iotProjectsImg from "@/assets/iot-projects.jpg";
import iotMentorshipImg from "@/assets/iot-mentorship.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — WebWix Solutions" },
      { name: "description", content: "Software development, fintech, agritech, and IoT & embedded systems development, mentorship, and training from WebWix Solutions." },
      { property: "og:title", content: "Services — WebWix Solutions" },
      { property: "og:description", content: "What we build: software, fintech, agritech, and IoT & embedded systems solutions." },
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
  {
    title: "IoT & Embedded Systems",
    tagline: "Hardware, firmware, and connected edge solutions.",
    points: [
      "Custom PCB design & embedded C/C++ firmware",
      "Industrial & agricultural IoT sensor networks",
      "Edge computing & real-time telemetry dashboards",
      "Wireless protocols (LoRa, MQTT, BLE, Cellular)",
    ],
  },
  {
    title: "IoT Mentorship & Training",
    tagline: "Empowering engineers and teams with practical IoT mastery.",
    points: [
      "Hands-on microcontrollers & hardware workshops",
      "Circuit design, firmware & debugging mentorship",
      "Cloud telemetry architecture & MQTT integration",
      "Custom bootcamps for students & engineering teams",
    ],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm font-medium tracking-wide text-accent">SERVICES & SOLUTIONS</p>
        <h1 className="mt-2 max-w-3xl font-display text-4xl md:text-5xl">
          What we build & teach at WebWix.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          We focus on interconnected verticals — spanning software engineering, fintech,
          agritech, and cutting-edge IoT & embedded systems development, mentorship, and training.
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

        {/* IoT Showcase & Mentorship Section */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-medium tracking-wide text-accent">HARDWARE & CAPABILITY BUILDING</p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl">IoT Projects & Mentorship in Action</h2>
            </div>
            <p className="mt-3 md:mt-0 max-w-md text-sm text-muted-foreground">
              From prototyping custom embedded hardware to training the next generation of IoT engineers.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/50">
              <div className="aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={iotProjectsImg}
                  alt="IoT and Embedded Systems Hardware Projects"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold tracking-wide text-accent">
                  DEVELOPMENT & HARDWARE
                </span>
                <h3 className="mt-3 font-display text-2xl">IoT & Embedded Hardware Projects</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  We design end-to-end connected hardware solutions — including microcontrollers, sensor nodes,
                  telemetry gateways, and real-time cloud dashboards tailored for agriculture, industry, and smart cities.
                </p>
              </div>
            </article>

            <article className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/50">
              <div className="aspect-[16/10] overflow-hidden bg-secondary">
                <img
                  src={iotMentorshipImg}
                  alt="IoT Mentorship and Technical Training Session"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <span className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold tracking-wide text-accent">
                  MENTORSHIP & TRAINING
                </span>
                <h3 className="mt-3 font-display text-2xl">IoT Mentorship & Practical Workshops</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Hands-on training programs and technical mentorship designed to bridge theory and physical computing.
                  We train student innovators and enterprise engineering teams on microcontrollers, ESP32/STM32, MQTT, and circuit debugging.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

