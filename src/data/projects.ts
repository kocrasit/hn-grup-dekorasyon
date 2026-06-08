export type ProjectCategory =
  | "Konut"
  | "Dükkan & İş Yeri"
  | "Banyo & Mutfak"
  | "Tadilat";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  image: string;
  featured?: boolean;
};

/** Demo görseller Unsplash'tan. Gerçek proje fotoğraflarıyla değiştirin. */
export const projects: Project[] = [
  {
    slug: "modern-salon-bagdat",
    title: "Modern Minimal Salon",
    category: "Konut",
    location: "Kadıköy, İstanbul",
    year: 2025,
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    slug: "sicak-yatak-odasi",
    title: "Sıcak Tonlu Yatak Odası",
    category: "Konut",
    location: "Beşiktaş, İstanbul",
    year: 2025,
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    slug: "dukkan-ic-yenileme",
    title: "Dükkan İç Mekân Yenileme",
    category: "Dükkan & İş Yeri",
    location: "Maslak, İstanbul",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    slug: "luks-mutfak-tasarimi",
    title: "Ada Mutfak Yenileme",
    category: "Banyo & Mutfak",
    location: "Ataşehir, İstanbul",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    slug: "spa-banyo",
    title: "Komple Banyo Yenileme",
    category: "Banyo & Mutfak",
    location: "Bakırköy, İstanbul",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "komple-daire-tadilat",
    title: "Komple Daire Tadilatı",
    category: "Tadilat",
    location: "Şişli, İstanbul",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    slug: "ferah-oturma-alani",
    title: "Ferah Oturma Alanı",
    category: "Konut",
    location: "Üsküdar, İstanbul",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "butik-dukkan-tadilat",
    title: "İş Yeri Komple Tadilat",
    category: "Dükkan & İş Yeri",
    location: "Levent, İstanbul",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1604709177225-055f99402ea3?auto=format&fit=crop&w=1200&q=80",
  },
];

export const projectCategories: ("Tümü" | ProjectCategory)[] = [
  "Tümü",
  "Konut",
  "Dükkan & İş Yeri",
  "Banyo & Mutfak",
  "Tadilat",
];
