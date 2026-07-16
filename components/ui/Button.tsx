import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-burgundy text-ivory hover:bg-burgundy-dark shadow-lg shadow-burgundy/20",
  secondary:
    "bg-gold text-espresso-dark hover:bg-gold-dark hover:text-ivory shadow-lg shadow-gold/20",
  ghost:
    "bg-transparent text-espresso border border-espresso/30 hover:border-espresso hover:bg-espresso/5",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  icon,
  onClick,
  type = "button",
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  icon?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `focus-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold tracking-wide transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={classes}>
        {icon}
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={classes} type={type}>
      {icon}
      {children}
    </button>
  );
}
