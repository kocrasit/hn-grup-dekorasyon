import { cn } from "@/lib/utils";

/** Bölüm başlığı: küçük altın etiket + büyük serif başlık + opsiyonel açıklama. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="eyebrow flex items-center gap-3">
          {align === "center" && <span className="h-px w-8 bg-gold/50" />}
          {eyebrow}
          <span className="h-px w-8 bg-gold/50" />
        </span>
      )}
      <h2 className="text-ink mt-4 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="text-stone mt-4 text-base leading-relaxed sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
