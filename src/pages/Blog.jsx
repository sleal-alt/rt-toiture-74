import React from "react";
import { BLOG_IDEAS } from "@/lib/siteData";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABand from "@/components/shared/CTABand";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";

export default function Blog() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />

      <section className="bg-accent py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Blog Toiture — Conseils Expert Couvreur Haute-Savoie
          </h1>
          <p className="text-white/70 text-lg">
            Guides, conseils et actualités sur la couverture, l'entretien et la rénovation de toiture en Haute-Savoie.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_IDEAS.map((article, i) => (
              <article key={i} className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all group">
                <div className="h-40 bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-primary/30" />
                </div>
                <div className="p-5">
                  <h2 className="font-heading font-bold text-base mb-3 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Lire l'article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Une question sur votre toiture ?" subtitle="Nos experts sont disponibles pour vous conseiller gratuitement." />
    </>
  );
}