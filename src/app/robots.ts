import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Statik export için gerekli (Next 16)
export const dynamic = "force-static";

/** Arama motoru tarayıcı kuralları → /robots.txt */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
