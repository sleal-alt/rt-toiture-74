import React from "react";
import { Link } from "react-router-dom";
import { COMPANY, SERVICES, COMMUNES } from "@/lib/siteData";
import { Phone, Mail, MapPin, Clock, Shield, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      {/* CTA Band */}
      <div className="bg-primary py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-heading font-bold text-primary-foreground">Besoin d'un couvreur en Haute-Savoie ?</h3>
            <p className="text-primary-foreground/80 mt-1">Devis gratuit sous 24h • Intervention rapide • Garantie 10 ans</p>
          </div>
          <div className="flex gap-3">
            <a href={COMPANY.phoneTel} className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-lg hover:bg-white/90 transition">
              <Phone className="w-5 h-5" /> Appeler
            </a>
            <Link to="/devis" className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition">
              Devis Gratuit
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">RT</span>
            </div>
            <div>
              <p className="font-heading font-bold text-sm">RT Toiture 74</p>
              <p className="text-xs text-muted-foreground">Couvreur Haute-Savoie</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Artisan couvreur certifié RGE en Haute-Savoie. Rénovation, nettoyage et traitement de toiture. Intervention rapide dans tout le département 74.
          </p>
          <div className="flex items-center gap-2 text-sm mb-2"><Shield className="w-4 h-4 text-primary" /> Certifié RGE</div>
          <div className="flex items-center gap-2 text-sm"><Award className="w-4 h-4 text-secondary" /> Garantie 10 ans hydrofuge</div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-bold mb-4">Nos Services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.map(s => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="text-muted-foreground hover:text-primary transition">{s.shortTitle}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Zones */}
        <div>
          <h4 className="font-heading font-bold mb-4">Zones d'Intervention</h4>
          <ul className="space-y-2 text-sm">
            {COMMUNES.slice(0, 10).map(c => (
              <li key={c.slug}>
                <Link to={`/couvreur/${c.slug}`} className="text-muted-foreground hover:text-primary transition">Couvreur {c.name}</Link>
              </li>
            ))}
            <li>
              <Link to="/services" className="text-primary font-medium hover:underline">Voir toutes les zones →</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold mb-4">Contact</h4>
          <div className="space-y-3 text-sm">
            <a href={COMPANY.phoneTel} className="flex items-start gap-3 text-muted-foreground hover:text-primary transition">
              <Phone className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{COMPANY.phone}</span>
            </a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-3 text-muted-foreground hover:text-primary transition">
              <Mail className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{COMPANY.email}</span>
            </a>
            <div className="flex items-start gap-3 text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{COMPANY.address}</span>
            </div>
            <div className="flex items-start gap-3 text-muted-foreground">
              <Clock className="w-4 h-4 mt-0.5 shrink-0" />
              <span>Lun-Sam : 7h-19h • Urgences 7j/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© 2025 {COMPANY.name} — SIRET {COMPANY.siret}</p>
          <div className="flex gap-4">
            <Link to="/mentions-legales" className="hover:text-primary transition">Mentions légales</Link>
            <Link to="/politique-confidentialite" className="hover:text-primary transition">Politique de confidentialité</Link>
            <Link to="/plan-du-site" className="hover:text-primary transition">Plan du site</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}