"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/data";

export function StickyWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLink("Hi! I'd like to place an order.")}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.25 }}
          className="focus-ring fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 text-ivory shadow-xl shadow-[#25D366]/30 md:bottom-7 md:right-7"
          aria-label="Order on WhatsApp"
        >
          <MessageCircle className="h-5 w-5 flex-none" fill="white" strokeWidth={0} />
          <span className="hidden font-body text-sm font-semibold sm:inline">Order Now</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
