export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "WebWix rebuilt our payments stack from the ground up. Six months in, it's the most reliable part of our business.",
    name: "Achieng Otieno",
    role: "Head of Product",
    company: "PesaLink Africa",
  },
  {
    quote:
      "They didn't just ship a platform — they gave us a system our farmers actually understand and use every day.",
    name: "Samuel Kariuki",
    role: "Founder",
    company: "GreenFields Co-op",
  },
  {
    quote:
      "A rare team that treats engineering as craft. Clean code, clear communication, and real ownership of outcomes.",
    name: "Amina Yusuf",
    role: "CTO",
    company: "Baraka Health",
  },
];
