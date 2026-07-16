"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl font-semibold text-espresso-dark md:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export function SocialProof() {
  return (
    <section className="border-y border-espresso/10 bg-ivory py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 flex items-center justify-center gap-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-gold text-gold" />
          ))}
          <span className="ml-2 font-body text-sm text-espresso/70">Rated by 200+ happy clients</span>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center"
            >
              <Counter value={s.value} suffix={s.suffix} />
              <p className="mt-1 font-body text-xs uppercase tracking-wide text-espresso/60">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
