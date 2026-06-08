import Image from "next/image";
import { ArrowRight, ShieldCheck, Award, Wrench, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";

const trustBadges = [
  { icon: Award, label: `${site.expertiseYears} yıl saha deneyimi` },
  { icon: Wrench, label: "Tek elden anahtar teslim" },
  { icon: ShieldCheck, label: "İşçilik garantisi" },
  { icon: Sparkles, label: "Ücretsiz keşif & net teklif" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden lg:min-h-[92vh]">
      {/* Arka plan görseli */}
      <Image
        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2070&q=80"
        alt="Modern ve şık bir iç mekan tasarımı"
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover"
      />
      {/* Karartma katmanları — okunabilirlik + derinlik */}
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/60 to-espresso/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-espresso/30" />
      {/* Yumuşak altın ışıltı */}
      <div className="animate-float pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-gold/20 blur-[120px]" />

      <Container className="relative z-10 pt-28 pb-20">
        <div className="max-w-2xl">
          <span className="animate-fade-up eyebrow inline-flex items-center gap-2.5 text-gold-soft">
            <span className="h-px w-7 bg-gold-soft/60" />
            HN Grup Dekorasyon
          </span>
          <h1 className="animate-fade-up stagger-1 mt-6 text-4xl font-semibold leading-[1.08] text-cream sm:text-5xl lg:text-[3.75rem]">
            Evinizi ve dükkânınızı,
            <span className="block text-gold-gradient">zeminden çatıya</span>
            yeniliyoruz.
          </h1>
          <p className="animate-fade-up stagger-2 mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            Parke, fayans, çatı, boya ve anahtar teslim tadilat. 18 yılı aşkın
            saha deneyimiyle, işin her aşamasını kendi ekibimizle, tek elden ve
            temiz işçilikle hallediyoruz.
          </p>
          <div className="animate-fade-up stagger-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/iletisim" size="lg">
              Ücretsiz Keşif & Teklif
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/projeler" variant="light" size="lg">
              Projelerimizi İnceleyin
            </Button>
          </div>

          {/* Güven rozetleri — sayı yok, gerçek vaatler */}
          <div className="animate-fade-up stagger-4 mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-4 border-t border-cream/15 pt-8">
            {trustBadges.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.label}
                  className="flex items-center gap-3 text-sm text-cream/85"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-soft ring-1 ring-gold/25">
                    <Icon className="h-4 w-4" />
                  </span>
                  {b.label}
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* Aşağı kaydır göstergesi */}
      <div className="animate-fade-up stagger-5 absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/50 lg:flex">
        <span className="text-[0.7rem] uppercase tracking-[0.2em]">Keşfet</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-cream/30 pt-1.5">
          <span className="h-1.5 w-1 animate-bounce rounded-full bg-gold-soft" />
        </span>
      </div>
    </section>
  );
}
