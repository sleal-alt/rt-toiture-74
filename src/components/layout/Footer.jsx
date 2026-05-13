import React from "react";
import { Link } from "react-router-dom";
import { COMPANY, SERVICES, COMMUNES } from "@/lib/siteData";
import { Phone, Mail, MapPin, Clock, Shield, Award, Star, ExternalLink } from "lucide-react";
import GoogleReviewButton from "@/components/shared/GoogleReviewButton";

const GOOGLE_BUSINESS_URL = "https://share.google/9bjVg8JW1pUi7lBct";

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
          <div className="flex items-center gap-2 text-sm mb-4"><Award className="w-4 h-4 text-secondary" /> Garantie 10 ans hydrofuge</div>

          {/* Google rating */}
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-card/10 hover:bg-card/20 border border-white/10 rounded-xl px-3 py-2 transition-colors mb-3"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="text-xs text-accent-foreground/80 font-medium">4,9 — 47 avis</span>
            <ExternalLink className="w-3 h-3 text-accent-foreground/50" />
          </a>

          <GoogleReviewButton className="text-sm py-2 px-4" />
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
        <div className="max-w-7xl mx-auto px-6 py-4 pb-36 lg:pb-4 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© 2025 {COMPANY.name} — SIRET {COMPANY.siret}</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/mentions-legales" className="hover:text-primary transition">Mentions légales</Link>
            <Link to="/politique-confidentialite" className="hover:text-primary transition">Confidentialité</Link>
            <Link to="/cookies" className="hover:text-primary transition">Cookies</Link>
            <Link to="/plan-du-site" className="hover:text-primary transition">Plan du site</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}