import type { Metadata } from "next";
import Image from "next/image";
import {
  ShieldCheck,
  Gem,
  Clock,
  HeartHandshake,
  Sparkles,
  Award,
  Target,
  Eye,
  Quote,
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/home/CtaBanner";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "HN Grup Dekorasyon; parke, fayans, çatı, boya ve anahtar teslim tadilatta 18 yılı aşkın saha deneyimine sahip bir ekiptir. Hikâyemizi, değerlerimizi ve çalışma şeklimizi keşfedin.",
  alternates: { canonical: "/hakkimizda" },
};

const values = [
  {
    icon: Gem,
    title: "Kalite & İşçilik",
    text: "Seçtiğimiz malzemeden uyguladığımız son detaya kadar en yüksek standartları gözetiriz.",
  },
  {
    icon: ShieldCheck,
    title: "Şeffaflık",
    text: "Net bütçe, açık iletişim ve sürpriz olmayan bir süreç. Her aşamada bilgilendiriliriz.",
  },
  {
    icon: Clock,
    title: "Zamanında Teslim",
    text: "Söz verdiğimiz takvime sadık kalır, projeyi planladığımız sürede teslim ederiz.",
  },
  {
    icon: HeartHandshake,
    title: "Müşteri Odaklılık",
    text: "Her proje size özeldir. İhtiyaç ve zevkinizi merkeze alarak tasarlarız.",
  },
  {
    icon: Sparkles,
    title: "Estetik Anlayışı",
    text: "Fonksiyonu ve güzelliği dengeleyen, zamansız ve şık mekânlar yaratırız.",
  },
  {
    icon: Award,
    title: "Garanti & Güven",
    text: "Teslimden sonra da yanınızdayız. İşimizin arkasında dururuz.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hakkımızda"
        title="İşini iyi yapan bir ekip"
        description="HN Grup Dekorasyon olarak; parke, fayans, çatı ve boyadan komple tadilata, 18 yılı aşkın saha deneyimiyle ev ve dükkânlarınızı zeminden çatıya yeniliyoruz."
        breadcrumb={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hakkımızda", href: "/hakkimizda" },
        ]}
      />

      {/* Hikâye */}
      <section className="py-14 sm:py-16 lg:py-24">
        <Container className="grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
                alt="HN Grup Dekorasyon tasarım çalışması"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* küçük üst üste görsel */}
            <div className="absolute -bottom-8 -right-4 hidden aspect-square w-44 overflow-hidden rounded-2xl border-4 border-cream shadow-lift sm:block lg:w-52">
              <Image
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=600&q=80"
                alt="Detaylı iç mekan tasarımı"
                fill
                sizes="13rem"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Hikâyemiz"
              title="Bir ustanın tutkusuyla başlayan iş"
            />
            <div className="mt-6 space-y-4 leading-relaxed text-stone">
              <p>
                {site.name}, {site.founder.name}'ın sahada 18 yılı aşkın sürede
                biriktirdiği işçilik tecrübesiyle doğdu. Parke, fayans, çatı,
                boya ve komple tadilatta öğrendiğimiz her şeyi, bugün güvendiğimiz
                uzman bir ekiple birlikte işinize taşıyoruz.
              </p>
              <p>
                Bizim için bir iş, yalnızca bir mekânı yenilemek değil; orada
                yaşayan ve çalışan insanların hayatını kolaylaştırmaktır. Bu
                yüzden her işe önce dinleyerek başlıyor, ne istediğinizi doğru
                anlamadan başlamıyoruz.
              </p>
              <p>
                Yıkımdan son temizliğe kadar tüm süreci tek elden yönetiyoruz.
                Büyük bir şirketin soğukluğu değil; işini seven bir ekibin
                yakınlığı ve sözünün arkasında durması — farkımız burada.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Kurucu — "reklam açısı": solda söz, sağda bize bakan büyük portre */}
      <section className="relative overflow-hidden border-y border-sand bg-espresso">
        {/* arka plan altın ışıltı */}
        <div className="pointer-events-none absolute right-0 top-1/2 h-[40rem] w-[40rem] -translate-y-1/2 translate-x-1/4 rounded-full bg-gold/10 blur-[140px]" />

        <Container className="relative grid items-end gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Sol: söz */}
          <div className="order-2 py-12 lg:order-1 lg:py-24">
            <span className="eyebrow flex items-center gap-3 text-gold-soft">
              Kurucumuzdan
              <span className="h-px w-8 bg-gold-soft/50" />
            </span>
            <Quote className="mt-6 h-9 w-9 text-gold/40" />
            <p className="mt-4 font-serif text-2xl leading-snug text-cream sm:text-3xl lg:text-[2.1rem] lg:leading-[1.3]">
              {site.founder.quote}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-10 bg-gold-soft/60" />
              <div>
                <div className="font-serif text-xl text-gold-soft">
                  {site.founder.name}
                </div>
                <div className="text-xs uppercase tracking-wider text-cream/55">
                  {site.founder.role}
                </div>
              </div>
            </div>
          </div>

          {/* Sağ: büyük portre — kutusuz, kenarları zemine karışıyor, alttan taşıyor */}
          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="relative aspect-[4/5] w-72 self-end sm:w-80 lg:h-[34rem] lg:w-[28rem]">
              <Image
                src="/images/team/huseyin-yilmaz.png"
                alt={`${site.founder.name}, ${site.name} kurucusu`}
                fill
                priority
                sizes="(max-width:1024px) 20rem, 28rem"
                className="object-cover object-top [mask-image:radial-gradient(115%_115%_at_50%_35%,black_60%,transparent_85%)]"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Değerler */}
      <section className="py-16 sm:py-20 lg:py-32">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Çalışma Prensiplerimiz"
            title="Bizi biz yapan değerler"
            description="Her işe taşıdığımız ilkeler, kalıcı güvenin temelini oluşturur."
            className="mx-auto"
          />

          <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="group relative overflow-hidden rounded-2xl border border-sand bg-cream p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-lift"
                >
                  {/* üst kenarda beliren altın çizgi */}
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold-soft to-gold transition-transform duration-300 group-hover:scale-x-100" />
                  <span className="flex h-13 w-13 items-center justify-center rounded-xl bg-espresso/5 text-gold-dark transition-all duration-300 group-hover:scale-105 group-hover:bg-gold group-hover:text-cream">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl text-ink">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">
                    {v.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Vizyon & Misyon */}
      <section className="pb-16 sm:pb-20 lg:pb-32">
        <Container className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-espresso p-10 lg:p-12">
            <span className="flex h-13 w-13 items-center justify-center rounded-xl bg-gold/15 text-gold-soft">
              <Target className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-serif text-2xl text-cream sm:text-3xl">
              Misyonumuz
            </h3>
            <p className="mt-4 leading-relaxed text-cream/70">
              Müşterilerimizin yaşam ve çalışma alanlarını; estetik, işlevsellik
              ve kaliteli işçilikle, bütçesine ve zamanına saygı duyarak yeniden
              tasarlamak. Her projede güven veren, şeffaf ve keyifli bir deneyim
              sunmak.
            </p>
          </div>

          <div className="rounded-3xl border border-sand bg-cream p-10 shadow-soft lg:p-12">
            <span className="flex h-13 w-13 items-center justify-center rounded-xl bg-gold/10 text-gold-dark">
              <Eye className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-serif text-2xl text-ink sm:text-3xl">
              Vizyonumuz
            </h3>
            <p className="mt-4 leading-relaxed text-stone">
              Türkiye'de iç mimarlık ve anahtar teslim tadilat denildiğinde akla
              gelen, güvenilirliği ve tasarım kalitesiyle öne çıkan referans
              markalardan biri olmak; her teslim ettiğimiz projeyle bir sonrakine
              ilham vermek.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  );
}
