import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Hizmetlerimiz"
            title="Zeminden çatıya tüm işler"
            description="Parke, fayans, çatı, boya ve anahtar teslim tadilat — hepsi tek elden, kendi ekibimizle."
          />
          <Link
            href="/hizmetler"
            className="group hidden shrink-0 items-center gap-2 text-sm font-medium text-gold-dark md:flex"
          >
            Tüm Hizmetler
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/hizmetler#${service.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-sand bg-cream shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-lift"
              >
                {/* Görsel */}
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/55 via-espresso/5 to-transparent" />
                  {/* İkon rozeti */}
                  <span className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cream/95 text-gold-dark shadow-soft backdrop-blur transition-colors duration-300 group-hover:bg-gold group-hover:text-cream">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                {/* Metin */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl text-ink transition-colors duration-300 group-hover:text-gold-dark">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-stone">
                    {service.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark">
                    Detaylar
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobilde "Tüm Hizmetler" linki */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="/hizmetler"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gold-dark"
          >
            Tüm Hizmetler
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
