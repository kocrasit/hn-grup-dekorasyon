import { Layers, Store, ShieldCheck, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";

const reasons = [
  {
    icon: Layers,
    title: "Zeminden çatıya, tek elden",
    text: "Parke, fayans, çatı, boya ve tadilat — tüm işi kendi ekibimizle, başka taşeron aramadan bitiriyoruz.",
  },
  {
    icon: Store,
    title: "Ev & dükkân fark etmez",
    text: "Konuttan iş yerine, küçük yenilemeden komple tadilata her ölçekte işi aynı titizlikle yapıyoruz.",
  },
  {
    icon: ShieldCheck,
    title: "İşçilik garantisi",
    text: "İşi teslim edince bırakıp gitmiyoruz; arkasında duruyor, sorun olursa yanınızda oluyoruz.",
  },
  {
    icon: Sparkles,
    title: "Net keşif, şeffaf bütçe",
    text: "Ücretsiz keşfe geliyor, sürpriz olmayan net bir fiyat ve takvim veriyoruz.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <Container className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Sol: başlık + büyük deneyim rakamı */}
        <div>
          <SectionHeading
            eyebrow="Neden Biz"
            title="18 yılı aşkın saha deneyimi"
            description="Büyük bir şirketin soğukluğu değil; işini seven, sözünün arkasında duran bir ekibin yakınlığı. Yıllardır biriktirdiğimiz tecrübeyi her işe taşıyoruz."
          />

          <div className="mt-10 inline-flex items-baseline gap-4 rounded-2xl border border-sand bg-cream px-8 py-6 shadow-soft">
            <span className="font-serif text-6xl font-semibold text-gold-dark lg:text-7xl">
              {site.expertiseYears}
            </span>
            <span className="max-w-[8rem] text-sm uppercase tracking-wider text-stone">
              Yıl Sektör Deneyimi
            </span>
          </div>
        </div>

        {/* Sağ: nedenler */}
        <div className="grid gap-5 sm:grid-cols-2">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="group rounded-2xl border border-sand bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-lift"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-espresso/5 text-gold-dark transition-colors duration-300 group-hover:bg-gold group-hover:text-cream">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg text-ink">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">
                  {r.text}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
