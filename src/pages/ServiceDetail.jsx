import React, { useState } from "react";
import { SERVICES, COMPANY } from "@/lib/siteData";
import { SERVICE_IMAGES } from "@/lib/images";
import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABand from "@/components/shared/CTABand";
import FAQSection from "@/components/shared/FAQSection";
import ContactForm from "@/components/shared/ContactForm";
import { Phone, Check, ArrowRight, Shield, Clock, Award, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ExpertiseBlock from "@/components/service/ExpertiseBlock";
import ProcessBlock from "@/components/service/ProcessBlock";
import InternalLinksBlock from "@/components/service/InternalLinksBlock";

const SERVICE_CONTENT = {
  "demoussage-nettoyage-toiture": {
    h1: "Démoussage et Nettoyage de Toiture en Haute-Savoie",
    intro: "Le démoussage et nettoyage de toiture est essentiel pour préserver l'intégrité et l'esthétique de votre couverture en Haute-Savoie. Le climat alpin, avec ses fortes précipitations, ses variations de température et son humidité, favorise le développement rapide de mousses, lichens et algues sur vos tuiles, ardoises ou matériaux de couverture.",
    benefits: ["Élimination complète des mousses et lichens", "Nettoyage haute pression adapté au support", "Vérification de l'état général de la toiture", "Traitement préventif inclus", "Prolongation de la durée de vie de 15 à 20 ans"],
    details: "Notre équipe utilise des techniques professionnelles adaptées à chaque type de couverture. En Haute-Savoie, nous intervenons sur les toitures en tuiles, ardoises, fibrociment et tous types de supports. Le nettoyage est réalisé avec un matériel professionnel qui respecte vos matériaux tout en éliminant efficacement toutes les salissures biologiques. Après le nettoyage, nous procédons à une inspection complète de votre toiture pour identifier d'éventuels problèmes : tuiles cassées, joints défaillants, problèmes de zinguerie. C'est l'occasion idéale de prévenir les fuites avant qu'elles ne causent des dégâts importants.",
    faqs: [
      { question: "À quelle fréquence faut-il nettoyer sa toiture en Haute-Savoie ?", answer: "En montagne, nous recommandons un nettoyage tous les 3 à 5 ans en raison de l'humidité et des conditions climatiques qui accélèrent la prolifération des mousses et lichens." },
      { question: "Le nettoyage haute pression abîme-t-il les tuiles ?", answer: "Non, nous adaptons la pression à chaque type de support. Nos professionnels utilisent des techniques qui nettoient efficacement sans endommager vos matériaux. Pour les ardoises fragiles, nous utilisons un lavage basse pression." },
      { question: "Combien de temps dure un nettoyage de toiture ?", answer: "En moyenne, le nettoyage d'une toiture standard de 100m² prend 1 à 2 jours, incluant le nettoyage, l'inspection et le traitement préventif." },
      { question: "Quel est le prix d'un démoussage de toiture ?", answer: "Le prix varie entre 15€ et 35€ par m² selon la surface, l'accessibilité et l'état d'encrassement. Nous proposons un devis gratuit et sans engagement sous 24h." },
      { question: "Peut-on faire un démoussage par tous les temps ?", answer: "Non, nous intervenons par temps sec et hors période de gel. En Haute-Savoie, la meilleure période est le printemps ou l'automne lorsque les conditions météo sont favorables." },
      { question: "Faut-il traiter la toiture après le nettoyage ?", answer: "Oui, un traitement fongicide après le nettoyage est fortement recommandé. Il empêche la réapparition des mousses et multiplie par 2 à 3 la durée entre chaque intervention." },
    ],
  },
  "traitement-fongicide-toiture": {
    h1: "Traitement Fongicide de Toiture en Haute-Savoie",
    intro: "Le traitement fongicide professionnel protège votre toiture contre la réapparition des mousses, champignons et micro-organismes. En Haute-Savoie, l'humidité ambiante et les conditions climatiques alpines rendent ce traitement particulièrement important pour la longévité de votre couverture.",
    benefits: ["Destruction totale des micro-organismes", "Protection longue durée anti-mousse", "Produits professionnels certifiés", "Application par pulvérisation homogène", "Compatible tous supports de couverture"],
    details: "Le traitement fongicide est l'étape clé après le nettoyage de votre toiture. Il empêche la réapparition des mousses et champignons pendant plusieurs années. Nos produits professionnels pénètrent en profondeur dans les matériaux pour une protection durable. En Haute-Savoie, où les toitures sont soumises à des conditions extrêmes — neige, gel, pluie, humidité — le traitement fongicide constitue un investissement judicieux pour éviter les dégradations prématurées de votre couverture.",
    faqs: [
      { question: "Le traitement fongicide est-il dangereux pour l'environnement ?", answer: "Nos produits sont certifiés et respectent les normes environnementales en vigueur. Ils sont biodégradables et sans danger pour votre jardin et vos plantations environnantes." },
      { question: "Combien de temps dure l'effet du traitement fongicide ?", answer: "Le traitement fongicide professionnel protège votre toiture pendant 3 à 5 ans selon l'exposition solaire, l'altitude et les conditions climatiques locales." },
      { question: "Doit-on nettoyer la toiture avant un traitement fongicide ?", answer: "Oui, un nettoyage préalable est indispensable. Le fongicide pénètre mieux dans des matériaux propres et son efficacité est nettement supérieure sur une surface débarrassée des mousses et lichens." },
      { question: "Quand est-ce que le traitement fongicide prend effet ?", answer: "L'action est visible en quelques semaines. Les mousses sèchent et se désagrègent progressivement, ce qui est tout à fait normal. La protection complète est atteinte après la première pluie." },
      { question: "Le traitement fongicide convient-il à tous types de toiture ?", answer: "Oui, nos produits sont compatibles avec les tuiles béton, les tuiles terre cuite, les ardoises, le fibrociment et la plupart des matériaux de couverture rencontrés en Haute-Savoie." },
    ],
  },
  "traitement-hydrofuge-toiture": {
    h1: "Traitement Hydrofuge de Toiture en Haute-Savoie — Garanti 10 Ans",
    intro: "Notre traitement hydrofuge professionnel imperméabilise votre toiture et la protège durablement contre les infiltrations d'eau. Garanti 10 ans, c'est la solution idéale pour les toitures en Haute-Savoie exposées aux fortes précipitations et au gel.",
    benefits: ["Imperméabilisation totale de la couverture", "Garantie 10 ans", "Effet perlant immédiat", "Protection contre le gel et les intempéries", "Préservation des couleurs d'origine"],
    details: "L'hydrofuge crée une barrière invisible qui empêche l'eau de pénétrer dans les matériaux de couverture tout en laissant la toiture respirer. C'est particulièrement important en Haute-Savoie où les cycles gel/dégel fragilisent les tuiles non protégées. Notre traitement hydrofuge professionnel, garanti 10 ans, utilise des produits de dernière génération à base de silicone ou siloxane qui offrent une protection maximale.",
    faqs: [
      { question: "Pourquoi le traitement hydrofuge est-il garanti 10 ans ?", answer: "Nous utilisons des produits professionnels de haute qualité qui ont fait leurs preuves. La garantie 10 ans couvre la performance hydrofuge du traitement dans des conditions normales d'utilisation." },
      { question: "Le traitement hydrofuge change-t-il l'aspect de ma toiture ?", answer: "Non, le traitement hydrofuge est transparent et invisible. Il préserve l'aspect naturel de vos tuiles tout en offrant un effet perlant qui fait glisser l'eau et la neige." },
      { question: "Faut-il nettoyer la toiture avant l'application de l'hydrofuge ?", answer: "Absolument. L'hydrofuge doit être appliqué sur un support propre et sec. Un nettoyage et un traitement fongicide préalables sont indispensables pour une adhérence et une efficacité optimales." },
      { question: "L'hydrofuge protège-t-il contre le gel en montagne ?", answer: "Oui, c'est l'un de ses atouts majeurs en Haute-Savoie. En empêchant l'eau de s'infiltrer dans les tuiles, il évite les cycles de gel/dégel qui fissurent et éclatent les matériaux de couverture." },
      { question: "Quel est le prix d'un traitement hydrofuge en Haute-Savoie ?", answer: "Le tarif se situe entre 20€ et 45€ par m² selon la surface et l'accessibilité. Compte tenu de la garantie 10 ans, c'est un investissement très rentable comparé au coût d'une réfection." },
      { question: "Le traitement hydrofuge peut-il être appliqué par n'importe quel temps ?", answer: "Non, l'application nécessite une température entre 5°C et 30°C, un support sec et aucune pluie prévue dans les 24 à 48 heures suivant l'intervention. Nous planifions nos chantiers en conséquence." },
    ],
  },
  "revetement-hydrofuge-teinte": {
    h1: "Revêtement Hydrofuge Teinté pour Toiture en Haute-Savoie",
    intro: "Le revêtement hydrofuge teinté combine protection et esthétique. Il imperméabilise votre toiture tout en lui redonnant une couleur uniforme et éclatante, pour un résultat spectaculaire sur les toitures vieillissantes.",
    benefits: ["Double action : protection + coloration", "Large choix de teintes", "Résultat immédiat visible", "Protection hydrofuge longue durée", "Rénovation esthétique sans remplacement"],
    details: "Le revêtement hydrofuge teinté est la solution idéale pour les toitures décolorées par le temps et les intempéries. Il permet de redonner un aspect neuf à votre couverture tout en assurant une protection hydrofuge efficace. Disponible dans un large éventail de couleurs, il s'adapte à tous les styles architecturaux de Haute-Savoie.",
    faqs: [
      { question: "Quelles couleurs sont disponibles pour l'hydrofuge teinté ?", answer: "Nous proposons une large gamme de teintes : rouge tuile, brun, ardoise, terre cuite, noir, gris anthracite, et bien d'autres. Nous vous conseillons la teinte la plus adaptée à votre toiture et à votre environnement alpin." },
      { question: "Quelle est la différence entre l'hydrofuge teinté et la peinture de toiture ?", answer: "L'hydrofuge teinté est plus fluide, il pénètre dans les matériaux tout en les colorant légèrement. La peinture de toiture est plus couvrante et opaque. L'hydrofuge teinté est idéal pour raviver une couleur fanée, la peinture pour changer radicalement de teinte." },
      { question: "Combien de couches faut-il appliquer ?", answer: "En général, deux couches sont nécessaires pour un résultat optimal : une couche d'accrochage et une couche de finition. Nous adaptons selon l'état de votre toiture et le résultat souhaité." },
      { question: "L'hydrofuge teinté convient-il aux ardoises ?", answer: "Oui, il existe des formulations spécifiques pour les ardoises et les toitures en zinc. Nous sélectionnons toujours le produit adapté à votre matériau de couverture pour garantir le meilleur résultat." },
      { question: "Combien de temps dure le revêtement hydrofuge teinté ?", answer: "La protection et la tenue de la teinte durent généralement 5 à 8 ans selon l'exposition aux UV et les conditions climatiques. En altitude, le renouvellement peut être plus fréquent en raison du rayonnement solaire plus intense." },
    ],
  },
  "peinture-toiture": {
    h1: "Peinture de Toiture en Haute-Savoie",
    intro: "La peinture de toiture offre une rénovation complète de l'aspect de votre couverture. Idéale pour transformer radicalement l'apparence de votre toit tout en le protégeant contre les intempéries alpines.",
    benefits: ["Transformation radicale de l'aspect", "Protection contre les UV et intempéries", "Peintures professionnelles haute tenue", "Amélioration de l'étanchéité", "Valorisation de votre patrimoine"],
    details: "La peinture de toiture est une solution de rénovation esthétique complète. Elle permet de changer ou raviver la couleur de votre couverture tout en ajoutant une couche de protection supplémentaire. Nos peintures professionnelles sont spécialement formulées pour résister aux conditions climatiques exigeantes de la Haute-Savoie.",
    faqs: [
      { question: "Combien de temps dure une peinture de toiture ?", answer: "Une peinture de toiture professionnelle bien appliquée dure entre 8 et 12 ans. La durée dépend de l'exposition, de l'orientation et des conditions climatiques en Haute-Savoie." },
      { question: "Faut-il préparer la toiture avant de la peindre ?", answer: "Oui, la préparation est essentielle. La toiture doit être nettoyée, démoussée et parfois traitée avec un primaire d'accrochage. Sans préparation sérieuse, la peinture risque de s'écailler rapidement." },
      { question: "Peut-on peindre sa toiture soi-même ?", answer: "Ce n'est pas conseillé. Travailler en hauteur est dangereux sans équipement adapté, et une mauvaise application peut causer des décollements ou des défauts d'aspect. Faire appel à un professionnel garantit un résultat durable et sécurisé." },
      { question: "La peinture de toiture améliore-t-elle l'isolation ?", answer: "Certaines peintures dites 'réflectives' ou 'thermiques' permettent de réduire la chaleur emmagasinée par la toiture en été. Elles constituent un complément intéressant à l'isolation mais ne la remplacent pas." },
      { question: "Quel est le prix d'une peinture de toiture en Haute-Savoie ?", answer: "Comptez entre 25€ et 50€ par m² selon la surface, la peinture choisie et l'état de la toiture. Nous établissons un devis gratuit et détaillé après visite de votre toiture." },
    ],
  },
  "couverture-toiture": {
    h1: "Couverture et Réfection de Toiture en Haute-Savoie",
    intro: "Nous réalisons tous types de travaux de couverture en Haute-Savoie : pose neuve, réfection complète, remplacement de tuiles, réparation de fuites. Artisan couvreur certifié RGE pour des travaux de qualité dans le respect des normes.",
    benefits: ["Pose neuve et réfection complète", "Tous types de couverture : tuiles, ardoises, zinc", "Réparation de fuites et infiltrations", "Certification RGE", "Respect des normes DTU"],
    details: "En tant qu'artisan couvreur en Haute-Savoie, nous maîtrisons tous les aspects de la couverture de toiture. De la réparation ponctuelle à la réfection complète, nous intervenons sur tous les types de bâtiments : maisons individuelles, chalets, immeubles, bâtiments commerciaux. Notre connaissance approfondie des spécificités climatiques de la montagne nous permet de vous proposer les solutions les plus adaptées.",
    faqs: [
      { question: "Quel type de couverture est le plus adapté en montagne ?", answer: "En Haute-Savoie, les tuiles béton et les ardoises sont les plus résistantes au climat alpin. Le choix dépend de votre localisation, de l'altitude et du plan local d'urbanisme (PLU)." },
      { question: "Combien coûte une réfection complète de toiture ?", answer: "Le prix varie entre 100€ et 250€ par m² selon le type de couverture, l'accessibilité et les travaux annexes nécessaires (charpente, isolation, zinguerie). Nous réalisons un devis gratuit et personnalisé." },
      { question: "Comment savoir si ma toiture a besoin d'une réfection complète ?", answer: "Plusieurs signes indiquent une toiture en fin de vie : tuiles cassées ou glissées en grand nombre, infiltrations récurrentes, toiture de plus de 30 ans, affaissement visible. Un diagnostic gratuit par notre couvreur permet de trancher entre réparation ponctuelle et réfection totale." },
      { question: "Quelle est la durée de vie d'une toiture neuve en Haute-Savoie ?", answer: "Avec des matériaux de qualité et un entretien régulier, une toiture neuve dure 30 à 50 ans pour les tuiles béton, 50 à 100 ans pour les ardoises naturelles. L'altitude et l'orientation jouent un rôle important sur cette longévité." },
      { question: "Les travaux de couverture sont-ils éligibles aux aides de l'État ?", answer: "Certains travaux combinant couverture et isolation peuvent bénéficier de MaPrimeRénov' ou de l'éco-PTZ. En tant qu'artisan RGE, nous vous accompagnons pour monter votre dossier de financement." },
      { question: "Intervenez-vous en urgence pour une toiture qui fuit ?", answer: "Oui, nous proposons un service d'intervention d'urgence 7j/7 pour les fuites actives. Nous sécurisons d'abord la toiture avec une bâche ou une réparation provisoire, puis réalisons les travaux définitifs dans les meilleurs délais." },
    ],
  },
  "etancheite-toit-terrasse-epdm": {
    h1: "Étanchéité Toit Terrasse EPDM Retridex en Haute-Savoie",
    intro: "Spécialistes de l'étanchéité de toit terrasse, nous utilisons le système EPDM Retridex, reconnu pour sa fiabilité et sa durabilité exceptionnelles. Solution idéale pour les toits plats et terrasses en Haute-Savoie.",
    benefits: ["Membrane EPDM Retridex haute performance", "Durabilité supérieure à 50 ans", "Résistance aux UV, gel et variations thermiques", "Pose sans flamme — sécurité maximale", "Étanchéité parfaite garantie"],
    details: "L'EPDM (Éthylène Propylène Diène Monomère) est une membrane d'étanchéité en caoutchouc synthétique reconnue mondialement pour ses performances exceptionnelles. Le système Retridex que nous utilisons offre une étanchéité parfaite avec une durée de vie dépassant 50 ans. En Haute-Savoie, où les toits terrasses sont soumis au poids de la neige, aux cycles gel/dégel et aux fortes pluies, l'EPDM Retridex est la solution la plus fiable.",
    faqs: [
      { question: "Pourquoi choisir l'EPDM plutôt que le bitume ?", answer: "L'EPDM offre une durabilité 2 à 3 fois supérieure au bitume, résiste mieux aux UV et aux variations de température, et sa pose sans flamme est plus sûre. C'est un investissement plus rentable à long terme." },
      { question: "L'EPDM résiste-t-il au poids de la neige ?", answer: "Oui, la membrane EPDM est extrêmement résistante et élastique. Elle supporte sans problème le poids de la neige et les contraintes mécaniques liées aux conditions hivernales en Haute-Savoie." },
      { question: "Quel est le prix d'une étanchéité EPDM en Haute-Savoie ?", answer: "Le coût varie entre 80€ et 150€ par m² selon la surface, la complexité du toit terrasse et les finitions (relevés, évacuations). Nous proposons un devis gratuit après visite technique." },
      { question: "Peut-on poser un revêtement sur une membrane EPDM ?", answer: "Oui, l'EPDM est compatible avec de nombreux revêtements : dalles sur plots, graviers, pelouse artificielle ou même terrasse en bois. Nous vous conseillons sur la solution la mieux adaptée à votre usage." },
      { question: "Combien de temps dure la pose d'une étanchéité EPDM ?", answer: "Pour une terrasse de 50 à 100 m², l'intervention dure généralement 1 à 2 jours selon la complexité. La membrane est posée à froid, sans flamme, ce qui permet une installation rapide et sécurisée." },
      { question: "Faut-il un permis de construire pour une étanchéité de toit terrasse ?", answer: "Non, les travaux d'étanchéité sur un toit terrasse existant ne nécessitent pas de permis de construire. En revanche, si vous souhaitez surélever ou modifier la structure, une déclaration préalable peut être nécessaire." },
    ],
  },
  "zinguerie": {
    h1: "Travaux de Zinguerie en Haute-Savoie",
    intro: "Artisan zingueur en Haute-Savoie, nous réalisons tous vos travaux de zinguerie : gouttières, chéneaux, descentes d'eaux pluviales, habillage de rive, abergement de cheminée. Un travail soigné pour une évacuation des eaux optimale.",
    benefits: ["Pose et remplacement de gouttières", "Chéneaux et descentes EP", "Habillage de sous-toiture et rives", "Abergement de cheminée", "Zinc, cuivre et aluminium laqué"],
    details: "La zinguerie est un élément essentiel de la toiture qui assure l'évacuation des eaux de pluie et la protection des points sensibles de votre couverture. En Haute-Savoie, une zinguerie bien réalisée est cruciale pour résister aux fortes précipitations, à la neige et au gel. Nous travaillons avec les meilleurs matériaux — zinc, cuivre, aluminium laqué — pour garantir durabilité et esthétique.",
    faqs: [
      { question: "Quel matériau choisir pour les gouttières en montagne ?", answer: "En Haute-Savoie, le zinc et l'aluminium laqué sont les plus adaptés. Le zinc offre une durabilité de 30 à 50 ans et le cuivre est le choix premium avec une longévité exceptionnelle dépassant 100 ans." },
      { question: "À quelle fréquence faut-il nettoyer ses gouttières ?", answer: "En Haute-Savoie, avec la présence de nombreux arbres à feuilles caduques, nous recommandons un nettoyage des gouttières au moins une fois par an, idéalement à l'automne après la chute des feuilles." },
      { question: "Quels sont les signes que ma zinguerie doit être remplacée ?", answer: "Les indices à surveiller : gouttières qui débordent ou ne se vident plus, taches de rouille visibles, joints décollés, eau qui s'infiltre au niveau des jonctions de toiture. Un diagnostic gratuit permet d'évaluer l'état de votre zinguerie." },
      { question: "Qu'est-ce qu'un abergement de cheminée et pourquoi est-il important ?", answer: "L'abergement est le raccord en zinc entre la cheminée et la toiture. Mal exécuté ou dégradé, il est l'une des premières causes d'infiltration d'eau. Un abergement de qualité, bien soudé, assure l'étanchéité totale de ce point sensible pendant des décennies." },
      { question: "Quel est le prix de remplacement de gouttières en Haute-Savoie ?", answer: "Comptez entre 30€ et 80€ par mètre linéaire selon le matériau (aluminium, zinc, cuivre) et la complexité de pose. Nous établissons un devis détaillé après visite pour évaluer l'ensemble de votre zinguerie." },
    ],
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);
  const content = SERVICE_CONTENT[slug];
  const images = SERVICE_IMAGES[slug] || [];
  const [lightbox, setLightbox] = useState(null); // index of open image

  if (!service || !content) {
    return <div className="p-20 text-center text-muted-foreground">Service non trouvé</div>;
  }

  const prevImage = () => setLightbox(i => (i - 1 + images.length) % images.length);
  const nextImage = () => setLightbox(i => (i + 1) % images.length);

  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.shortTitle }]} />

      {/* Hero */}
      <section className="bg-accent py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 bg-primary/20 text-primary border border-primary/30">
            {service.shortTitle}
          </span>
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
              <h2 className="font-heading text-2xl font-bold mb-6">Pourquoi choisir notre service de {service.shortTitle.toLowerCase()} ?</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{content.details}</p>

              <h3 className="font-heading text-xl font-bold mb-4">Avantages de notre prestation</h3>
              <ul className="space-y-3 mb-8">
                {content.benefits.map(b => (
                  <li key={b} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Trust badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                {[
                  { icon: Shield, label: "Certifié RGE", desc: "Travaux éligibles aux aides" },
                  { icon: Clock, label: "Réponse 24h", desc: "Devis gratuit rapide" },
                  { icon: Award, label: "Garantie 10 ans", desc: "Hydrofuge garanti" },
                ].map(({ icon: Icon, label, desc }) => (
                  <div key={label} className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl">
                    <Icon className="w-8 h-8 text-primary shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">{label}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Photo gallery */}
              {images.length > 0 && (
                <div className="mt-12">
                  <h3 className="font-heading text-xl font-bold mb-5">Photos de nos réalisations — {service.shortTitle}</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setLightbox(i)}
                        className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <img
                          src={img.url}
                          alt={img.alt}
                          title={img.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                          <span className="w-full text-white text-xs font-medium px-3 py-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {img.caption}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar form */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-lg sticky top-24">
                <h3 className="font-heading text-xl font-bold mb-4 text-center">Devis Gratuit</h3>
                <ContactForm source={`service-${slug}`} compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ExpertiseBlock slug={slug} serviceName={service.shortTitle} />
      <ProcessBlock slug={slug} />
      <InternalLinksBlock slug={slug} serviceName={service.shortTitle} />

      {content.faqs && <FAQSection faqs={content.faqs} title={`FAQ — ${service.shortTitle}`} />}
      <CTABand title={`Besoin d'un ${service.shortTitle.toLowerCase()} en Haute-Savoie ?`} />

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white hover:text-primary">
            <X className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 text-white hover:text-primary">
            <ChevronLeft className="w-10 h-10" />
          </button>
          <div onClick={e => e.stopPropagation()} className="max-w-4xl w-full">
            <img
              src={images[lightbox].url}
              alt={images[lightbox].alt}
              title={images[lightbox].alt}
              className="w-full max-h-[80vh] object-contain rounded-xl"
            />
            <p className="text-center text-white/80 mt-3 text-sm">{images[lightbox].caption}</p>
          </div>
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 text-white hover:text-primary">
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </>
  );
}