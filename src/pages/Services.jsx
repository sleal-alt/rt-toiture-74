import React from "react";
import { SERVICES } from "@/lib/siteData";
import { IMAGES } from "@/lib/images";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import CTABand from "@/components/shared/CTABand";

export default function Services() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services" }]} />

      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.zone} alt="Toitures Haute-Savoie" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-accent/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Nos Services de Couverture en Haute-Savoie
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Du nettoyage au remplacement complet, nous proposons une gamme complète de services pour protéger et embellir votre toiture.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(service => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading badge="Notre Processus" title="Comment Ça Marche ?" subtitle="Un processus simple et transparent pour vos travaux de toiture." />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnostic", desc: "Inspection gratuite de votre toiture et identification des travaux nécessaires." },
              { step: "02", title: "Devis", desc: "Devis détaillé, transparent et sans engagement sous 24h." },
              { step: "03", title: "Travaux", desc: "Intervention professionnelle dans le respect des délais annoncés." },
              { step: "04", title: "Garantie", desc: "Suivi post-travaux et garantie jusqu'à 10 ans selon les prestations." },
            ].map(item => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary text-primary-foreground font-heading font-bold text-xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}