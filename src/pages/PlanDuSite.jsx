import React from "react";
import { Link } from "react-router-dom";
import { SERVICES, COMMUNES } from "@/lib/siteData";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export default function PlanDuSite() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Plan du Site" }]} />
      <section className="py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="font-heading text-3xl font-bold mb-10">Plan du Site</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h2 className="font-heading font-bold text-xl mb-4">Pages Principales</h2>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Accueil", path: "/" },
                  { label: "Services", path: "/services" },
                  { label: "Réalisations", path: "/realisations" },
                  { label: "Avis Clients", path: "/avis" },
                  { label: "À Propos", path: "/a-propos" },
                  { label: "Blog", path: "/blog" },
                  { label: "Contact", path: "/contact" },
                  { label: "Devis Gratuit", path: "/devis" },
                  { label: "Mentions Légales", path: "/mentions-legales" },
                ].map(l => (
                  <li key={l.path}><Link to={l.path} className="text-primary hover:underline">{l.label}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl mb-4">Services</h2>
              <ul className="space-y-2 text-sm">
                {SERVICES.map(s => (
                  <li key={s.slug}><Link to={`/services/${s.slug}`} className="text-primary hover:underline">{s.title} Haute-Savoie</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-xl mb-4">Zones d'Intervention</h2>
              <ul className="space-y-2 text-sm">
                {COMMUNES.map(c => (
                  <li key={c.slug}><Link to={`/couvreur/${c.slug}`} className="text-primary hover:underline">Couvreur {c.name} ({c.code})</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}