import React from "react";
import { SERVICE_IMAGES, IMAGES } from "@/lib/images";

// Raccourcis pour lisibilité
const SI = SERVICE_IMAGES;

// 104 photos : 4 photos uniques par commune (26 communes × 4)
const COMMUNE_PHOTOS = {
  "vetraz-monthoux": [
    { url: SI["couverture-toiture"][0].url, alt: "Remplacement couverture tuiles Vétraz-Monthoux", label: "Remplacement couverture" },
    { url: SI["demoussage-nettoyage-toiture"][0].url, alt: "Démoussage toiture Vétraz-Monthoux", label: "Démoussage toiture" },
    { url: SI["etancheite-toit-terrasse-epdm"][0].url, alt: "Étanchéité toit terrasse Vétraz-Monthoux", label: "Étanchéité toit terrasse" },
    { url: SI["zinguerie"][0].url, alt: "Zinguerie gouttières zinc Vétraz-Monthoux", label: "Pose gouttières zinc" },
  ],
  "annemasse": [
    { url: SI["demoussage-nettoyage-toiture"][1].url, alt: "Avant après démoussage toiture Annemasse", label: "Avant / après démoussage" },
    { url: SI["couverture-toiture"][1].url, alt: "Réparation ardoises Annemasse", label: "Réparation ardoises" },
    { url: SI["traitement-hydrofuge-toiture"][0].url, alt: "Traitement hydrofuge toiture Annemasse", label: "Traitement hydrofuge" },
    { url: SI["etancheite-toit-terrasse-epdm"][1].url, alt: "Étanchéité EPDM toit plat Annemasse", label: "Étanchéité EPDM" },
  ],
  "bonne": [
    { url: SI["couverture-toiture"][2].url, alt: "Couvreur en hauteur chalet Bonne", label: "Intervention sécurisée" },
    { url: SI["demoussage-nettoyage-toiture"][2].url, alt: "Matériel professionnel démoussage Bonne", label: "Démoussage professionnel" },
    { url: SI["traitement-fongicide-toiture"][0].url, alt: "Traitement fongicide toiture Bonne", label: "Traitement fongicide" },
    { url: SI["etancheite-toit-terrasse-epdm"][2].url, alt: "Membrane EPDM pose Bonne", label: "Pose membrane EPDM" },
  ],
  "sciez": [
    { url: SI["couverture-toiture"][3].url, alt: "Résultat couverture neuve Sciez", label: "Couverture neuve" },
    { url: SI["demoussage-nettoyage-toiture"][3].url, alt: "Toiture nettoyée Sciez", label: "Toiture propre protégée" },
    { url: SI["zinguerie"][1].url, alt: "Gouttières zinc cuivre Sciez", label: "Gouttières zinc et cuivre" },
    { url: SI["etancheite-toit-terrasse-epdm"][3].url, alt: "Finition étanchéité Sciez", label: "Étanchéité parfaite" },
  ],
  "collonges-sous-saleve": [
    { url: SI["couverture-toiture"][0].url, alt: "Pose tuiles neuves Collonges-sous-Salève", label: "Remplacement couverture" },
    { url: SI["traitement-hydrofuge-toiture"][1].url, alt: "Effet perlant hydrofuge Collonges-sous-Salève", label: "Imperméabilisation totale" },
    { url: SI["demoussage-nettoyage-toiture"][0].url, alt: "Démoussage haute pression Collonges-sous-Salève", label: "Démoussage toiture" },
    { url: SI["zinguerie"][2].url, alt: "Abergement cheminée zinc Collonges-sous-Salève", label: "Abergement cheminée" },
  ],
  "chamonix-mont-blanc": [
    { url: SI["couverture-toiture"][1].url, alt: "Réparation ardoises Chamonix-Mont-Blanc", label: "Réparation ardoises" },
    { url: SI["demoussage-nettoyage-toiture"][0].url, alt: "Démoussage chalet alpin Chamonix", label: "Démoussage toiture" },
    { url: SI["etancheite-toit-terrasse-epdm"][0].url, alt: "Étanchéité toit terrasse Chamonix", label: "Étanchéité EPDM" },
    { url: IMAGES.artisan, alt: "Artisan couvreur RGE Chamonix-Mont-Blanc", label: "Artisan certifié RGE" },
  ],
  "bonneville": [
    { url: SI["couverture-toiture"][2].url, alt: "Couverture toiture Bonneville", label: "Réfection couverture" },
    { url: SI["demoussage-nettoyage-toiture"][1].url, alt: "Avant après démoussage Bonneville", label: "Résultat démoussage" },
    { url: SI["revetement-hydrofuge-teinte"][0].url, alt: "Revêtement hydrofuge teinté Bonneville", label: "Revêtement teinté" },
    { url: SI["etancheite-toit-terrasse-epdm"][1].url, alt: "Toit terrasse étanche Bonneville", label: "Étanchéité toit terrasse" },
  ],
  "cluses": [
    { url: SI["couverture-toiture"][3].url, alt: "Couverture ardoise Cluses", label: "Résultat couverture neuve" },
    { url: SI["demoussage-nettoyage-toiture"][2].url, alt: "Nettoyage toiture professionnel Cluses", label: "Démoussage professionnel" },
    { url: SI["zinguerie"][3].url, alt: "Zinguerie complète Cluses", label: "Zinguerie complète" },
    { url: SI["etancheite-toit-terrasse-epdm"][0].url, alt: "EPDM toit plat Cluses", label: "Étanchéité EPDM" },
  ],
  "saint-julien-en-genevois": [
    { url: SI["couverture-toiture"][0].url, alt: "Pose tuiles Saint-Julien-en-Genevois", label: "Remplacement couverture" },
    { url: SI["demoussage-nettoyage-toiture"][3].url, alt: "Toiture propre Saint-Julien-en-Genevois", label: "Démoussage toiture" },
    { url: SI["traitement-fongicide-toiture"][1].url, alt: "Protection fongicide Saint-Julien-en-Genevois", label: "Traitement fongicide" },
    { url: SI["etancheite-toit-terrasse-epdm"][2].url, alt: "EPDM collé Saint-Julien-en-Genevois", label: "Étanchéité toit terrasse" },
  ],
  "douvaine": [
    { url: SI["couverture-toiture"][1].url, alt: "Ardoises posées Douvaine", label: "Pose ardoises" },
    { url: SI["demoussage-nettoyage-toiture"][0].url, alt: "Nettoyage haute pression Douvaine", label: "Démoussage toiture" },
    { url: SI["revetement-hydrofuge-teinte"][3].url, alt: "Résultat revêtement teinté Douvaine", label: "Revêtement hydrofuge teinté" },
    { url: SI["etancheite-toit-terrasse-epdm"][3].url, alt: "Étanchéité toit terrasse Douvaine", label: "Étanchéité EPDM" },
  ],
  "bons-en-chablais": [
    { url: SI["couverture-toiture"][2].url, alt: "Intervention toiture Bons-en-Chablais", label: "Couverture toiture" },
    { url: SI["demoussage-nettoyage-toiture"][1].url, alt: "Avant après démoussage Bons-en-Chablais", label: "Résultat démoussage" },
    { url: SI["traitement-hydrofuge-toiture"][2].url, alt: "Artisan hydrofuge Bons-en-Chablais", label: "Traitement hydrofuge" },
    { url: SI["etancheite-toit-terrasse-epdm"][0].url, alt: "Pose EPDM Bons-en-Chablais", label: "Étanchéité toit terrasse" },
  ],
  "saint-cergues": [
    { url: SI["couverture-toiture"][3].url, alt: "Couverture ardoise Saint-Cergues", label: "Résultat couverture" },
    { url: SI["demoussage-nettoyage-toiture"][2].url, alt: "Démoussage Saint-Cergues", label: "Démoussage toiture" },
    { url: SI["zinguerie"][0].url, alt: "Gouttières zinc Saint-Cergues", label: "Gouttières zinc" },
    { url: SI["etancheite-toit-terrasse-epdm"][1].url, alt: "Toit terrasse EPDM Saint-Cergues", label: "Étanchéité toit terrasse" },
  ],
  "veigy-foncenex": [
    { url: SI["couverture-toiture"][0].url, alt: "Remplacement tuiles Veigy-Foncenex", label: "Remplacement couverture" },
    { url: SI["demoussage-nettoyage-toiture"][3].url, alt: "Toiture propre Veigy-Foncenex", label: "Démoussage toiture" },
    { url: SI["peinture-toiture"][0].url, alt: "Peinture toiture Veigy-Foncenex", label: "Peinture toiture" },
    { url: SI["etancheite-toit-terrasse-epdm"][2].url, alt: "Étanchéité EPDM Veigy-Foncenex", label: "Étanchéité toit terrasse" },
  ],
  "annecy": [
    { url: SI["couverture-toiture"][1].url, alt: "Réparation toiture ardoises Annecy", label: "Réparation couverture" },
    { url: SI["demoussage-nettoyage-toiture"][0].url, alt: "Démoussage toiture Annecy", label: "Démoussage toiture" },
    { url: SI["traitement-hydrofuge-toiture"][3].url, alt: "Hydrofuge pluie neige gel Annecy", label: "Traitement hydrofuge" },
    { url: SI["etancheite-toit-terrasse-epdm"][3].url, alt: "Finition EPDM Annecy", label: "Étanchéité toit terrasse" },
  ],
  "veyrier-du-lac": [
    { url: SI["couverture-toiture"][2].url, alt: "Couvreur chalet Veyrier-du-Lac", label: "Couverture chalet" },
    { url: SI["demoussage-nettoyage-toiture"][1].url, alt: "Avant après démoussage Veyrier-du-Lac", label: "Démoussage toiture" },
    { url: SI["revetement-hydrofuge-teinte"][1].url, alt: "Teintes hydrofuge Veyrier-du-Lac", label: "Revêtement teinté" },
    { url: SI["etancheite-toit-terrasse-epdm"][0].url, alt: "EPDM toit plat Veyrier-du-Lac", label: "Étanchéité toit terrasse" },
  ],
  "menthon-saint-bernard": [
    { url: SI["couverture-toiture"][3].url, alt: "Nouvelle couverture Menthon-Saint-Bernard", label: "Couverture neuve" },
    { url: SI["demoussage-nettoyage-toiture"][2].url, alt: "Démoussage professionnel Menthon-Saint-Bernard", label: "Démoussage toiture" },
    { url: SI["traitement-fongicide-toiture"][2].url, alt: "Traitement certifié Menthon-Saint-Bernard", label: "Traitement fongicide" },
    { url: SI["etancheite-toit-terrasse-epdm"][1].url, alt: "Toit terrasse étanche Menthon-Saint-Bernard", label: "Étanchéité toit terrasse" },
  ],
  "talloires": [
    { url: SI["couverture-toiture"][0].url, alt: "Pose tuiles Talloires", label: "Remplacement couverture" },
    { url: SI["demoussage-nettoyage-toiture"][3].url, alt: "Toiture propre Talloires", label: "Démoussage toiture" },
    { url: SI["zinguerie"][1].url, alt: "Gouttières neuves Talloires", label: "Gouttières zinc et cuivre" },
    { url: SI["etancheite-toit-terrasse-epdm"][2].url, alt: "Membrane EPDM Talloires", label: "Étanchéité toit terrasse" },
  ],
  "bossey": [
    { url: SI["couverture-toiture"][1].url, alt: "Réfection ardoises Bossey", label: "Pose ardoises" },
    { url: SI["demoussage-nettoyage-toiture"][0].url, alt: "Nettoyage haute pression Bossey", label: "Démoussage toiture" },
    { url: SI["revetement-hydrofuge-teinte"][2].url, alt: "Application rouleau Bossey", label: "Revêtement hydrofuge teinté" },
    { url: SI["etancheite-toit-terrasse-epdm"][3].url, alt: "Résultat étanchéité Bossey", label: "Étanchéité toit terrasse" },
  ],
  "megeve": [
    { url: SI["couverture-toiture"][2].url, alt: "Couverture chalet altitude Megève", label: "Couverture chalet" },
    { url: SI["demoussage-nettoyage-toiture"][1].url, alt: "Avant après démoussage Megève", label: "Démoussage toiture" },
    { url: SI["traitement-hydrofuge-toiture"][0].url, alt: "Hydrofuge haute montagne Megève", label: "Traitement hydrofuge" },
    { url: SI["etancheite-toit-terrasse-epdm"][0].url, alt: "EPDM toit terrasse Megève", label: "Étanchéité toit terrasse" },
  ],
  "sallanches": [
    { url: SI["couverture-toiture"][3].url, alt: "Résultat couverture Sallanches", label: "Couverture neuve" },
    { url: SI["demoussage-nettoyage-toiture"][2].url, alt: "Matériel démoussage Sallanches", label: "Démoussage toiture" },
    { url: SI["zinguerie"][2].url, alt: "Abergement zinc Sallanches", label: "Zinguerie cheminée" },
    { url: SI["etancheite-toit-terrasse-epdm"][1].url, alt: "Toit plat étanche Sallanches", label: "Étanchéité toit terrasse" },
  ],
  "la-roche-sur-foron": [
    { url: SI["couverture-toiture"][0].url, alt: "Pose tuiles La Roche-sur-Foron", label: "Remplacement couverture" },
    { url: SI["demoussage-nettoyage-toiture"][3].url, alt: "Toiture propre La Roche-sur-Foron", label: "Démoussage toiture" },
    { url: SI["peinture-toiture"][1].url, alt: "Peinture toiture résultat La Roche-sur-Foron", label: "Peinture toiture" },
    { url: SI["etancheite-toit-terrasse-epdm"][2].url, alt: "EPDM La Roche-sur-Foron", label: "Étanchéité toit terrasse" },
  ],
  "reignier-esery": [
    { url: SI["couverture-toiture"][1].url, alt: "Réparation toiture Reignier-Ésery", label: "Réparation couverture" },
    { url: SI["demoussage-nettoyage-toiture"][0].url, alt: "Démoussage haute pression Reignier-Ésery", label: "Démoussage toiture" },
    { url: SI["traitement-fongicide-toiture"][3].url, alt: "Fongicide Reignier-Ésery", label: "Traitement fongicide" },
    { url: SI["etancheite-toit-terrasse-epdm"][3].url, alt: "Étanchéité EPDM Reignier-Ésery", label: "Étanchéité toit terrasse" },
  ],
  "viuz-en-sallaz": [
    { url: SI["couverture-toiture"][2].url, alt: "Intervention toiture Viuz-en-Sallaz", label: "Couverture toiture" },
    { url: SI["demoussage-nettoyage-toiture"][1].url, alt: "Démoussage Viuz-en-Sallaz", label: "Démoussage toiture" },
    { url: SI["revetement-hydrofuge-teinte"][0].url, alt: "Revêtement teinté Viuz-en-Sallaz", label: "Revêtement hydrofuge teinté" },
    { url: SI["etancheite-toit-terrasse-epdm"][0].url, alt: "EPDM pose Viuz-en-Sallaz", label: "Étanchéité toit terrasse" },
  ],
  "chens-sur-leman": [
    { url: SI["couverture-toiture"][3].url, alt: "Couverture neuve Chens-sur-Léman", label: "Résultat couverture" },
    { url: SI["demoussage-nettoyage-toiture"][2].url, alt: "Nettoyage professionnel Chens-sur-Léman", label: "Démoussage toiture" },
    { url: SI["zinguerie"][3].url, alt: "Zinguerie rénovation Chens-sur-Léman", label: "Zinguerie complète" },
    { url: SI["etancheite-toit-terrasse-epdm"][1].url, alt: "Toit terrasse EPDM Chens-sur-Léman", label: "Étanchéité toit terrasse" },
  ],
  "yvoire": [
    { url: SI["couverture-toiture"][0].url, alt: "Remplacement couverture Yvoire", label: "Remplacement couverture" },
    { url: SI["demoussage-nettoyage-toiture"][3].url, alt: "Toiture propre Yvoire", label: "Démoussage toiture" },
    { url: SI["traitement-hydrofuge-toiture"][1].url, alt: "Effet hydrofuge Yvoire", label: "Traitement hydrofuge" },
    { url: SI["etancheite-toit-terrasse-epdm"][2].url, alt: "EPDM collé Yvoire", label: "Étanchéité toit terrasse" },
  ],
  "messery": [
    { url: SI["couverture-toiture"][1].url, alt: "Ardoises posées Messery", label: "Pose ardoises" },
    { url: SI["demoussage-nettoyage-toiture"][0].url, alt: "Démoussage haute pression Messery", label: "Démoussage toiture" },
    { url: SI["revetement-hydrofuge-teinte"][3].url, alt: "Résultat revêtement Messery", label: "Revêtement teinté" },
    { url: SI["etancheite-toit-terrasse-epdm"][3].url, alt: "Finition étanchéité Messery", label: "Étanchéité toit terrasse" },
  ],
};

// Fallback si la commune n'est pas dans la map
const DEFAULT_PHOTOS = [
  { url: SI["couverture-toiture"][0].url, alt: "Remplacement couverture toiture Haute-Savoie", label: "Remplacement couverture" },
  { url: SI["demoussage-nettoyage-toiture"][0].url, alt: "Démoussage toiture Haute-Savoie", label: "Démoussage toiture" },
  { url: IMAGES.hero, alt: "Urgence toiture bâchage Haute-Savoie", label: "Urgence toiture — bâchage" },
  { url: SI["etancheite-toit-terrasse-epdm"][0].url, alt: "Étanchéité toit terrasse EPDM Haute-Savoie", label: "Étanchéité toit terrasse" },
];

export default function CommunePhotoGallery({ commune, slug }) {
  const photos = COMMUNE_PHOTOS[slug] || DEFAULT_PHOTOS;

  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-heading text-xl md:text-2xl font-bold mb-6 text-center">
          Nos réalisations à {commune} et en Haute-Savoie
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {photos.map((photo, i) => (
            <div key={i} className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-muted">
              <img
                src={photo.url}
                alt={photo.alt}
                title={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-2 left-3 right-3 text-white text-xs font-semibold drop-shadow leading-tight">
                {photo.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}