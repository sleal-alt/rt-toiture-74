import React from "react";
import { SERVICE_IMAGES, IMAGES } from "@/lib/images";

// 4 photos fixes représentant les 4 prestations phares — identiques sur toutes les pages communes
const FIXED_PHOTOS = [
  {
    url: SERVICE_IMAGES["couverture-toiture"][0].url,
    alt: "Remplacement couverture toiture tuiles neuves chalet Haute-Savoie",
    label: "Remplacement couverture",
  },
  {
    url: SERVICE_IMAGES["demoussage-nettoyage-toiture"][0].url,
    alt: "Démoussage nettoyage toiture haute pression Haute-Savoie",
    label: "Démoussage toiture",
  },
  {
    url: IMAGES.hero,
    alt: "Urgence toiture bâchage intervention rapide 7j/7 Haute-Savoie",
    label: "Urgence toiture — bâchage",
  },
  {
    url: SERVICE_IMAGES["etancheite-toit-terrasse-epdm"][0].url,
    alt: "Étanchéité toit terrasse EPDM Retridex professionnel Haute-Savoie",
    label: "Étanchéité toit terrasse",
  },
];

export default function CommunePhotoGallery({ commune, slug }) {
  const photos = FIXED_PHOTOS;

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