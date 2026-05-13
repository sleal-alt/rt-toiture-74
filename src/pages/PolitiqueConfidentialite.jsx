import React from "react";
import { COMPANY } from "@/lib/siteData";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import { Link } from "react-router-dom";

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="font-heading text-xl font-bold mb-3 text-foreground border-l-4 border-primary pl-4">{title}</h2>
    <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Politique de Confidentialité" }]} />
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-3">Politique de Confidentialité</h1>
          <p className="text-muted-foreground text-sm mb-10">Dernière mise à jour : mai 2025 — Conforme au Règlement Général sur la Protection des Données (RGPD – UE 2016/679)</p>

          <Section title="1. Identité du responsable de traitement">
            <p>
              <strong className="text-foreground">{COMPANY.name}</strong><br />
              Micro-entreprise — SIRET {COMPANY.siret}<br />
              {COMPANY.address}<br />
              Téléphone : {COMPANY.phone}<br />
              Email : <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a>
            </p>
          </Section>

          <Section title="2. Données collectées et finalités">
            <p>Nous collectons uniquement les données strictement nécessaires à la gestion de votre demande :</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong className="text-foreground">Nom et prénom</strong> — identification de votre demande</li>
              <li><strong className="text-foreground">Numéro de téléphone</strong> — prise de contact et rappel</li>
              <li><strong className="text-foreground">Adresse email</strong> — confirmation de réception et échanges écrits</li>
              <li><strong className="text-foreground">Ville / commune</strong> — évaluation de la zone d'intervention</li>
              <li><strong className="text-foreground">Type de prestation</strong> — préparation du devis personnalisé</li>
              <li><strong className="text-foreground">Message libre</strong> — description de votre projet</li>
            </ul>
            <p className="mt-3">Ces données sont collectées via les formulaires de contact et de devis présents sur ce site. Elles sont transmises directement par email à notre artisan et ne font l'objet d'aucun stockage en base de données tierce à des fins commerciales.</p>
          </Section>

          <Section title="3. Base légale du traitement">
            <p>Le traitement de vos données repose sur votre <strong className="text-foreground">consentement explicite</strong> donné lors de l'envoi d'un formulaire (Article 6.1.a du RGPD) et sur l'<strong className="text-foreground">intérêt légitime</strong> de répondre à votre demande de devis ou de renseignement (Article 6.1.f du RGPD).</p>
          </Section>

          <Section title="4. Durée de conservation">
            <p>Vos données sont conservées pour une durée maximale de <strong className="text-foreground">3 ans</strong> à compter de votre dernière interaction avec nous, conformément aux délais de prescription légaux applicables aux contrats de prestation de service.</p>
            <p>Au-delà de cette période, vos données sont supprimées ou anonymisées.</p>
          </Section>

          <Section title="5. Destinataires des données">
            <p>Vos données personnelles sont destinées exclusivement à :</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Timothée Reinhart, artisan couvreur, responsable de traitement</li>
              <li>Les prestataires techniques nécessaires au fonctionnement du site (hébergement Vercel), soumis à des obligations de confidentialité</li>
            </ul>
            <p className="mt-3">Nous ne vendons, ne louons et ne cédons jamais vos données personnelles à des tiers à des fins commerciales.</p>
          </Section>

          <Section title="6. Cookies et traceurs">
            <p>Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Des cookies analytiques (Google Analytics, Google Tag Manager) peuvent être activés <strong className="text-foreground">uniquement après votre consentement explicite</strong>, conformément à la législation en vigueur.</p>
            <p>Vous pouvez gérer vos préférences à tout moment via notre bannière de gestion des cookies ou consulter notre <Link to="/cookies" className="text-primary hover:underline">Politique Cookies</Link>.</p>
          </Section>

          <Section title="7. Vos droits">
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong className="text-foreground">Droit d'accès</strong> — obtenir une copie de vos données</li>
              <li><strong className="text-foreground">Droit de rectification</strong> — corriger des données inexactes</li>
              <li><strong className="text-foreground">Droit à l'effacement</strong> — demander la suppression de vos données</li>
              <li><strong className="text-foreground">Droit d'opposition</strong> — vous opposer à un traitement</li>
              <li><strong className="text-foreground">Droit à la portabilité</strong> — recevoir vos données dans un format lisible</li>
              <li><strong className="text-foreground">Droit de limitation</strong> — limiter le traitement de vos données</li>
            </ul>
            <p className="mt-3">Pour exercer l'un de ces droits, contactez-nous par email à : <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a>. Nous nous engageons à répondre dans un délai d'un mois.</p>
          </Section>

          <Section title="8. Sécurité des données">
            <p>Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte, divulgation ou altération. Notre site est servi en HTTPS (connexion chiffrée).</p>
          </Section>

          <Section title="9. Réclamation auprès de la CNIL">
            <p>Si vous estimez que le traitement de vos données n'est pas conforme à la réglementation, vous avez le droit d'introduire une réclamation auprès de la <strong className="text-foreground">CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) — <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>.</p>
          </Section>

          <Section title="10. Modifications de la présente politique">
            <p>Cette politique de confidentialité peut être mise à jour à tout moment pour refléter des évolutions légales ou techniques. La date de dernière mise à jour est indiquée en haut de cette page. Nous vous invitons à la consulter régulièrement.</p>
          </Section>
        </div>
      </section>
    </>
  );
}