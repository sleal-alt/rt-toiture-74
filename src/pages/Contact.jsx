import React from "react";
import { COMPANY } from "@/lib/siteData";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ContactForm from "@/components/shared/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

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

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-border/50 h-64">
                <iframe
                  src={COMPANY.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation couvreur Haute-Savoie"
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