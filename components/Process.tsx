"use client";

import * as Icons from "lucide-react";
import { processSteps } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto mb-14 max-w-xl text-center">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-burgundy">
            How It Works
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-espresso-dark md:text-4xl">
            From message to table, in four steps
          </h2>
        </Reveal>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-espresso/15 md:block" />
          {processSteps.map((s, i) => {
            const Icon = (Icons as any)[s.icon] ?? Icons.Sparkles;
            return (
              <Reveal key={s.step} delay={i * 0.1} className="relative text-center">
                <div className="relative z-10 mx-auto mb-4 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-ivory ring-4 ring-cream shadow-sm">
                  <Icon className="h-6 w-6 text-burgundy" strokeWidth={1.75} />
                </div>
                <span className="font-display text-xs font-semibold text-gold-dark">{s.step}</span>
                <h3 className="mt-1 font-display text-lg font-semibold text-espresso-dark">{s.title}</h3>
                <p className="mx-auto mt-2 max-w-[220px] font-body text-sm leading-relaxed text-espresso/70">
                  {s.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
