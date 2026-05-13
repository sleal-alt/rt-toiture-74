import React from "react";
import SectionHeading from "@/components/shared/SectionHeading";
import { Shield, Clock, Award, MapPin, ThumbsUp, Hammer } from "lucide-react";

const REASONS = [
  { icon: Shield, title: "Certifié RGE", desc: "Certification Reconnu Garant de l'Environnement pour vos travaux de rénovation énergétique." },
  { icon: Award, title: "Garantie 10 ans", desc: "Notre traitement hydrofuge est garanti 10 ans pour une protection durable de votre toiture." },
  { icon: Clock, title: "Intervention Rapide", desc: "Urgence 7j/7 et devis gratuit sous 24h. Nous intervenons rapidement sur toute la Haute-Savoie." },
  { icon: MapPin, title: "Artisan Local", desc: "Basés à Poisy, nous connaissons parfaitement les contraintes climatiques du département 74." },
  { icon: ThumbsUp, title: "Avis 5 Étoiles", desc: "Nos clients nous recommandent pour notre sérieux, notre ponctualité et la qualité de nos finitions." },
  { icon: Hammer, title: "Expert Montagne", desc: "Techniques et matériaux adaptés aux conditions extrêmes : neige, gel, vent, altitude." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Pourquoi Nous"
          title="Un Artisan Couvreur de Confiance"
          subtitle="Choisir RT Toiture 74, c'est opter pour un artisan local certifié, réactif et passionné par son métier."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}