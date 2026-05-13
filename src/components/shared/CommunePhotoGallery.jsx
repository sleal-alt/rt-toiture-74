import React from "react";
import { SERVICE_IMAGES, IMAGES } from "@/lib/images";

// 3 images sélectionnées parmi les services pour illustrer une page commune
const GALLERY_PHOTOS = [
  {
    ...SERVICE_IMAGES["demoussage-nettoyage-toiture"][1],
    label: "Nettoyage toiture",
  },
  {
    ...SERVICE_IMAGES["couverture-toiture"][2],
    label: "Réfection couverture",
  },
  {
    ...SERVICE_IMAGES["zinguerie"][1],
    label: "Travaux de zinguerie",
  },
  {
    url: IMAGES.artisan,
    alt: "Artisan couvreur professionnel certifié RGE Haute-Savoie au travail",
    label: "Artisan certifié RGE",
  },
];

export default function CommunePhotoGallery({ commune }) {
  return (
    <section className="py-12 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-heading text-xl md:text-2xl font-bold mb-6 text-center">
          Nos réalisations à {commune} et en Haute-Savoie
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {GALLERY_PHOTOS.map((photo, i) => (
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