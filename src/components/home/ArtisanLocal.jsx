import React from "react";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";
import { MapPin, CheckCircle } from "lucide-react";

const STATS = [
  { value: "500+", label: "Toitures traitées" },
  { value: "10 ans", label: "Garantie hydrofuge" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "24h", label: "Délai devis gratuit" },
];

const ATOUTS = [
  "Connaissance des spécificités climatiques alpines (neige, gel, vent)",
  "Matériaux adaptés aux contraintes de la montagne",
  "Artisan local basé à Poisy, au cœur de la Haute-Savoie",
  "Intervention rapide dans tous les vallées et massifs du 74",
];

export default function ArtisanLocal() {
  return (
    <section className="py-20 lg:py-28 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src={IMAGES.artisan}
                alt="Reinhart Timothée – Artisan couvreur certifié RGE en Haute-Savoie"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white font-heading font-bold text-lg">Reinhart Timothée</p>
                <p className="text-white/70 text-sm flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" /> Artisan couvreur · Poisy, Haute-Savoie
                </p>
              </div>
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-primary text-primary-foreground rounded-2xl p-5 shadow-2xl">
              <p className="text-3xl font-heading font-bold">+15 ans</p>
              <p className="text-primary-foreground/80 text-sm">d'expertise toiture</p>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 bg-primary/10 text-primary">
              Artisan Local Haute-Savoie
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-5">
              Un Couvreur qui Connaît Votre Région,<br />
              <span className="text-primary">Votre Climat, Votre Toiture</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              En Haute-Savoie, les toitures font face à des conditions extrêmes : neige abondante, gel intense, 
              humidité persistante des vallées alpines. Une expertise locale n'est pas un luxe — c'est une nécessité.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-7">
              Basé à Poisy, j'interviens au quotidien sur les toitures du 74 depuis plus de 15 ans. 
              Je connais les matériaux qui résistent aux hivers alpins, les techniques adaptées aux pentes des chalets, 
              et surtout, je suis disponible rapidement quand vous avez besoin.
            </p>

            <ul className="space-y-3 mb-8">
              {ATOUTS.map(a => (
                <li key={a} className="flex items-start gap-3 text-sm">
                  <CheckCircle className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5 w-5 h-5" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-border">
              {STATS.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="font-heading text-2xl font-bold text-primary">{value}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}