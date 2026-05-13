import React from "react";
import { TESTIMONIALS } from "@/lib/siteData";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import TestimonialCard from "@/components/shared/TestimonialCard";
import CTABand from "@/components/shared/CTABand";
import { Star } from "lucide-react";

export default function Avis() {
  const avg = (TESTIMONIALS.reduce((s, t) => s + t.rating, 0) / TESTIMONIALS.length).toFixed(1);

  return (
    <>
      <Breadcrumbs items={[{ label: "Avis Clients" }]} />

      <section className="bg-accent py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Avis Clients — Couvreur Haute-Savoie
          </h1>
          <p className="text-white/70 text-lg mb-6">
            Découvrez les témoignages de nos clients satisfaits dans tout le département 74.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-white font-heading font-bold text-2xl">{avg}/5</span>
            <span className="text-white/60">— {TESTIMONIALS.length} avis</span>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Rejoignez nos clients satisfaits" />
    </>
  );
}