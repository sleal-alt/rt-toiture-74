import React from "react";
import { Shield, Check } from "lucide-react";

export default function RGEBadge() {
  return (
    <section className="py-14 lg:py-20 bg-accent">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-32 h-32 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 border-2 border-primary/20">
            <div className="text-center">
              <Shield className="w-10 h-10 text-primary mx-auto mb-1" />
              <span className="text-primary font-heading font-bold text-lg">RGE</span>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
              Artisan Certifié RGE
            </h2>
            <p className="text-white/70 leading-relaxed mb-4">
              La certification RGE (Reconnu Garant de l'Environnement) atteste de notre compétence pour réaliser des travaux de rénovation énergétique.
              Elle vous permet de bénéficier des aides financières de l'État pour vos travaux de toiture et d'isolation.
            </p>
            <div className="flex flex-wrap gap-4">
              {["MaPrimeRénov'", "Éco-PTZ", "CEE", "TVA réduite 5,5%"].map(aide => (
                <span key={aide} className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium">
                  <Check className="w-4 h-4 text-secondary" /> {aide}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}