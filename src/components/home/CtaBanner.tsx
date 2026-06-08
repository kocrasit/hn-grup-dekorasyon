import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { whatsappLink } from "@/lib/site";

export default function CtaBanner() {
  return (
    <section className="pb-16 sm:pb-20 lg:pb-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-espresso px-6 py-12 sm:px-14 sm:py-16 lg:px-20 lg:py-20">
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2070&q=80"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/90 to-espresso/50" />
          <div className="relative z-10 max-w-2xl">
            <span className="eyebrow text-gold-soft">İşe Başlayalım</span>
            <h2 className="mt-4 text-3xl text-cream sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Evinizi ya da dükkânınızı birlikte yenileyelim.
            </h2>
            <p className="mt-5 max-w-xl text-cream/75">
              Ücretsiz keşfe gelip net bir teklif çıkaralım. En kısa sürede size
              dönüş yapalım.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/iletisim" size="lg">
                Ücretsiz Teklif Al
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href={whatsappLink()} variant="light" size="lg">
                <MessageCircle className="h-4 w-4" />
                WhatsApp&apos;tan Yazın
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
