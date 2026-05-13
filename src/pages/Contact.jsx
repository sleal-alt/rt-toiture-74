import React from "react";
import { COMPANY } from "@/lib/siteData";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ContactForm from "@/components/shared/ContactForm";
import GoogleReviewButton from "@/components/shared/GoogleReviewButton";
import { Phone, Mail, MapPin, Clock, MessageCircle, Star } from "lucide-react";

export default function Contact() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="bg-accent py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Contactez votre Couvreur en Haute-Savoie
          </h1>
          <p className="text-white/70 text-lg">
            Devis gratuit sous 24h • Intervention rapide • Urgences 7j/7
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">Nos Coordonnées</h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: Phone, label: "Téléphone", value: COMPANY.phone, href: COMPANY.phoneTel, accent: true },
                  { icon: MessageCircle, label: "WhatsApp", value: "Envoyer un message", href: COMPANY.whatsapp },
                  { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
                  { icon: MapPin, label: "Adresse", value: COMPANY.address },
                  { icon: Clock, label: "Horaires", value: "Lun-Sam : 7h-19h • Urgences 7j/7" },
                ].map(({ icon: Icon, label, value, href, accent }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${accent ? "bg-primary/10" : "bg-muted"}`}>
                      <Icon className={`w-5 h-5 ${accent ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{label}</p>
                      {href ? (
                        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} className="font-semibold text-foreground hover:text-primary transition">
                          {value}
                        </a>
                      ) : (
                        <p className="font-semibold">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Google review CTA */}
              <div className="bg-muted/50 rounded-2xl p-5 border border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-sm text-foreground">Travaux terminés ?</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                    <span className="text-xs text-muted-foreground ml-1">4,9/5 — 8 avis</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">Votre avis nous aide à progresser et rassure de futurs clients.</p>
                </div>
                <GoogleReviewButton className="shrink-0 text-sm" />
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-border/50 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.5!2d6.0594!3d45.8715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b8f0b0a3c0001%3A0x0!2zNDXCsDUyJzE3LjQiTiA2wrAwMyczMy44IkU!5e0!3m2!1sfr!2sfr!4v1715000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RT Toiture 74 — Couvreur Haute-Savoie, 48 Route des Creusettes Poisy"
                />
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border/50 shadow-lg">
              <h2 className="font-heading text-2xl font-bold mb-2">Envoyez-nous un Message</h2>
              <p className="text-muted-foreground mb-6">Réponse garantie sous 24 heures.</p>
              <ContactForm source="contact" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}