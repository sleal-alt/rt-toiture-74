import React from "react";
import { COMPANY } from "@/lib/siteData";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-accent/95 backdrop-blur-md border-t border-border shadow-2xl">
      <div className="grid grid-cols-3 divide-x divide-border/30">
        <a
          href={COMPANY.phoneTel}
          className="flex flex-col items-center justify-center py-3 text-primary hover:bg-primary/5 transition"
        >
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-semibold">Appeler</span>
        </a>
        <a
          href={COMPANY.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 text-green-600 hover:bg-green-50 transition"
        >
          <MessageCircle className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-semibold">WhatsApp</span>
        </a>
        <Link
          to="/devis"
          className="flex flex-col items-center justify-center py-3 text-secondary hover:bg-secondary/5 transition"
        >
          <FileText className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-semibold">Devis</span>
        </Link>
      </div>
    </div>
  );
}