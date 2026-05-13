import React from "react";
import { Search, ClipboardList, HardHat, Wrench, CheckCircle } from "lucide-react";

const PROCESS_CONTENT = {
  "demoussage-nettoyage-toiture": [
    { icon: Search, title: "Inspection de la toiture", desc: "Évaluation complète de l'état de la couverture, repérage des zones à traiter, mesure de la surface et analyse du type de support." },
    { icon: ClipboardList, title: "Devis détaillé et transparent", desc: "Proposition chiffrée précise, choix du traitement adapté à votre type de toiture, délai d'intervention confirmé sous 24h." },
    { icon: HardHat, title: "Sécurisation du chantier", desc: "Mise en place des équipements de protection, bâchage des zones sensibles (vitres, volets, végétaux), installation des systèmes d'élévation." },
    { icon: Wrench, title: "Nettoyage et démoussage", desc: "Application haute pression calibrée selon le support, élimination intégrale des mousses, lichens et algues, nettoyage des noues et gouttières." },
    { icon: CheckCircle, title: "Contrôle qualité et conseils", desc: "Inspection finale de la toiture, signalement des éventuelles tuiles à remplacer, recommandations pour le traitement préventif suivant." },
  ],
  "traitement-fongicide-toiture": [
    { icon: Search, title: "Diagnostic de la toiture", desc: "Évaluation du niveau d'encrassement, identification des espèces présentes (mousses, lichens, algues), choix du fongicide adapté." },
    { icon: ClipboardList, title: "Préparation du produit", desc: "Sélection de la concentration adaptée à l'exposition et à l'altitude de la toiture, préparation du matériel de pulvérisation professionnel." },
    { icon: HardHat, title: "Protection de l'environnement", desc: "Bâchage des jardins et plantations, protection des surfaces sensibles, vérification de l'absence de précipitations prévues dans les 48h." },
    { icon: Wrench, title: "Application fongicide", desc: "Pulvérisation homogène du produit sur l'ensemble de la couverture, insistance sur les zones d'ombre et les points sensibles." },
    { icon: CheckCircle, title: "Suivi et garantie", desc: "Explication du processus d'action visible sur quelques semaines, conseils d'entretien, garantie de l'efficacité du traitement pendant 3 à 5 ans." },
  ],
  "traitement-hydrofuge-toiture": [
    { icon: Search, title: "Inspection et diagnostic", desc: "Évaluation de l'état de la toiture, test d'absorption du support, vérification des conditions météo pour planifier l'intervention." },
    { icon: ClipboardList, title: "Nettoyage préalable obligatoire", desc: "Démoussage complet de la toiture, traitement fongicide si nécessaire, attente du séchage parfait du support avant application." },
    { icon: HardHat, title: "Sécurisation du chantier", desc: "Mise en place des protections, vérification de la température (5°C à 30°C) et de l'absence de pluie prévue dans les 48h suivant l'intervention." },
    { icon: Wrench, title: "Application hydrofuge", desc: "Application par pistolet airless en deux passes croisées pour une imprégnation homogène, dosage précis pour une pénétration en profondeur dans les matériaux." },
    { icon: CheckCircle, title: "Vérification et remise de garantie", desc: "Test de perlage pour confirmer l'efficacité, remise du certificat de garantie 10 ans, conseils pour préserver le traitement dans la durée." },
  ],
  "revetement-hydrofuge-teinte": [
    { icon: Search, title: "Diagnostic et choix de teinte", desc: "Évaluation de l'état du support, consultation du PLU local pour les teintes autorisées, présentation des échantillons de coloris disponibles." },
    { icon: ClipboardList, title: "Préparation du support", desc: "Nettoyage haute pression, démoussage si nécessaire, séchage complet de la surface avant toute application de revêtement." },
    { icon: HardHat, title: "Application de la couche d'accrochage", desc: "Première couche de primaire teinté pour une pénétration en profondeur dans les pores du matériau et une coloration homogène." },
    { icon: Wrench, title: "Couche de finition hydrofuge", desc: "Application de la couche de protection hydrofuge teintée, finition soignée sur les reliefs et les bords, contrôle de l'uniformité de la teinte." },
    { icon: CheckCircle, title: "Réception et conseils", desc: "Validation visuelle du résultat, remise des fiches produits, recommandations pour maintenir l'aspect et la protection dans le temps." },
  ],
  "peinture-toiture": [
    { icon: Search, title: "Inspection et préparation", desc: "Évaluation de l'état de la toiture, identification des zones friables ou décollées, sélection de la peinture adaptée au support et au climat local." },
    { icon: ClipboardList, title: "Nettoyage et démoussage", desc: "Nettoyage haute pression complet, démoussage, application d'un primaire d'accrochage sur les zones dégradées ou très poreuses." },
    { icon: HardHat, title: "Sécurisation et protection", desc: "Bâchage des façades et des baies vitrées, protection des éléments métalliques, vérification des conditions météo favorables." },
    { icon: Wrench, title: "Application de la peinture", desc: "Application en deux couches croisées au rouleau ou par airless selon le support, contrôle de l'épaisseur du film entre chaque couche." },
    { icon: CheckCircle, title: "Contrôle et livraison", desc: "Inspection visuelle finale, correction des éventuels défauts, remise du bon d'intervention et des conseils de ré-intervention à terme." },
  ],
  "couverture-toiture": [
    { icon: Search, title: "Diagnostic toiture", desc: "Inspection complète de la couverture et de la charpente, évaluation des zones dégradées, estimation du type d'intervention nécessaire." },
    { icon: ClipboardList, title: "Devis et sélection des matériaux", desc: "Choix du type de couverture adapté au PLU, à l'altitude et au budget, devis détaillé avec planning d'intervention et conditions de garantie." },
    { icon: HardHat, title: "Préparation et sécurisation", desc: "Installation des échafaudages et protections de chantier, dépose de l'ancienne couverture si nécessaire, vérification et traitement de la charpente." },
    { icon: Wrench, title: "Pose de la couverture", desc: "Pose des liteaux, contre-liteaux et écran de sous-toiture, mise en œuvre de la couverture selon les règles DTU, réalisation de la zinguerie et des raccords." },
    { icon: CheckCircle, title: "Contrôle et garantie", desc: "Test d'étanchéité, inspection de la zinguerie, nettoyage du chantier, remise du dossier de fin de travaux et de la garantie décennale." },
  ],
  "etancheite-toit-terrasse-epdm": [
    { icon: Search, title: "Diagnostic du support", desc: "Inspection de l'état du toit terrasse existant, mesure des pentes, identification des points singuliers (relevés, souches, évacuations)." },
    { icon: ClipboardList, title: "Préparation du support", desc: "Dépose de l'ancienne étanchéité si nécessaire, réfection des zones dégradées du support, application d'une primaire d'accrochage sur les surfaces poreuses." },
    { icon: HardHat, title: "Calepinage et découpe de la membrane", desc: "Calcul précis des lés de membrane EPDM Retridex, découpe sur mesure pour minimiser les assemblages, prédécoupage des pièces pour les points singuliers." },
    { icon: Wrench, title: "Pose et collage EPDM", desc: "Déploiement de la membrane, collage à froid avec adhésifs spécifiques Retridex, soudure chimique des chevauchements, réalisation des relevés et finitions." },
    { icon: CheckCircle, title: "Test d'étanchéité et réception", desc: "Test au jet d'eau sur l'ensemble de la surface et des points singuliers, contrôle final des relevés et des évacuations, remise du certificat de garantie." },
  ],
  "zinguerie": [
    { icon: Search, title: "Diagnostic de la zinguerie", desc: "Inspection complète des gouttières, chéneaux, descentes EP, abergements et habillages, identification des zones à risque de fuite ou de débordement." },
    { icon: ClipboardList, title: "Devis et choix des matériaux", desc: "Sélection du matériau adapté (zinc, cuivre, aluminium laqué), dimensionnement des sections pour les débits à évacuer, devis transparent et détaillé." },
    { icon: HardHat, title: "Dépose de l'ancienne zinguerie", desc: "Dépose soigneuse des éléments à remplacer, vérification de l'état du support et des fixations, préparation des surfaces pour la pose neuve." },
    { icon: Wrench, title: "Pose de la nouvelle zinguerie", desc: "Cintrage et formage des éléments sur mesure, soudure ou sertissage des assemblages, pose avec pentes adaptées à l'évacuation rapide des eaux." },
    { icon: CheckCircle, title: "Test et conseils d'entretien", desc: "Test au jet d'eau pour vérifier l'écoulement et l'étanchéité, nettoyage et pose de grilles anti-feuilles si nécessaire, conseils pour l'entretien annuel." },
  ],
};

export default function ProcessBlock({ slug }) {
  const steps = PROCESS_CONTENT[slug];
  if (!steps) return null;

  return (
    <section className="py-16 lg:py-20 bg-accent/5">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
            Déroulement du chantier
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
            Notre méthode d'intervention, étape par étape
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Un processus rigoureux pensé pour garantir qualité, sécurité et satisfaction à chaque chantier en Haute-Savoie.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-10 right-10 h-0.5 bg-border" />
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="relative flex flex-col items-center text-center">
                  {/* Circle */}
                  <div className="relative z-10 w-20 h-20 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-md mb-4 shrink-0">
                    <Icon className="w-8 h-8 text-primary" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-sm text-foreground mb-2 leading-tight">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile stacked */}
        <div className="md:hidden space-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex gap-4 bg-card rounded-xl p-4 border border-border/50 shadow-sm">
                <div className="relative shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-primary-foreground text-[9px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground mb-1">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}