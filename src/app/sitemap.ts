import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Statik export için gerekli (Next 16)
export const dynamic = "force-static";

/** Arama motorları için site haritası → /sitemap.xml */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/hakkimizda", "/hizmetler", "/projeler", "/iletisim"];
  const now = new Date();

  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
