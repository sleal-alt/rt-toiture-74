import React from "react";
import { COMPANY } from "@/lib/siteData";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ContactForm from "@/components/shared/ContactForm";
import { Phone, Shield, Clock, Award, Check } from "lucide-react";

export default function Devis() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Demande de Devis" }]} />

      <section className="bg-accent py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Demande de Devis Gratuit
          </h1>
          <p className="text-white/70 text-lg">
            Recevez votre devis personnalisé sous 24h — Sans engagement — 100% gratuit
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border/50 shadow-lg">
                <h2 className="font-heading text-2xl font-bold mb-2">Décrivez votre Projet</h2>
                <p className="text-muted-foreground mb-6">
                  Plus vous détaillez votre demande, plus notre devis sera précis.
                </p>
                <ContactForm source="devis" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Phone CTA */}
              <div className="bg-primary rounded-2xl p-6 text-center">
                <Phone className="w-10 h-10 text-primary-foreground mx-auto mb-3" />
                <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">Appelez-nous</h3>
                <a href={COMPANY.phoneTel} className="text-2xl font-bold text-primary-foreground hover:underline">
                  {COMPANY.phone}
                </a>
                <p className="text-primary-foreground/70 text-sm mt-2">Lun-Sam : 7h-19h • Urgences 7j/7</p>
              </div>

              {/* Benefits */}
              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <h3 className="font-heading font-bold mb-4">Pourquoi nous choisir ?</h3>
                <ul className="space-y-3">
                  {[
                    "Devis gratuit et sans engagement",
                    "Réponse sous 24 heures",
                    "Artisan certifié RGE",
                    "Garantie hydrofuge 10 ans",
                    "Intervention dans tout le 74",
                    "Urgence 7j/7 disponible",
                    "Assurance décennale",
                    "Tarifs compétitifs",
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Shield, label: "RGE" },
                  { icon: Clock, label: "7j/7" },
                  { icon: Award, label: "10 ans" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="bg-card rounded-xl p-4 border border-border/50 text-center">
                    <Icon className="w-6 h-6 text-primary mx-auto mb-1" />
                    <p className="text-xs font-semibold">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}