"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Sayfa değişince mobil menüyü kapat
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-cream/85 border-b border-sand/70 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-serif text-xl font-semibold tracking-tight text-ink">
            HN <span className="text-gold">Grup</span>
          </span>
          <span className="text-[0.62rem] uppercase tracking-[0.25em] text-stone">
            Dekorasyon
          </span>
        </Link>

        {/* Masaüstü menü */}
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors",
                  active ? "text-gold-dark" : "text-ink/80 hover:text-gold-dark",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-gold" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-ink/80 transition-colors hover:text-gold-dark"
          >
            <Phone className="h-4 w-4" />
            {site.phone}
          </a>
          <Button href="/iletisim" size="md">
            Teklif Al
          </Button>
        </div>

        {/* Mobil menü butonu */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-ink lg:hidden"
          aria-label="Menüyü aç/kapat"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobil açılır menü */}
      <div
        className={cn(
          "overflow-hidden border-sand bg-cream/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[34rem] border-b" : "max-h-0",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-3 text-base font-medium text-ink/90 transition-colors hover:bg-sand/60"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <Button href="/iletisim" className="w-full">
              Ücretsiz Teklif Al
            </Button>
            <a
              href={site.phoneHref}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-gold hover:text-gold-dark"
            >
              <Phone className="h-4 w-4" />
              {site.phone}
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
