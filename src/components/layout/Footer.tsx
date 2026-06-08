import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { nav, site } from "@/lib/site";
import { services } from "@/data/services";
import Container from "@/components/ui/Container";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.4-10.4a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.08 24 18.09 24 12.07z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-cream/80">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Marka */}
          <div className="lg:col-span-1">
            <span className="font-serif text-2xl font-semibold text-cream">
              HN <span className="text-gold-soft">Grup</span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/60">
              Ev ve dükkânlarınızı zeminden çatıya yeniliyoruz. Parke, fayans,
              çatı, boya ve anahtar teslim tadilat — 18 yılı aşkın deneyimle.
            </p>
            {(site.social.instagram || site.social.facebook) && (
              <div className="mt-6 flex gap-3">
                {site.social.instagram && (
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 transition-colors hover:border-gold hover:text-gold-soft"
                  >
                    <InstagramIcon className="h-4 w-4" />
                  </a>
                )}
                {site.social.facebook && (
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 transition-colors hover:border-gold hover:text-gold-soft"
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Menü */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cream">
              Menü
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-cream/60 transition-colors hover:text-gold-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cream">
              Hizmetler
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-cream/60">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/hizmetler#${s.slug}`}
                    className="transition-colors hover:text-gold-soft"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-cream">
              İletişim
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-cream/60">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" />
                <span>{site.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-soft" />
                <a href={site.phoneHref} className="hover:text-gold-soft">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold-soft" />
                <a href={`mailto:${site.email}`} className="hover:text-gold-soft">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/40 sm:flex-row">
          <p>
            © {year} {site.name}. Tüm hakları saklıdır.
          </p>
          <p>İstanbul · Türkiye</p>
        </div>
      </Container>
    </footer>
  );
}
