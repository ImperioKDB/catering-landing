import { ImageIcon } from "lucide-react";

export function PhotoSlot({
  label,
  className = "",
  aspect = "aspect-[4/5]",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-2xl border-2 border-dashed border-gold/40 bg-gradient-to-br from-gold-light/20 via-cream to-espresso/10 flex flex-col items-center justify-center gap-2 text-center p-4 ${className}`}
      role="img"
      aria-label={`Placeholder photo: ${label}`}
    >
      <ImageIcon className="h-6 w-6 text-gold-dark/60" strokeWidth={1.5} />
      <span className="text-xs font-body text-espresso/60 leading-snug">
        Photo needed:
        <br />
        <span className="font-semibold text-espresso/80">{label}</span>
      </span>
    </div>
  );
}
