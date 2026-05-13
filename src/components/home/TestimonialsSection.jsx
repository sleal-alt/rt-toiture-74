import React from "react";
import { TESTIMONIALS } from "@/lib/siteData";
import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialCard from "@/components/shared/TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Avis Clients"
          title="Ils Nous Font Confiance"
          subtitle="Découvrez les témoignages de nos clients en Haute-Savoie. Votre satisfaction est notre priorité."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 6).map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}