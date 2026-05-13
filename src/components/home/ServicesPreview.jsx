import React from "react";
import { SERVICES } from "@/lib/siteData";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";

export default function ServicesPreview() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Nos Expertises"
          title="Services de Couverture en Haute-Savoie"
          subtitle="De la rénovation complète au simple nettoyage, nous intervenons sur tous les types de toitures avec des solutions adaptées au climat alpin."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map(service => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}