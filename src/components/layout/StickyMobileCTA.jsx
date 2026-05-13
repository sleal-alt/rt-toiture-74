import React from "react";
import { COMPANY } from "@/lib/siteData";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden shadow-2xl">
      {/* Main call button — full width, very prominent */}
      <a
        href={COMPANY.phoneTel}
        className="flex items-center justify-center gap-3 bg-primary text-white py-4 font-bold text-lg w-full hover:bg-primary/90 transition"
      >
        <Phone className="w-5 h-5 animate-pulse" />
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] font-normal opacity-80 uppercase tracking-wider">Appel gratuit — 7j/7</span>
          <span>{COMPANY.phone}</span>
        </span>
      </a>
      {/* Secondary actions */}
      <div className="grid grid-cols-2 divide-x divide-border/30 bg-accent/95 backdrop-blur-md border-t border-border/30">
        <a
          href={COMPANY.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 text-green-400 hover:bg-green-500/10 transition"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-xs font-semibold">WhatsApp</span>
        </a>
        <Link
          to="/devis"
          className="flex items-center justify-center gap-2 py-3 text-secondary hover:bg-secondary/10 transition"
        >
          <FileText className="w-5 h-5" />
          <span className="text-xs font-semibold">Devis Gratuit</span>
        </Link>
      </div>
    </div>
  );
}