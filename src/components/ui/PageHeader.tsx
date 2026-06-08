import Link from "next/link";
import Container from "@/components/ui/Container";

/**
 * İç sayfalar için ortak üst başlık bandı.
 * Açık zemin — sabit (transparan) navbar linkleri okunaklı kalır.
 */
export default function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; href: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-sand bg-gradient-to-b from-sand/60 to-cream pt-32 pb-14 lg:pt-36 lg:pb-20">
      {/* dekoratif yumuşak altın leke */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <Container className="relative">
        {breadcrumb && (
          <nav className="mb-5 flex items-center gap-2 text-xs text-stone">
            {breadcrumb.map((c, i) => (
              <span key={c.href} className="flex items-center gap-2">
                {i > 0 && <span className="text-sand">/</span>}
                <Link href={c.href} className="transition-colors hover:text-gold-dark">
                  {c.label}
                </Link>
              </span>
            ))}
          </nav>
        )}

        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className="mt-3 max-w-3xl text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-stone sm:text-lg">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
