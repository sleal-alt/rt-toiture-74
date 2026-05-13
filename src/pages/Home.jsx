import React from "react";
import { IMAGES } from "@/lib/images";
import HeroSection from "@/components/home/HeroSection";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ArtisanLocal from "@/components/home/ArtisanLocal";
import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import GoogleReviews from "@/components/home/GoogleReviews";
import ZonesSection from "@/components/home/ZonesSection";
import MapSection from "@/components/home/MapSection";
import RGEBadge from "@/components/home/RGEBadge";
import CTABand from "@/components/shared/CTABand";
import FAQSection from "@/components/shared/FAQSection";

const HOME_FAQS = [
  {
    question: "Quel est le prix d'une rénovation de toiture en Haute-Savoie ?",
    answer: "Le coût dépend de la superficie, du type de couverture et des travaux nécessaires. Un démoussage + traitement hydrofuge coûte généralement entre 15 et 35 €/m². Une rénovation complète peut varier de 80 à 180 €/m². Nous réalisons un devis gratuit et personnalisé après diagnostic sur place, sans engagement."
  },
  {
    question: "Quand faut-il faire un démoussage de toiture ?",
    answer: "En Haute-Savoie, le climat humide et montagnard favorise la prolifération des mousses. Il est conseillé de faire un démoussage tous les 3 à 5 ans, ou dès que vous observez des traces vertes sur vos tuiles. Un toiture non entretenue peut perdre jusqu'à 30% de sa durée de vie."
  },
  {
    question: "Pourquoi appliquer un traitement hydrofuge sur sa toiture ?",
    answer: "L'hydrofuge crée une barrière imperméable qui protège vos tuiles contre l'humidité, le gel, le vent et la neige — des conditions particulièrement éprouvantes en milieu alpin. Notre traitement hydrofuge est garanti 10 ans et prolonge la durée de vie de votre toiture de 10 à 20 ans."
  },
  {
    question: "Quelle toiture résiste le mieux à la neige et au gel ?",
    answer: "En montagne, les toitures en ardoise naturelle, tuiles béton et zinc sont les plus adaptées. Elles résistent mieux aux chocs thermiques et au poids de la neige. Nous vous conseillons sur les matériaux les plus adaptés à votre altitude et à votre exposition."
  },
  {
    question: "Quel est le délai d'intervention pour une urgence toiture ?",
    answer: "Pour les urgences (fuite, fissure, dégâts tempête), nous intervenons sous 24 à 48h dans toute la Haute-Savoie, 7j/7. Appelez directement le 06 69 43 41 42 pour une prise en charge rapide."
  },
  {
    question: "Êtes-vous certifié RGE pour bénéficier des aides de l'État ?",
    answer: "Oui, nous sommes artisan certifié RGE (Reconnu Garant de l'Environnement). Cette certification vous permet de bénéficier de MaPrimeRénov', l'Éco-PTZ, les CEE et la TVA réduite à 5,5% pour vos travaux de rénovation énergétique de toiture."
  },
  {
    question: "Dans quelles communes de Haute-Savoie intervenez-vous ?",
    answer: "Nous intervenons dans tout le département 74 : Annecy, Annemasse, Chamonix, Bonneville, Cluses, Sallanches, Megève, Saint-Julien-en-Genevois, Vétraz-Monthoux, La Roche-sur-Foron, et bien d'autres communes. Consultez notre carte des zones d'intervention."
  },
  {
    question: "Comment obtenir un devis gratuit ?",
    answer: "Appelez le 06 69 43 41 42 ou remplissez notre formulaire en ligne. Nous vous contactons sous 24h et planifions un diagnostic gratuit sur place pour établir un devis personnalisé et transparent."
  },
];

export default function Home() {
  return (
    <>
      <HeroSection heroImage={IMAGES.hero} />
      <ArtisanLocal />
      <ServicesPreview />
      <WhyChooseUs />
      <BeforeAfterSlider />
      <RGEBadge />
      <TestimonialsSection />
      <GoogleReviews />
      <MapSection />
      <ZonesSection />
      <FAQSection
        faqs={HOME_FAQS}
        title="Questions Fréquentes — Couvreur Haute-Savoie"
        badge="FAQ"
      />
      <CTABand />
    </>
  );
}