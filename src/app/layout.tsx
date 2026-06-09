import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "parke döşeme",
    "fayans seramik",
    "çatı yapımı",
    "su yalıtımı",
    "anahtar teslim tadilat",
    "boya badana",
    "ev tadilatı",
    "dükkan tadilatı",
    "İstanbul tadilat",
    "Tuzla tadilat",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    images: [
      {
        url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: `${site.name} — zeminden çatıya tadilat`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&h=630&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

// Google'ın işletmeyi tanıması için yapısal veri (LocalBusiness şeması)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "HomeAndConstructionBusiness"],
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phoneHref.replace("tel:", ""),
  email: site.email,
  image: `${site.url}/images/team/huseyin-yilmaz.png`,
  priceRange: "₺₺",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Aydınlı Mah. Aydınlı Yolu Cad. Beyoğlu Sanayi Sitesi C Blok No: 34",
    addressLocality: "Tuzla",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  areaServed: [
    { "@type": "City", name: "İstanbul" },
    { "@type": "AdministrativeArea", name: "Tuzla" },
    { "@type": "AdministrativeArea", name: "Pendik" },
    { "@type": "AdministrativeArea", name: "Kartal" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  knowsAbout: [
    "Parke ve zemin kaplama",
    "Fayans ve seramik",
    "Çatı ve su yalıtımı",
    "Boya, alçı ve dekorasyon",
    "Anahtar teslim tadilat",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="bg-cream text-ink min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
