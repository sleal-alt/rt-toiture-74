import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICE_IMAGES } from "@/lib/images";

export default function ServiceCard({ service }) {
  const image = SERVICE_IMAGES[service.slug]?.[0];

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        {image ? (
          <img
            src={image.url}
            alt={image.alt}
            title={image.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-muted" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <h3 className="absolute bottom-3 left-4 right-4 font-heading font-bold text-white text-lg leading-tight drop-shadow">
          {service.shortTitle}
        </h3>
      </div>
      <div className="p-5">
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          En savoir plus <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}