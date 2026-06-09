import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages için statik dışa aktarım (out/ klasörü).
  output: "export",
  images: {
    // Statik export'ta Next görsel optimizasyonu sunucusu olmadığından
    // görseller olduğu gibi servis edilir.
    unoptimized: true,
    // Demo görselleri Unsplash'tan çekiyoruz. Gerçek görseller public/images
    // altına eklenince bu liste sadeleştirilebilir.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
