import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import MapEmbed from "@/components/contact/MapEmbed";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim & Teklif Al",
  description:
    "HN Grup Dekorasyon ile iletişime geçin. Ücretsiz keşif ve teklif için formu doldurun, telefon veya WhatsApp ile bize ulaşın.",
  alternates: { canonical: "/iletisim" },
};

const contactCards = [
  {
    icon: Phone,
    label: "Telefon",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Hızlı mesaj gönderin",
    href: whatsappLink(),
    external: true,
  },
  {
    icon: Mail,
    label: "E-posta",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    label: "Adres",
    value: site.address,
  },
];

export default function IletisimPage() {
  return (
    <>
      <PageHeader
        eyebrow="İletişim"
        title="Projenizi konuşalım"
        description="Ücretsiz keşif ve teklif için aşağıdaki formu doldurun ya da doğrudan telefon/WhatsApp üzerinden bize ulaşın. Size en kısa sürede dönüş yapalım."
        breadcrumb={[
          { label: "Ana Sayfa", href: "/" },
          { label: "İletişim", href: "/iletisim" },
        ]}
      />

      <Container className="py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Sol — iletişim bilgileri */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl text-ink sm:text-3xl">Bize ulaşın</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {contactCards.map((c) => {
                const Icon = c.icon;
                const content = (
                  <>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold-dark">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="mt-4">
                      <div className="text-xs uppercase tracking-wider text-stone">
                        {c.label}
                      </div>
                      <div className="mt-1 font-medium text-ink">{c.value}</div>
                    </div>
                  </>
                );
                const cls =
                  "flex flex-col rounded-2xl border border-sand bg-cream p-5 transition-colors hover:border-gold/40";
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className={cls}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={c.label} className={cls}>
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Çalışma saatleri */}
            <div className="mt-4 flex items-start gap-4 rounded-2xl border border-sand bg-sand/40 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold-dark">
                <Clock className="h-5 w-5" />
              </span>
              <div className="text-sm">
                <div className="font-medium text-ink">Çalışma Saatleri</div>
                <div className="mt-1 text-stone">Pazartesi – Cumartesi: 09:00 – 19:00</div>
                <div className="text-stone">Pazar: Randevu ile</div>
              </div>
            </div>
          </div>

          {/* Sağ — form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Container>

      <MapEmbed />
    </>
  );
}
