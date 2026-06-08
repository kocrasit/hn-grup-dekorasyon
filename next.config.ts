import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
