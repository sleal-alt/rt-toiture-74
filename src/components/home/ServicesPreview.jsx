import React from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "@/lib/siteData";
import SectionHeading from "@/components/shared/SectionHeading";
import { ArrowRight } from "lucide-react";
import { SERVICE_IMAGES } from "@/lib/images";
import { motion } from "framer-motion";

export default function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Nos Expertises"
          title="Services de Couverture en Haute-Savoie"
          subtitle="De la rénovation complète au simple nettoyage, nous intervenons sur tous les types de toitures avec des solutions adaptées au climat alpin."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const image = SERVICE_IMAGES[service.slug]?.[0];
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                    {image ? (
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <h3 className="absolute bottom-3 left-4 right-4 font-heading font-bold text-white text-base leading-tight drop-shadow">
                      {service.shortTitle}
                    </h3>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{service.description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/8 px-3 py-1.5 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200">
                      En savoir plus <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}