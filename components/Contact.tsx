"use client";

import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin, Send } from "lucide-react";
import { business, whatsappLink } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Contact() {
  const [form, setForm] = useState({ name: "", event: "", date: "", details: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire this up to a real endpoint (e.g. an API route that emails you,
    // or a service like Formspree / Supabase table). For now it opens WhatsApp
    // pre-filled with what the visitor typed, so no inquiry is ever lost.
    const message = `Hi! I'd like to enquire about an event.\nName: ${form.name}\nEvent type: ${form.event}\nDate: ${form.date}\nDetails: ${form.details}`;
    window.open(whatsappLink(message), "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="mx-auto mb-14 max-w-xl text-center">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.15em] text-burgundy">
            Get In Touch
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-espresso-dark md:text-4xl">
            Let's plan your event
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <Reveal className="md:col-span-2 space-y-4">
            <a
              href={whatsappLink("Hi! I'd like to place an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring flex items-center gap-4 rounded-2xl bg-cream p-5 transition-transform hover:-translate-y-0.5"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-burgundy text-ivory">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-espresso-dark">WhatsApp</p>
                <p className="font-body text-xs text-espresso/60">Fastest way to reach us</p>
              </div>
            </a>

            <a href={`tel:${business.whatsappNumber}`} className="focus-ring flex items-center gap-4 rounded-2xl bg-cream p-5 transition-transform hover:-translate-y-0.5">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gold text-espresso-dark">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-espresso-dark">{business.phoneDisplay}</p>
                <p className="font-body text-xs text-espresso/60">Call us directly</p>
              </div>
            </a>

            <a href={`mailto:${business.email}`} className="focus-ring flex items-center gap-4 rounded-2xl bg-cream p-5 transition-transform hover:-translate-y-0.5">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-espresso text-ivory">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-espresso-dark">{business.email}</p>
                <p className="font-body text-xs text-espresso/60">For detailed enquiries</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl bg-cream p-5">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-espresso/10 text-espresso">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-sm font-semibold text-espresso-dark">{business.city}</p>
                <p className="font-body text-xs text-espresso/60">{business.deliveryAreas}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-3">
            <form onSubmit={handleSubmit} className="rounded-2xl bg-cream p-6 md:p-8">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <p className="font-display text-lg font-semibold text-espresso-dark">
                    WhatsApp should be opening now
                  </p>
                  <p className="mt-2 font-body text-sm text-espresso/70">
                    If it didn't, message us directly at {business.phoneDisplay}.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block font-body text-xs font-semibold text-espresso/70">Your name</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="focus-ring w-full rounded-lg border border-espresso/15 bg-ivory px-4 py-2.5 font-body text-sm"
                        placeholder="Amaka Johnson"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block font-body text-xs font-semibold text-espresso/70">Event type</label>
                      <input
                        required
                        value={form.event}
                        onChange={(e) => setForm({ ...form, event: e.target.value })}
                        className="focus-ring w-full rounded-lg border border-espresso/15 bg-ivory px-4 py-2.5 font-body text-sm"
                        placeholder="Wedding, birthday, corporate..."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1.5 block font-body text-xs font-semibold text-espresso/70">Event date</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="focus-ring w-full rounded-lg border border-espresso/15 bg-ivory px-4 py-2.5 font-body text-sm"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block font-body text-xs font-semibold text-espresso/70">Tell us about your event</label>
                    <textarea
                      required
                      rows={4}
                      value={form.details}
                      onChange={(e) => setForm({ ...form, details: e.target.value })}
                      className="focus-ring w-full rounded-lg border border-espresso/15 bg-ivory px-4 py-2.5 font-body text-sm"
                      placeholder="Guest count, theme, what you need..."
                    />
                  </div>
                  <Button type="submit" icon={<Send className="h-4 w-4" />} className="w-full sm:w-auto">
                    Send Enquiry
                  </Button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
