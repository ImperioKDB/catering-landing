"use client";

import { useState } from "react";
import { menuCategories, whatsappLink } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";

export function MenuPreview() {
  const [active, setActive] = useState(menuCategories[0].id);
  const activeCategory = menuCategories.find((c) => c.id === active)!;

  return (
    <section id="menu" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <Reveal className="mx-auto mb-10 max-w-xl text-center">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-burgundy">
            Menu Preview
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-espresso-dark md:text-4xl">
            A sample of what's on offer
          </h2>
          <p className="mt-3 font-body text-sm text-espresso/60">
            Prices are starting points — every order is quoted exactly to your event.
          </p>
        </Reveal>

        <div className="mb-8 flex justify-center gap-2">
          {menuCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`focus-ring rounded-full px-5 py-2 font-body text-sm font-semibold transition-colors ${
                active === c.id ? "bg-burgundy text-ivory" : "bg-cream text-espresso/70 hover:bg-gold-light/30"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="divide-y divide-espresso/10 rounded-2xl bg-cream ring-1 ring-espresso/5">
          {activeCategory.items.map((item) => (
            <div key={item.name} className="flex items-center justify-between gap-4 px-6 py-4">
              <div>
                <p className="font-display text-base font-semibold text-espresso-dark">{item.name}</p>
                <p className="font-body text-xs text-espresso/60">{item.note}</p>
              </div>
              <p className="whitespace-nowrap font-body text-sm font-semibold text-burgundy">{item.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Button href={whatsappLink("Hi! Can I get the full menu and pricing?")} variant="primary" icon={<MessageCircle className="h-4 w-4" />}>
            Get Full Menu on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
