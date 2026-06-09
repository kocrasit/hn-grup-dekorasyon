/**
 * Site genel yapılandırması — tek kaynaktan yönetim.
 * Telefon, adres, sosyal medya gibi bilgileri buradan güncelle.
 */
export const site = {
  name: "HN Grup Dekorasyon",
  shortName: "HN Grup",
  tagline: "Parke · Fayans · Çatı · Anahtar Teslim Tadilat",
  description:
    "HN Grup Dekorasyon; ev ve dükkânlarınız için zeminden çatıya parke, fayans, çatı, boya ve anahtar teslim tadilat işleri yapar. 18 yılı aşkın saha deneyimiyle, tüm süreci tek elden yönetiyoruz.",
  url: "https://hngrupdekorasyon.com",

  // Gerçek deneyim — site genelinde güven göstergesi
  expertiseYears: "18+",

  // İletişim
  phone: "0552 259 55 53",
  phoneHref: "tel:+905522595553",
  whatsapp: "905522595553", // ülke kodu + numara, sadece rakam
  email: "hngrupdekorasyon@gmail.com",
  address:
    "Aydınlı Mah. Aydınlı Yolu Cad. Beyoğlu Sanayi Sitesi C Blok No: 34, Tuzla / İstanbul",
  mapsQuery:
    "Aydınlı Mah. Aydınlı Yolu Cad. Beyoğlu Sanayi Sitesi C Blok No:34 Tuzla İstanbul",

  // Gerçek hesaplar açılınca buraya tam adresi yazın (boş kalırsa sitede gösterilmez)
  social: {
    instagram: "",
    facebook: "",
  },

  // Kurucu — Hakkımızda'da kişisel dokunuş için
  founder: {
    name: "Hüseyin Yılmaz",
    role: "Kurucu & Uygulama Sorumlusu",
    quote:
      "Her işe kendi evimmiş gibi başlıyorum. Müşterimle anlaştığım rakam da, söz verdiğim gün de değişmez. İşin sonunda gülen bir yüz görmek, bizim için en büyük referanstır.",
  },
} as const;

export const nav = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Projeler", href: "/projeler" },
  { label: "İletişim", href: "/iletisim" },
] as const;

/** Hazır WhatsApp mesajı ile sohbet linki */
export function whatsappLink(message = "Merhaba, projem hakkında bilgi almak istiyorum.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
