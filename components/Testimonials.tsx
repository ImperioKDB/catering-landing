"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const t = testimonials[index];

  return (
    <section className="bg-burgundy py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <Reveal>
          <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-gold-light">
            What Clients Say
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ivory md:text-4xl">
            Real events, real feedback
          </h2>
        </Reveal>

        <div
          className="relative mt-12"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="mx-auto mb-4 h-8 w-8 text-gold-light/50" />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
            >
              <div className="mb-4 flex justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold-light text-gold-light" />
                ))}
              </div>
              <p className="mx-auto max-w-xl font-display text-xl leading-relaxed text-ivory md:text-2xl">
                "{t.quote}"
              </p>
              <p className="mt-6 font-body text-sm font-semibold text-gold-light">{t.name}</p>
              <p className="font-body text-xs text-ivory/60">{t.role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
              className="focus-ring rounded-full p-2 text-ivory/70 hover:text-ivory"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-gold-light" : "bg-ivory/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
              aria-label="Next testimonial"
              className="focus-ring rounded-full p-2 text-ivory/70 hover:text-ivory"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
