"use client";

import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck, BookOpenText } from "lucide-react";
import { business, whatsappLink } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-32 pb-20 md:pt-40 md:pb-28">
      {/* ambient texture */}
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" style={{ backgroundSize: "18px 18px" }} />
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold-light/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-burgundy/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-2 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-5 inline-block rounded-full border border-gold/40 bg-gold-light/20 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.15em] text-espresso-dark">
            Cakes · Small Chops · Event Catering · Beads
          </span>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-espresso-dark sm:text-5xl md:text-6xl">
            <span className="swash-underline">Every celebration</span>
            <br />
            deserves a table
            <br />
            people remember.
          </h1>

          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-espresso/80 md:text-lg">
            {business.name} handcrafts cakes, small chops, snacks and full event catering
            for weddings, birthdays and corporate events across {business.city} — plus
            handmade bead jewellery for every occasion.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href={whatsappLink("Hi! I'd like to place an order.")}
              variant="primary"
              icon={<MessageCircle className="h-4 w-4" />}
            >
              Order on WhatsApp
            </Button>
            <Button href="#contact" variant="secondary" icon={<CalendarCheck className="h-4 w-4" />}>
              Book an Event
            </Button>
            <Button href="#menu" variant="ghost" icon={<BookOpenText className="h-4 w-4" />}>
              View Menu
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-4 font-body text-xs text-espresso/60">
            <span className="h-px w-10 bg-espresso/20" />
            Trusted for weddings, birthdays, church and corporate events
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="grid grid-cols-5 grid-rows-5 gap-3">
            <PhotoSlot label="Hero: signature cake, close-up" className="col-span-3 row-span-3" aspect="aspect-square" />
            <PhotoSlot label="Small chops platter" className="col-span-2 row-span-2 col-start-4" aspect="aspect-square" />
            <PhotoSlot label="Bead jewellery set" className="col-span-2 row-span-3 col-start-4 row-start-3" aspect="aspect-square" />
            <PhotoSlot label="Dessert table styling" className="col-span-3 row-span-2 row-start-4" aspect="aspect-square" />
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 -left-5 rounded-2xl bg-ivory px-5 py-3 shadow-xl"
          >
            <p className="font-display text-lg font-semibold text-burgundy">250+</p>
            <p className="font-body text-[11px] text-espresso/70">events served</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
