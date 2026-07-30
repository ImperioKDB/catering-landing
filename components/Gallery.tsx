"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems, galleryCategories } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

export function Gallery() {
  const [category, setCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered =
    category === "All" ? galleryItems : galleryItems.filter((g) => g.category === category);

  const openAt = (id: number) => {
    const idx = filtered.findIndex((g) => g.id === id);
    setActiveIndex(idx);
  };

  const close = () => setActiveIndex(null);
  const next = () => setActiveIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  const prev = () => setActiveIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));

  return (
    <section id="gallery" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto mb-10 max-w-xl text-center">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-burgundy">
            Featured Work
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-espresso-dark md:text-4xl">
            A taste of what we've made
          </h2>
        </Reveal>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`focus-ring rounded-full px-4 py-1.5 font-body text-xs font-semibold transition-colors ${
                category === c
                  ? "bg-burgundy text-ivory"
                  : "bg-cream text-espresso/70 hover:bg-gold-light/30"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-2 gap-4 md:columns-3">
          {filtered.map((item, i) => (
            <button
              key={item.id}
              onClick={() => openAt(item.id)}
              className="focus-ring mb-4 block w-full break-inside-avoid"
            >
              <div className="group relative overflow-hidden rounded-xl">
                <PhotoSlot
                  label={item.label}
                  aspect={i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}
                  className="transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-espresso-dark/70 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="font-body text-xs font-medium text-ivory">{item.label}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso-dark/90 p-6"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close lightbox"
              className="focus-ring absolute right-5 top-5 rounded-full bg-ivory/10 p-2 text-ivory hover:bg-ivory/20"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
              className="focus-ring absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-ivory/10 p-2 text-ivory hover:bg-ivory/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
              className="focus-ring absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-ivory/10 p-2 text-ivory hover:bg-ivory/20"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md"
            >
              <PhotoSlot label={filtered[activeIndex].label} aspect="aspect-[4/5]" className="border-ivory/40" />
              <p className="mt-3 text-center font-body text-sm text-ivory/80">{filtered[activeIndex].label}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
