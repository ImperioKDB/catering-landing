"use client";

import * as Icons from "lucide-react";
import { services, whatsappLink } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto mb-14 max-w-xl text-center">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-burgundy">
            What we offer
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-espresso-dark md:text-4xl">
            <span className="swash-underline">One kitchen</span>, every occasion
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = (Icons as any)[s.icon] ?? Icons.Sparkles;
            return (
              <Reveal key={s.id} delay={i * 0.06}>
                <a
                  href={whatsappLink(`Hi! I'd like to enquire about ${s.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group focus-ring block h-full overflow-hidden rounded-2xl bg-ivory shadow-sm ring-1 ring-espresso/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <PhotoSlot label={`${s.title} — hero shot`} aspect="aspect-[16/10]" className="rounded-none rounded-t-2xl border-0" />
                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-2.5">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-light/30 text-burgundy">
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                      <h3 className="font-display text-lg font-semibold text-espresso-dark">{s.title}</h3>
                    </div>
                    <p className="font-body text-sm leading-relaxed text-espresso/70">{s.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 font-body text-sm font-semibold text-burgundy">
                      {s.cta}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
