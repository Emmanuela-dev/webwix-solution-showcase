import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.jpeg";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-4">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="WebWix Solutions"
              className="h-9 w-9 rounded-md object-cover"
            />
            <span className="font-display text-lg font-semibold">WebWix Solutions</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Building softwares that last. We craft resilient technology for finance,
            agriculture, and the enterprises of tomorrow.
          </p>
          {/* Social links */}
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.tiktok.com/@webwix_solutions?_r=1&_t=ZS-98ZThPK697E"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WebWix Solutions on TikTok"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
            >
              {/* TikTok icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/webw_ixsolutions?igsh=MWl1aXoybjh4eXN2OA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WebWix Solutions on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
            >
              {/* Instagram icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/innovations" className="hover:text-foreground">Innovations</Link></li>
            <li><Link to="/works" className="hover:text-foreground">Our Work</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Nairobi, Kenya</li>
            <li>
              <a href="tel:+254793540542" className="hover:text-foreground">
                +254 793 540 542
              </a>
            </li>
            <li>
              <a href="mailto:webwixsolutions0@gmail.com" className="hover:text-foreground break-all">
                webwixsolutions0@gmail.com
              </a>
            </li>
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
