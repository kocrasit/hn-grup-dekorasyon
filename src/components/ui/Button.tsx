import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2";

const sizes = {
  md: "px-6 py-3",
  lg: "px-8 py-4 text-[0.95rem]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-cream hover:bg-gold-dark shadow-soft hover:shadow-lift",
  outline:
    "border border-ink/20 text-ink hover:border-gold hover:text-gold-dark",
  ghost: "text-ink hover:text-gold-dark",
  light:
    "bg-cream/95 text-ink hover:bg-cream shadow-soft hover:shadow-lift",
};

type Props = {
  href?: string;
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: Props) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if (href) {
    const external = href.startsWith("http") || href.startsWith("tel:");
    if (external) {
      return (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
