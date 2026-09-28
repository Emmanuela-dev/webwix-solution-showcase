import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary font-display text-base font-bold text-primary-foreground">
              W
            </div>
            <span className="font-display text-lg font-semibold">WebWix Solutions</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Building softwares that last. We craft resilient technology for finance, agriculture, and the enterprises of tomorrow.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/works" className="hover:text-foreground">Our Work</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Nairobi, Kenya</li>
            <li>hello@webwixsolutions.com</li>
            <li>+254 700 000 000</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-6 py-4 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} WebWix Solutions. All rights reserved.</p>
          <p>Building softwares that last.</p>
        </div>
      </div>
    </footer>
  );
}
