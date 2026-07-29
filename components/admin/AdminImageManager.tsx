"use client";

import { useState } from "react";
import Image from "next/image";
import { Upload, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import type { ImageSlot } from "@/lib/imageSlots";

type Status = "idle" | "uploading" | "done" | "error";

function SlotRow({ slot, url, onUploaded }: { slot: ImageSlot; url?: string; onUploaded: (key: string, url: string) => void }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleFile = async (file: File) => {
    setStatus("uploading");
    setError(null);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("slotKey", slot.key);

    try {
      const res = await fetch("/api/admin/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Upload failed.");
      onUploaded(slot.key, data.url);
      setStatus("done");
    } catch (e: any) {
      setStatus("error");
      setError(e.message || "Something went wrong.");
    }
  };

  return (
    <div className="flex items-center gap-4 rounded-xl bg-ivory p-4">
      <div className="relative h-16 w-16 flex-none overflow-hidden rounded-lg bg-cream ring-1 ring-espresso/10">
        {url ? (
          <Image src={url} alt={slot.label} fill className="object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-espresso/30">
            <Upload className="h-5 w-5" />
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate font-body text-sm font-medium text-espresso-dark">{slot.label}</p>
        <p className="font-body text-[11px] text-espresso/50">{slot.key}.jpg</p>
        {error && <p className="mt-0.5 font-body text-[11px] text-burgundy">{error}</p>}
      </div>

      <label className="focus-ring flex-none cursor-pointer rounded-full bg-espresso/5 px-4 py-2 font-body text-xs font-semibold text-espresso-dark hover:bg-espresso/10">
        <input
          type="file"
          accept="image/jpeg,image/png,image/webp"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFile(file);
            e.target.value = "";
          }}
        />
        <span className="flex items-center gap-1.5">
          {status === "uploading" && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
          {status === "done" && <CheckCircle2 className="h-3.5 w-3.5 text-green-700" />}
          {status === "error" && <AlertCircle className="h-3.5 w-3.5 text-burgundy" />}
          {status === "uploading" ? "Uploading..." : url ? "Replace" : "Upload"}
        </span>
      </label>
    </div>
  );
}

export function AdminImageManager({
  slots,
  initialImages,
}: {
  slots: ImageSlot[];
  initialImages: Record<string, string>;
}) {
  const [images, setImages] = useState(initialImages);
  const sections = Array.from(new Set(slots.map((s) => s.section)));

  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <div key={section}>
          <h2 className="mb-3 font-display text-lg font-semibold text-espresso-dark">{section}</h2>
          <div className="space-y-2">
            {slots
              .filter((s) => s.section === section)
              .map((slot) => (
                <SlotRow
                  key={slot.key}
                  slot={slot}
                  url={images[slot.key]}
                  onUploaded={(key, url) => setImages((prev) => ({ ...prev, [key]: url }))}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
