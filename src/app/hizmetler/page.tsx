import type { Metadata } from "next";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/home/CtaBanner";
import { services, processSteps } from "@/data/services";

export const metadata: Metadata = {
  title: "Hizmetlerimiz",
  description:
    "Parke ve zemin kaplama, fayans & seramik, çatı & su yalıtımı, boya & dekorasyon, anahtar teslim tadilat ve mimari danışmanlık. HN Grup Dekorasyon ile zeminden çatıya her iş tek elden.",
  alternates: { canonical: "/hizmetler" },
};

export default function HizmetlerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hizmetlerimiz"
        title="Zeminden çatıya tüm hizmetlerimiz"
        description="Parke, fayans, çatı, boya ve anahtar teslim tadilat. Ev ve dükkânlarınız için, 18 yılı aşkın deneyimle, her işi tek elden yapıyoruz."
        breadcrumb={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetler", href: "/hizmetler" },
        ]}
      />

      {/* Hizmet blokları */}
      <div className="py-14 sm:py-16 lg:py-24">
        <Container className="flex flex-col gap-14 sm:gap-20 lg:gap-28">
          {services.map((service, i) => {
            const Icon = service.icon;
            const reverse = i % 2 === 1;
            return (
              <section
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                {/* Görsel */}
                <div
                  className={`relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>

                {/* Metin */}
                <div className={reverse ? "lg:order-1" : ""}>
                  <span className="flex h-13 w-13 items-center justify-center rounded-xl bg-gold/10 text-gold-dark">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 text-3xl text-ink sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-stone">
                    {service.description}
                  </p>

                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-ink/80">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                          <Check className="h-3 w-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button href="/iletisim" variant="outline" className="mt-8">
                    Bu Hizmet İçin Teklif Al
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </section>
            );
          })}
        </Container>
      </div>

      {/* Çalışma sürecimiz */}
      <section className="bg-espresso py-16 sm:py-20 lg:py-32">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Nasıl Çalışıyoruz"
            title="Keşiften teslime, net bir süreç"
            description="İşin her aşamasında şeffaflık ve düzen önceliğimiz."
            className="mx-auto [&_h2]:text-cream [&_p]:text-cream/70"
          />

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-cream/10 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.no} className="bg-espresso p-8">
                <div className="font-serif text-4xl text-gold-soft">{step.no}</div>
                <h3 className="mt-4 text-xl text-cream">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
