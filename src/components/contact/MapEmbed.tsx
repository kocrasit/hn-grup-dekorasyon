import { site } from "@/lib/site";

/**
 * Anahtarsız Google Maps embed — API anahtarı gerektirmez.
 * Gerçek konum için site.ts içindeki `mapsQuery` değerini güncelle
 * (ör. tam adres veya "enlem,boylam").
 */
export default function MapEmbed() {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(
    site.mapsQuery,
  )}&output=embed`;

  return (
    <div className="relative h-[22rem] w-full overflow-hidden border-y border-sand lg:h-[28rem]">
      <iframe
        title={`${site.name} konum haritası`}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full grayscale-[0.2]"
        allowFullScreen
      />
    </div>
  );
}
