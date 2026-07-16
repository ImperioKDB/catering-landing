"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { business, whatsappLink } from "@/lib/data";
import { Button } from "@/components/ui/Button";

const links = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#menu", label: "Menu" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-cream/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-display text-xl font-semibold text-espresso-dark">
          {business.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm font-medium text-espresso/80 transition-colors hover:text-burgundy focus-ring"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            href={whatsappLink("Hi! I'd like to place an order.")}
            variant="primary"
            icon={<MessageCircle className="h-4 w-4" />}
            className="!px-5 !py-2.5 !text-xs"
          >
            Order on WhatsApp
          </Button>
        </div>

        <button
          className="focus-ring rounded-md p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-espresso/10 bg-cream px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-body text-sm font-medium text-espresso/80"
              >
                {l.label}
              </a>
            ))}
            <Button
              href={whatsappLink("Hi! I'd like to place an order.")}
              variant="primary"
              icon={<MessageCircle className="h-4 w-4" />}
              className="w-full"
            >
              Order on WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
