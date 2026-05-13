import React from "react";
import { IMAGES } from "@/lib/images";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ZonesSection from "@/components/home/ZonesSection";
import RGEBadge from "@/components/home/RGEBadge";
import CTABand from "@/components/shared/CTABand";
import FAQSection from "@/components/shared/FAQSection";

const HOME_FAQS = [
  { question: "Combien coûte un nettoyage de toiture en Haute-Savoie ?", answer: "Le prix d'un nettoyage de toiture en Haute-Savoie varie entre 15€ et 30€ par m² selon l'état de la toiture, son accessibilité et les traitements nécessaires. Nous réalisons un devis gratuit et personnalisé après diagnostic sur place." },
  { question: "Intervenez-vous en urgence pour une fuite de toiture ?", answer: "Oui, nous proposons un service d'urgence 7j/7 pour les fuites de toiture en Haute-Savoie. Contactez-nous au 06 69 43 41 42 pour une intervention rapide." },
  { question: "Quelle est la durée de vie du traitement hydrofuge ?", answer: "Notre traitement hydrofuge professionnel est garanti 10 ans. Il protège votre toiture contre l'humidité, le gel et les intempéries typiques de la Haute-Savoie." },
  { question: "Êtes-vous certifié RGE ?", answer: "Oui, nous sommes artisan certifié RGE (Reconnu Garant de l'Environnement). Cette certification vous permet de bénéficier des aides financières de l'État pour vos travaux de rénovation énergétique de toiture." },
  { question: "Dans quelles villes intervenez-vous ?", answer: "Nous intervenons dans toute la Haute-Savoie (74) : Annecy, Annemasse, Chamonix, Bonneville, Cluses, Sallanches, Megève, et bien d'autres communes. Consultez notre page zones d'intervention pour plus de détails." },
  { question: "Comment obtenir un devis gratuit ?", answer: "Appelez-nous directement au 06 69 43 41 42 ou remplissez notre formulaire de devis en ligne. Nous vous répondons sous 24h et planifions un diagnostic gratuit sur place." },
];

export default function Home() {
  return (
    <>
      <HeroSection heroImage={IMAGES.hero} />
      <ServicesPreview />
      <WhyChooseUs />

      {/* Before/After */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 bg-primary/10 text-primary">Résultats</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Des Transformations Spectaculaires</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Chaque toiture que nous traitons retrouve son éclat d'origine. Notre expertise en démoussage, nettoyage et traitement hydrofuge permet de prolonger la durée de vie de votre couverture de plusieurs décennies. En Haute-Savoie, où le climat montagnard met les toitures à rude épreuve, un entretien professionnel régulier est indispensable.
              </p>
              <ul className="space-y-3">
                {["Nettoyage haute pression adapté", "Traitement anti-mousse longue durée", "Hydrofuge garanti 10 ans", "Résultat visible immédiatement"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={IMAGES.beforeAfter} alt="Avant après nettoyage toiture Haute-Savoie" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <RGEBadge />
      <TestimonialsSection />
      <ZonesSection />
      <FAQSection faqs={HOME_FAQS} title="Questions Fréquentes sur la Couverture en Haute-Savoie" />
      <CTABand />
    </>
  );
}