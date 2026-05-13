import React from "react";
import { SERVICE_IMAGES, IMAGES } from "@/lib/images";

// Pool complet de toutes les photos disponibles
const ALL_PHOTOS = [
  { url: SERVICE_IMAGES["demoussage-nettoyage-toiture"][0].url, alt: SERVICE_IMAGES["demoussage-nettoyage-toiture"][0].alt, label: "Nettoyage haute pression" },
  { url: SERVICE_IMAGES["demoussage-nettoyage-toiture"][1].url, alt: SERVICE_IMAGES["demoussage-nettoyage-toiture"][1].alt, label: "Avant / après démoussage" },
  { url: SERVICE_IMAGES["demoussage-nettoyage-toiture"][2].url, alt: SERVICE_IMAGES["demoussage-nettoyage-toiture"][2].alt, label: "Matériel professionnel" },
  { url: SERVICE_IMAGES["demoussage-nettoyage-toiture"][3].url, alt: SERVICE_IMAGES["demoussage-nettoyage-toiture"][3].alt, label: "Toiture propre et protégée" },
  { url: SERVICE_IMAGES["traitement-hydrofuge-toiture"][0].url, alt: SERVICE_IMAGES["traitement-hydrofuge-toiture"][0].alt, label: "Traitement hydrofuge" },
  { url: SERVICE_IMAGES["traitement-hydrofuge-toiture"][1].url, alt: SERVICE_IMAGES["traitement-hydrofuge-toiture"][1].alt, label: "Imperméabilisation totale" },
  { url: SERVICE_IMAGES["traitement-fongicide-toiture"][0].url, alt: SERVICE_IMAGES["traitement-fongicide-toiture"][0].alt, label: "Traitement fongicide" },
  { url: SERVICE_IMAGES["traitement-fongicide-toiture"][1].url, alt: SERVICE_IMAGES["traitement-fongicide-toiture"][1].alt, label: "Protection anti-mousse" },
  { url: SERVICE_IMAGES["revetement-hydrofuge-teinte"][0].url, alt: SERVICE_IMAGES["revetement-hydrofuge-teinte"][0].alt, label: "Revêtement teinté" },
  { url: SERVICE_IMAGES["revetement-hydrofuge-teinte"][1].url, alt: SERVICE_IMAGES["revetement-hydrofuge-teinte"][1].alt, label: "Choix de teintes" },
  { url: SERVICE_IMAGES["revetement-hydrofuge-teinte"][2].url, alt: SERVICE_IMAGES["revetement-hydrofuge-teinte"][2].alt, label: "Application au rouleau" },
  { url: SERVICE_IMAGES["revetement-hydrofuge-teinte"][3].url, alt: SERVICE_IMAGES["revetement-hydrofuge-teinte"][3].alt, label: "Résultat final" },
  { url: SERVICE_IMAGES["peinture-toiture"][0].url, alt: SERVICE_IMAGES["peinture-toiture"][0].alt, label: "Peinture toiture" },
  { url: SERVICE_IMAGES["peinture-toiture"][1].url, alt: SERVICE_IMAGES["peinture-toiture"][1].alt, label: "Résultat spectaculaire" },
  { url: SERVICE_IMAGES["couverture-toiture"][0].url, alt: SERVICE_IMAGES["couverture-toiture"][0].alt, label: "Pose de tuiles neuves" },
  { url: SERVICE_IMAGES["couverture-toiture"][1].url, alt: SERVICE_IMAGES["couverture-toiture"][1].alt, label: "Pose ardoises" },
  { url: SERVICE_IMAGES["couverture-toiture"][2].url, alt: SERVICE_IMAGES["couverture-toiture"][2].alt, label: "Réfection complète" },
  { url: SERVICE_IMAGES["etancheite-toit-terrasse-epdm"][0].url, alt: SERVICE_IMAGES["etancheite-toit-terrasse-epdm"][0].alt, label: "Étanchéité EPDM" },
  { url: SERVICE_IMAGES["etancheite-toit-terrasse-epdm"][1].url, alt: SERVICE_IMAGES["etancheite-toit-terrasse-epdm"][1].alt, label: "Toit terrasse parfait" },
  { url: SERVICE_IMAGES["zinguerie"][0].url, alt: SERVICE_IMAGES["zinguerie"][0].alt, label: "Pose gouttières zinc" },
  { url: SERVICE_IMAGES["zinguerie"][1].url, alt: SERVICE_IMAGES["zinguerie"][1].alt, label: "Gouttières zinc et cuivre" },
  { url: SERVICE_IMAGES["zinguerie"][2].url, alt: SERVICE_IMAGES["zinguerie"][2].alt, label: "Abergement cheminée" },
  { url: IMAGES.artisan, alt: "Artisan couvreur professionnel certifié RGE Haute-Savoie", label: "Artisan certifié RGE" },
  { url: IMAGES.beforeAfter, alt: "Avant après rénovation toiture Haute-Savoie résultat professionnel", label: "Avant / après rénovation" },
];

// Génère un offset déterministe à partir du slug pour avoir des photos différentes par page
function getSlugOffset(slug) {
  if (!slug) return 0;
  return slug.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
}

export default function CommunePhotoGallery({ commune, slug }) {
  const offset = getSlugOffset(slug);
  // Sélectionne 4 photos uniques décalées selon le slug
  const photos = Array.from({ length: 4 }, (_, i) => ALL_PHOTOS[(offset + i * 5) % ALL_PHOTOS.length]);

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