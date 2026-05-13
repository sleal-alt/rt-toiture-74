import React from "react";
import { COMPANY } from "@/lib/siteData";
import { IMAGES } from "@/lib/images";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABand from "@/components/shared/CTABand";
import RGEBadge from "@/components/home/RGEBadge";
import { Shield, MapPin, Award, Heart, Mountain, Hammer } from "lucide-react";

export default function APropos() {
  return (
    <>
      <Breadcrumbs items={[{ label: "À Propos" }]} />

      <section className="bg-accent py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            À Propos — Votre Artisan Couvreur en Haute-Savoie
          </h1>
          <p className="text-white/70 text-lg">
            Découvrez notre histoire, nos valeurs et notre engagement envers l'excellence.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img src={IMAGES.artisan} alt="Timothée Reinhart artisan couvreur Haute-Savoie" className="w-full h-auto" />
            </div>
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 bg-primary/10 text-primary">Notre Histoire</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Reinhart Timothée Rénovation Toiture-Couverture
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Passionné par les métiers du bâtiment et profondément attaché à la Haute-Savoie, Timothée Reinhart a fondé son entreprise de couverture avec une vision claire : offrir aux habitants du département 74 un service de toiture irréprochable, alliant expertise technique, réactivité et tarifs justes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Formé aux techniques traditionnelles et modernes de couverture, certifié RGE, Timothée connaît parfaitement les défis que le climat alpin impose aux toitures de la région. Neige abondante, cycles de gel et dégel, vents violents, précipitations importantes : chaque intervention est pensée pour résister aux conditions extrêmes de la montagne.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Basée à Poisy (74330), l'entreprise intervient dans toute la Haute-Savoie, d'Annecy à Chamonix, de Bonneville à Annemasse, en passant par les stations de Megève et Sallanches. Notre objectif : être le couvreur de référence du département, celui que l'on recommande les yeux fermés.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: MapPin, label: "Basé à Poisy (74)" },
                  { icon: Shield, label: "Certifié RGE" },
                  { icon: Award, label: "Garantie 10 ans" },
                  { icon: Heart, label: "Passion du métier" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
                    <Icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Hammer, title: "Qualité", desc: "Chaque chantier est réalisé avec le même souci du détail et de la perfection. Nous utilisons les meilleurs matériaux et techniques du marché." },
              { icon: Mountain, title: "Expertise Alpine", desc: "Notre connaissance approfondie du climat de la Haute-Savoie nous permet d'adapter chaque intervention aux contraintes spécifiques de la montagne." },
              { icon: Heart, title: "Proximité", desc: "Artisan local, nous construisons des relations durables avec nos clients. Votre satisfaction et votre recommandation sont notre meilleure récompense." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RGEBadge />
      <CTABand />
    </>
  );
}