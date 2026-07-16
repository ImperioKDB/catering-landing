"use client";

import * as Icons from "lucide-react";
import { whyChooseUs } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

export function WhyChooseUs() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-2">
        <Reveal>
          <PhotoSlot label="Team preparing an order / plating" aspect="aspect-[4/5]" />
        </Reveal>

        <div>
          <Reveal>
            <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-burgundy">
              Why Choose Us
            </span>
            <h2 className="mt-3 mb-8 font-display text-3xl font-semibold text-espresso-dark md:text-4xl">
              Good food is a promise, <span className="swash-underline">not a guess</span>
            </h2>
          </Reveal>

          <div className="space-y-6">
            {whyChooseUs.map((item, i) => {
              const Icon = (Icons as any)[item.icon] ?? Icons.Sparkles;
              return (
                <Reveal key={item.title} delay={i * 0.07}>
                  <div className="flex gap-4">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-burgundy/10 text-burgundy">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-espresso-dark">{item.title}</h3>
                      <p className="mt-1 font-body text-sm leading-relaxed text-espresso/70">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
