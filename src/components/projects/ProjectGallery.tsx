"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { Plus, X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  projects,
  projectCategories,
  type ProjectCategory,
} from "@/data/projects";

type Filter = "Tümü" | ProjectCategory;

export default function ProjectGallery() {
  const [filter, setFilter] = useState<Filter>("Tümü");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible =
    filter === "Tümü"
      ? projects
      : projects.filter((p) => p.category === filter);

  const close = useCallback(() => setLightbox(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setLightbox((i) =>
        i === null ? i : (i + dir + visible.length) % visible.length,
      ),
    [visible.length],
  );

  // Klavye ile lightbox kontrolü + arka plan kaydırmasını kilitle
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, step]);

  const active = lightbox !== null ? visible[lightbox] : null;

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Filtre çubuğu */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {projectCategories.map((cat) => {
            const isActive = filter === cat;
            const count =
              cat === "Tümü"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300",
                  isActive
                    ? "border-gold bg-gold text-cream shadow-soft"
                    : "border-sand bg-cream text-ink/70 hover:border-gold/50 hover:text-gold-dark",
                )}
              >
                {cat}
                <span
                  className={cn(
                    "ml-2 text-xs",
                    isActive ? "text-cream/70" : "text-stone/60",
                  )}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Galeri ızgarası — öne çıkanlar büyük (bento), filtre değişince yeniden süzülür */}
        <div
          key={filter}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-[14rem] lg:grid-flow-row-dense lg:grid-cols-3"
        >
          {visible.map((project, i) => (
            <button
              key={project.slug}
              onClick={() => setLightbox(i)}
              style={{ animationDelay: `${i * 60}ms` }}
              className={cn(
                "group animate-fade-up relative block h-72 w-full overflow-hidden rounded-2xl text-left lg:h-full",
                project.featured && "lg:row-span-2",
              )}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Öne çıkan etiketi */}
              {project.featured && (
                <span className="absolute left-4 top-4 rounded-full bg-gold/90 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-wider text-cream shadow-soft backdrop-blur">
                  Öne çıkan
                </span>
              )}

              {/* Büyüteç ikonu */}
              <span className="absolute right-4 top-4 flex h-10 w-10 -translate-y-2 items-center justify-center rounded-full bg-cream/95 text-ink opacity-0 shadow-soft transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <Plus className="h-5 w-5" />
              </span>

              <div className="absolute inset-x-0 bottom-0 translate-y-1 p-6 transition-transform duration-300 group-hover:translate-y-0">
                <span className="eyebrow text-gold-soft">{project.category}</span>
                <h3 className="mt-1.5 font-serif text-xl text-cream">
                  {project.title}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-cream/70">
                  <MapPin className="h-3.5 w-3.5" />
                  {project.location} · {project.year}
                </p>
              </div>
            </button>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="py-20 text-center text-stone">
            Bu kategoride henüz proje bulunmuyor.
          </p>
        )}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Kapat"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Önceki"
            className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:left-8"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Sonraki"
            className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:right-8"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <figure
            className="w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
              <Image
                src={active.image}
                alt={active.title}
                fill
                sizes="(max-width:1024px) 100vw, 900px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 flex items-center justify-between text-cream">
              <div>
                <span className="eyebrow text-gold-soft">{active.category}</span>
                <h3 className="mt-1 font-serif text-2xl">{active.title}</h3>
                <p className="mt-1 text-sm text-cream/70">
                  {active.location} · {active.year}
                </p>
              </div>
              <span className="shrink-0 text-sm text-cream/50">
                {(lightbox ?? 0) + 1} / {visible.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
