import Image from "next/image";
import { PhotoSlot } from "./PhotoSlot";

export function SlotImage({
  slotKey,
  label,
  images,
  aspect = "aspect-[4/5]",
  className = "",
}: {
  slotKey: string;
  label: string;
  images: Record<string, string>;
  aspect?: string;
  className?: string;
}) {
  const url = images[slotKey];

  if (!url) {
    return <PhotoSlot label={label} aspect={aspect} className={className} />;
  }

  return (
    <div className={`relative ${aspect} w-full overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={url}
        alt={label}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}
