import { Instagram, MessageCircle } from "lucide-react";
import { business, whatsappLink } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-espresso-dark py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 text-center">
        <p className="font-display text-xl font-semibold text-ivory">{business.name}</p>
        <p className="max-w-sm font-body text-xs text-ivory/50">{business.tagline}</p>
        <div className="flex gap-4">
          <a href={whatsappLink("Hi!")} target="_blank" rel="noopener noreferrer" className="focus-ring rounded-full bg-ivory/10 p-2.5 text-ivory hover:bg-ivory/20">
            <MessageCircle className="h-4 w-4" />
          </a>
          <a href={business.instagram} target="_blank" rel="noopener noreferrer" className="focus-ring rounded-full bg-ivory/10 p-2.5 text-ivory hover:bg-ivory/20">
            <Instagram className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-4 font-body text-[11px] text-ivory/30">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
