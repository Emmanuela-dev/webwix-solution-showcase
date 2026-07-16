import ceo from "@/assets/team-ceo.jpg";
import cto from "@/assets/team-cto.jpg";
import coo from "@/assets/team-coo.jpg";
import cfo from "@/assets/team-cfo.jpg";

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  founder?: boolean;
};

export const team: TeamMember[] = [
  {
    name: "Emmanuela Omondi",
    role: "Chief Executive Officer",
    bio: "Visionary founder driving WebWix's mission to build software that endures — steering strategy, partnerships, and investor relations.",
    image: ceo,
    founder: true,
  },
  {
    name: "Wayne Thuita",
    role: "Chief Technology Officer",
    bio: "Leads engineering across our software, fintech, and agritech platforms — architecting resilient, scalable systems from the ground up.",
    image: cto,
    founder: true,
  },
  {
    name: "Cellion Ligalamu",
    role: "Chief Operating Officer",
    bio: "Runs day-to-day operations, delivery, and client success — turning our roadmap into shipped products and measurable outcomes.",
    image: coo,
    founder: true,
  },
  {
    name: "Purity Kerubo",
    role: "Chief Financial Officer",
    bio: "Owns financial strategy, planning, and investor readiness — ensuring disciplined growth and long-term sustainability.",
    image: cfo,
    founder: true,
  },
];
