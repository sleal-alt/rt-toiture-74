import React from "react";
import { COMMUNES, SERVICES, COMPANY } from "@/lib/siteData";
import { Link } from "react-router-dom";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABand from "@/components/shared/CTABand";
import FAQSection from "@/components/shared/FAQSection";
import ContactForm from "@/components/shared/ContactForm";
import ServiceCard from "@/components/shared/ServiceCard";
import { Phone, ArrowRight, MapPin, Shield, Clock, Award, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import CommunePhotoGallery from "@/components/shared/CommunePhotoGallery";

function getCommuneContent(commune) {
  const name = commune.name;
  const code = commune.code;
  const nearby = commune.nearby;

  return {
    h1: `Couvreur à ${name} (${code}) — Artisan Toiture Haute-Savoie`,
    metaDesc: `Couvreur professionnel à ${name} (${code}). Rénovation, nettoyage, traitement hydrofuge garanti 10 ans. Artisan RGE. Devis gratuit ☎ 06 69 43 41 42`,
    intro: `Vous recherchez un couvreur professionnel à ${name} et ses environs ? Reinhart Timothée Rénovation Toiture-Couverture intervient à ${name} (${code}) et dans les communes voisines de ${nearby.join(", ")} pour tous vos travaux de toiture. Artisan certifié RGE basé en Haute-Savoie, nous sommes votre partenaire de confiance pour l'entretien, la rénovation et la réparation de votre couverture.`,
    body: `À ${name}, les toitures sont soumises aux conditions climatiques typiques de la Haute-Savoie : précipitations abondantes, neige en hiver, variations de température importantes entre les saisons, et humidité ambiante favorisant le développement des mousses et lichens. C'est pourquoi un entretien régulier par un couvreur professionnel est essentiel pour préserver l'intégrité et la longévité de votre couverture.

Notre entreprise de couverture intervient à ${name} pour l'ensemble de nos prestations : démoussage et nettoyage de toiture, traitement fongicide, traitement hydrofuge garanti 10 ans, peinture de toiture, travaux de couverture et de zinguerie, ainsi que l'étanchéité de toit terrasse avec le système EPDM Retridex. Chaque intervention est réalisée avec le plus grand soin par notre équipe qualifiée, dans le respect des normes DTU et des spécificités locales.

En choisissant un artisan couvreur local à ${name}, vous bénéficiez d'une réactivité maximale, de tarifs compétitifs et d'un suivi personnalisé. Notre connaissance approfondie du parc immobilier de ${name} et des communes environnantes — ${nearby.join(", ")} — nous permet de vous proposer les solutions les plus adaptées à votre habitation.`,
    faqs: [
      { question: `Combien coûte un couvreur à ${name} ?`, answer: `Les tarifs de couvreur à ${name} varient selon la prestation : comptez entre 15 et 30€/m² pour un nettoyage, 100 à 250€/m² pour une réfection complète. Nous réalisons un devis gratuit et personnalisé après diagnostic sur place.` },
      { question: `Intervenez-vous rapidement à ${name} ?`, answer: `Oui, basés en Haute-Savoie, nous intervenons rapidement à ${name} (${code}). Pour les urgences (fuites, dégâts de tempête), nous proposons un service d'intervention 7j/7.` },
      { question: `Êtes-vous certifié pour travailler à ${name} ?`, answer: `Absolument. Nous sommes artisan certifié RGE et couvert par une assurance décennale. Notre certification vous permet de bénéficier des aides de l'État pour vos travaux de rénovation énergétique à ${name}.` },
      { question: `Quels services proposez-vous à ${name} ?`, answer: `À ${name}, nous proposons : démoussage, nettoyage, traitement fongicide et hydrofuge (garanti 10 ans), peinture de toiture, couverture complète, zinguerie et étanchéité EPDM pour toit terrasse.` },
    ],
  };
}

export default function CommunePage() {
  const slug = window.location.pathname.split("/couvreur/")[1];
  const commune = COMMUNES.find(c => c.slug === slug);

  if (!commune) {
    return <div className="p-20 text-center text-muted-foreground">Page non trouvée</div>;
  }

  const content = getCommuneContent(commune);

  return (
    <>
      <Breadcrumbs items={[{ label: "Zones d'intervention", href: "/services" }, { label: `Couvreur ${commune.name}` }]} />

      {/* Hero */}
      <section className="bg-accent py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center gap-2 justify-center mb-4">
            <MapPin className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-semibold">{commune.name} — {commune.code}</span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">{content.h1}</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{content.intro}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href={COMPANY.phoneTel}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-bold gap-2">
                <Phone className="w-5 h-5" /> {COMPANY.phone}
              </Button>
            </a>
            <Link to="/devis">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-bold gap-2">
                Devis Gratuit <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold mb-6">Votre Couvreur de Confiance à {commune.name}</h2>
              {content.body.split("\n\n").map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
              ))}

              {/* Services */}
              <h3 className="font-heading text-xl font-bold mt-8 mb-4">Nos Services à {commune.name}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {SERVICES.map(s => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl hover:bg-primary/5 transition">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm font-medium">{s.shortTitle} à {commune.name}</span>
                  </Link>
                ))}
              </div>

              {/* Trust */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                {[
                  { icon: Shield, label: "Certifié RGE" },
                  { icon: Clock, label: "Urgence 7j/7" },
                  { icon: Award, label: "Garantie 10 ans" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                    <Icon className="w-8 h-8 text-primary shrink-0" />
                    <p className="font-semibold text-sm">{label}</p>
                  </div>
                ))}
              </div>

              {/* Nearby */}
              <h3 className="font-heading text-xl font-bold mt-10 mb-4">Communes Proches</h3>
              <div className="flex flex-wrap gap-2">
                {commune.nearby.map(n => {
                  const nearbyCommune = COMMUNES.find(c => c.name === n);
                  return nearbyCommune ? (
                    <Link key={n} to={`/couvreur/${nearbyCommune.slug}`} className="px-4 py-2 bg-muted/50 rounded-full text-sm hover:bg-primary/10 hover:text-primary transition">
                      Couvreur {n}
                    </Link>
                  ) : (
                    <span key={n} className="px-4 py-2 bg-muted/50 rounded-full text-sm">{n}</span>
                  );
                })}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-lg sticky top-24">
                <h3 className="font-heading text-xl font-bold mb-4 text-center">Devis Gratuit à {commune.name}</h3>
                <ContactForm source={`commune-${slug}`} compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CommunePhotoGallery commune={commune.name} />
      <FAQSection faqs={content.faqs} title={`FAQ — Couvreur ${commune.name}`} />
      <CTABand title={`Couvreur à ${commune.name} — Devis Gratuit`} />
    </>
  );
}