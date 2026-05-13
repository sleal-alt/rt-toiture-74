import React from "react";
import { IMAGES } from "@/lib/images";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import SectionHeading from "@/components/shared/SectionHeading";
import CTABand from "@/components/shared/CTABand";

const PROJECTS = [
  { title: "Nettoyage toiture — Annecy", category: "Démoussage", location: "Annecy (74000)" },
  { title: "Réfection couverture chalet — Megève", category: "Couverture", location: "Megève (74120)" },
  { title: "Étanchéité EPDM toit terrasse — Bonneville", category: "Étanchéité", location: "Bonneville (74130)" },
  { title: "Traitement hydrofuge — Chamonix", category: "Hydrofuge", location: "Chamonix (74400)" },
  { title: "Zinguerie complète — Sallanches", category: "Zinguerie", location: "Sallanches (74700)" },
  { title: "Peinture toiture — Annemasse", category: "Peinture", location: "Annemasse (74100)" },
];

export default function Realisations() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Réalisations" }]} />

      <section className="bg-accent py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Nos Réalisations en Haute-Savoie
          </h1>
          <p className="text-white/70 text-lg">
            Découvrez nos chantiers de couverture, nettoyage et rénovation de toiture dans tout le département 74.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <img
              src={IMAGES.beforeAfter}
              alt="Avant après rénovation toiture Haute-Savoie"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl"
            />
            <p className="mt-4 text-muted-foreground text-sm">Exemple de transformation avant / après — Nettoyage et traitement hydrofuge</p>
          </div>

          <SectionHeading badge="Portfolio" title="Nos Derniers Chantiers" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg transition">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">📸 Photo à venir</span>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{p.category}</span>
                  <h3 className="font-heading font-bold mt-3 mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Vous souhaitez un résultat similaire ?" />
    </>
  );
}