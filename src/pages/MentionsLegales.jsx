import React from "react";
import { COMPANY } from "@/lib/siteData";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export default function MentionsLegales() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Mentions Légales" }]} />
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 prose prose-slate">
          <h1 className="font-heading text-3xl font-bold mb-8">Mentions Légales</h1>

          <h2 className="font-heading text-xl font-bold mt-8 mb-3">Éditeur du site</h2>
          <p className="text-muted-foreground leading-relaxed">
            <strong>{COMPANY.name}</strong><br />
            Auto-entrepreneur / Micro-entreprise<br />
            SIRET : {COMPANY.siret}<br />
            Adresse : {COMPANY.address}<br />
            Téléphone : {COMPANY.phone}<br />
            Email : {COMPANY.email}
          </p>

          <h2 className="font-heading text-xl font-bold mt-8 mb-3">Directeur de la publication</h2>
          <p className="text-muted-foreground">Timothée Reinhart</p>

          <h2 className="font-heading text-xl font-bold mt-8 mb-3">Hébergement</h2>
          <p className="text-muted-foreground">
            Vercel Inc.<br />
            340 S Lemon Ave #4133<br />
            Walnut, CA 91789, États-Unis
          </p>

          <h2 className="font-heading text-xl font-bold mt-8 mb-3">Propriété intellectuelle</h2>
          <p className="text-muted-foreground leading-relaxed">
            L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes) est la propriété exclusive de {COMPANY.name}, sauf mention contraire. Toute reproduction, distribution, modification, adaptation ou republication est interdite sans l'autorisation écrite préalable de l'éditeur.
          </p>

          <h2 className="font-heading text-xl font-bold mt-8 mb-3">Protection des données personnelles</h2>
          <p className="text-muted-foreground leading-relaxed">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Pour exercer ces droits, contactez-nous à l'adresse : {COMPANY.email}.
          </p>

          <h2 className="font-heading text-xl font-bold mt-8 mb-3">Responsabilité</h2>
          <p className="text-muted-foreground leading-relaxed">
            Les informations disponibles sur ce site sont fournies à titre indicatif. {COMPANY.name} s'efforce de maintenir l'exactitude des contenus mais ne saurait être tenu responsable d'erreurs, omissions ou résultats obtenus suite à une mauvaise utilisation des informations publiées. L'utilisateur est seul responsable de l'utilisation qu'il fait des informations diffusées.
          </p>

          <h2 className="font-heading text-xl font-bold mt-8 mb-3">Cookies</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ce site utilise des cookies nécessaires à son bon fonctionnement ainsi que des cookies analytiques activés uniquement après votre consentement. Consultez notre{" "}
            <a href="/cookies" className="text-primary hover:underline">Politique Cookies</a> pour plus d'informations.
          </p>
        </div>
      </section>
    </>
  );
}