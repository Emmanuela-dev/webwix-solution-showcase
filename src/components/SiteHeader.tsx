import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logoImg from "@/assets/logo.jpeg";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/innovations", label: "Innovations" },
  { to: "/works", label: "Our Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="WebWix Solutions"
            className="h-9 w-9 rounded-md object-cover"
          />
          <span className="font-display text-lg font-semibold tracking-tight">
            WebWix <span className="text-accent">Solutions</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={cn(
                "text-sm text-muted-foreground transition-colors hover:text-foreground",
                location.pathname === n.to || (n.to !== "/" && location.pathname.startsWith(n.to))
                  ? "text-foreground font-medium"
                  : ""
              )}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
        >
          Get in touch
        </Link>

        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} direction="right">
          <DrawerTrigger asChild>
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Open menu"
            >
              {drawerOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </DrawerTrigger>
          <DrawerContent className="w-72 max-w-[85vw] sm:max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
            </DrawerHeader>
            <div className="flex flex-col gap-2 px-4 pb-4">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    location.pathname === n.to || (n.to !== "/" && location.pathname.startsWith(n.to))
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  )}
                  activeOptions={{ exact: n.to === "/" }}
                  onClick={closeDrawer}
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                onClick={closeDrawer}
              >
                Get in touch
              </Link>
            </div>
            <DrawerClose asChild>
              <button className="mx-4 mb-4 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground w-full">
                Close
              </button>
            </DrawerClose>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
