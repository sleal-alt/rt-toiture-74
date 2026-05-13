import React from "react";
import { Link } from "react-router-dom";
import { COMMUNES } from "@/lib/siteData";
import SectionHeading from "@/components/shared/SectionHeading";
import { MapPin, ArrowRight } from "lucide-react";

export default function ZonesSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Zone d'Intervention"
          title="Couvreur dans toute la Haute-Savoie"
          subtitle="Nous intervenons dans plus de 26 communes du département 74. Trouvez votre couvreur local."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {COMMUNES.map(c => (
            <Link
              key={c.slug}
              to={`/couvreur/${c.slug}`}
              className="flex items-center gap-2 p-3 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-sm transition-all text-sm"
            >
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              <span className="font-medium">{c.name}</span>
              <span className="text-xs text-muted-foreground ml-auto">{c.code}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}