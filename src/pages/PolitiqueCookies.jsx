import React from "react";
import { COMPANY } from "@/lib/siteData";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="font-heading text-xl font-bold mb-3 text-foreground border-l-4 border-primary pl-4">{title}</h2>
    <div className="text-muted-foreground leading-relaxed space-y-3">{children}</div>
  </div>
);

const CookieTable = ({ rows }) => (
  <div className="overflow-x-auto mt-4 rounded-xl border border-border/50">
    <table className="w-full text-sm">
      <thead className="bg-muted/60">
        <tr>
          <th className="text-left px-4 py-3 font-semibold text-foreground">Nom</th>
          <th className="text-left px-4 py-3 font-semibold text-foreground">Finalité</th>
          <th className="text-left px-4 py-3 font-semibold text-foreground">Durée</th>
          <th className="text-left px-4 py-3 font-semibold text-foreground">Type</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-muted/20"}>
            <td className="px-4 py-3 font-mono text-xs text-primary">{r.name}</td>
            <td className="px-4 py-3">{r.purpose}</td>
            <td className="px-4 py-3 whitespace-nowrap">{r.duration}</td>
            <td className="px-4 py-3">
              <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                r.type === "Nécessaire" ? "bg-green-100 text-green-700" :
                r.type === "Analytique" ? "bg-blue-100 text-blue-700" :
                "bg-orange-100 text-orange-700"
              }`}>{r.type}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function PolitiqueCookies() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Politique Cookies" }]} />
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-3">Politique de Gestion des Cookies</h1>
          <p className="text-muted-foreground text-sm mb-10">Dernière mise à jour : mai 2025 — Conforme aux recommandations CNIL</p>

          <Section title="1. Qu'est-ce qu'un cookie ?">
            <p>Un cookie est un petit fichier texte déposé sur votre navigateur lors de la visite d'un site web. Il permet au site de mémoriser certaines informations lors de votre navigation (préférences, session, etc.) ou d'analyser votre comportement de visite.</p>
            <p>Certains cookies sont strictement nécessaires au fonctionnement du site ; d'autres, soumis à votre consentement, permettent d'analyser le trafic ou de personnaliser votre expérience.</p>
          </Section>

          <Section title="2. Cookies utilisés sur ce site">
            <p><strong className="text-foreground">Cookies nécessaires</strong> — actifs sans consentement :</p>
            <CookieTable rows={[
              { name: "rt_cookie_consent", purpose: "Mémorisation de vos choix de consentement cookies", duration: "12 mois", type: "Nécessaire" },
              { name: "session", purpose: "Maintien de votre session de navigation", duration: "Session", type: "Nécessaire" },
            ]} />

            <p className="mt-6"><strong className="text-foreground">Cookies analytiques</strong> — activés après consentement uniquement :</p>
            <CookieTable rows={[
              { name: "_ga", purpose: "Google Analytics — identifiant visiteur unique", duration: "2 ans", type: "Analytique" },
              { name: "_ga_*", purpose: "Google Analytics 4 — session et interactions", duration: "2 ans", type: "Analytique" },
              { name: "_gtm_*", purpose: "Google Tag Manager — gestion des balises de suivi", duration: "Session", type: "Analytique" },
              { name: "_fbp", purpose: "Meta Pixel — suivi des conversions publicitaires (futur)", duration: "3 mois", type: "Marketing" },
            ]} />
          </Section>

          <Section title="3. Gestion de votre consentement">
            <p>Lors de votre première visite, une bannière vous invite à accepter, refuser ou personnaliser l'utilisation des cookies non nécessaires. Vous pouvez modifier vos choix à tout moment.</p>
            <p>En cas de refus, seuls les cookies strictement nécessaires au fonctionnement du site sont déposés. Aucun cookie analytique ou marketing n'est activé.</p>
          </Section>

          <Section title="4. Comment désactiver les cookies dans votre navigateur ?">
            <p>Vous pouvez également gérer vos cookies directement depuis les paramètres de votre navigateur :</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/fr/kb/protection-renforcee-contre-le-pistage-firefox" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
            </ul>
            <p className="mt-3">Attention : la désactivation des cookies peut altérer certaines fonctionnalités du site.</p>
          </Section>

          <Section title="5. Contact">
            <p>Pour toute question concernant notre politique de cookies, contactez-nous à : <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">{COMPANY.email}</a></p>
          </Section>
        </div>
      </section>
    </>
  );
}