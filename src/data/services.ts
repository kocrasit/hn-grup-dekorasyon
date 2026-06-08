import {
  Hammer,
  Layers,
  Grid2x2,
  Home,
  PaintRoller,
  Compass,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  image: string;
  features: string[];
};

/** Demo görseller Unsplash'tan. Gerçek çalışmalarınızla değiştirin. */
export const services: Service[] = [
  {
    slug: "anahtar-teslim-tadilat",
    title: "Anahtar Teslim Tadilat",
    short: "Zeminden çatıya, ev ve dükkân tadilatını tek elden teslim ediyoruz.",
    description:
      "Yıkımdan son temizliğe kadar tüm süreci biz yönetiyoruz. Parke, fayans, boya, elektrik, tesisat ve çatı dahil her işi kendi ekibimizle, tek bir çatı altında topluyoruz. Siz sadece sonucun keyfini çıkarın; takvimi ve sorumluluğu biz üstleniyoruz.",
    icon: Hammer,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Ev ve dükkân için komple tadilat",
      "Tek elden proje yönetimi",
      "Net takvim ve şeffaf bütçe",
      "Garantili işçilik",
    ],
  },
  {
    slug: "parke-zemin-kaplama",
    title: "Parke & Zemin Kaplama",
    short: "Laminat, lamine ve ahşap parkeden zemin kaplamaya temiz işçilik.",
    description:
      "Laminat parke, lamine parke ve ahşap zemin uygulamalarını düz, gıcırtısız ve uzun ömürlü şekilde döşüyoruz. Zemin hazırlığından süpürgeliğe kadar her detayı titizlikle tamamlıyor, ev ve dükkânınıza sıcak ve dayanıklı bir zemin kazandırıyoruz.",
    icon: Layers,
    image:
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Laminat, lamine ve ahşap parke",
      "Zemin düzeltme ve hazırlık",
      "Süpürgelik ve geçiş profilleri",
      "Eski zemin sökümü",
    ],
  },
  {
    slug: "fayans-seramik",
    title: "Fayans & Seramik",
    short: "Banyo, mutfak ve ıslak hacimlerde kusursuz fayans-seramik işçiliği.",
    description:
      "Duvar ve zemin fayansından büyük ebat seramiğe kadar her uygulamayı şaşmaz derz ve düzgün hizalarla yapıyoruz. Su yalıtımını ihmal etmeden, banyo ve mutfaklarınızı hem dayanıklı hem de göz alıcı hale getiriyoruz.",
    icon: Grid2x2,
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Duvar ve zemin fayansı",
      "Büyük ebat seramik uygulama",
      "Su yalıtımı ve şap",
      "Banyo & mutfak yenileme",
    ],
  },
  {
    slug: "cati-su-yalitimi",
    title: "Çatı & Su Yalıtımı",
    short: "Çatı yapımı, onarımı ve su yalıtımıyla evinizi yukarıdan koruyoruz.",
    description:
      "Yeni çatı yapımından mevcut çatının onarımına, kiremit yenilemeden su yalıtımına kadar tüm çatı işlerini üstleniyoruz. Akıtma ve nem sorunlarını kökünden çözüp, yapınızı yıllarca koruyacak sağlam bir çatı bırakıyoruz.",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Çatı yapımı ve onarımı",
      "Kiremit ve örtü yenileme",
      "Su yalıtımı ve izolasyon",
      "Akıtma ve nem çözümleri",
    ],
  },
  {
    slug: "boya-alci-dekorasyon",
    title: "Boya, Alçı & Dekorasyon",
    short: "İç-dış boya, alçı ve dekoratif dokunuşlarla mekânı tazeliyoruz.",
    description:
      "İç ve dış cephe boyası, alçı, alçıpan ve kartonpiyer işleriyle mekânlarınıza temiz, pürüzsüz bir görünüm kazandırıyoruz. Renk seçiminden son rötuşa kadar düzenli ve tertemiz çalışıyor, evinizi gün gibi parlatıyoruz.",
    icon: PaintRoller,
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    features: [
      "İç ve dış cephe boyası",
      "Alçı, alçıpan ve kartonpiyer",
      "Asma tavan ve bölme duvar",
      "Renk ve malzeme danışmanlığı",
    ],
  },
  {
    slug: "mimari-danismanlik",
    title: "Mimari Danışmanlık",
    short: "18 yılı aşkın saha deneyimiyle doğru kararlar için rehberlik.",
    description:
      "Sektörde 18 yılı aşkın saha deneyimimizle, işe başlamadan önce sizi doğru yönlendiriyoruz. Mekânın değerlendirilmesi, malzeme seçimi ve bütçe planlamasında uzman görüşüyle yatırımınızı en doğru şekilde yönetmenize yardımcı oluyoruz.",
    icon: Compass,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    features: [
      "18+ yıl sektör uzmanlığı",
      "Mekân değerlendirme ve planlama",
      "Malzeme ve bütçe danışmanlığı",
      "İş sırası ve takvim planı",
    ],
  },
];

/** Çalışma sürecimiz — Hizmetler sayfasında gösterilir. */
export const processSteps = [
  {
    no: "01",
    title: "Keşif & Dinleme",
    text: "Mekânınızı yerinde inceliyor, ihtiyaç ve beklentilerinizi dinliyoruz.",
  },
  {
    no: "02",
    title: "Net Teklif",
    text: "İşin kapsamını çıkarıp, sürpriz olmayan şeffaf bir fiyat ve takvim sunuyoruz.",
  },
  {
    no: "03",
    title: "Uygulama",
    text: "Kendi ekibimizle, planladığımız takvimde, temiz ve titiz işçilikle hayata geçiriyoruz.",
  },
  {
    no: "04",
    title: "Teslim & Garanti",
    text: "Son kontroller ardından anahtar teslim ediyor, işimizin arkasında duruyoruz.",
  },
];
