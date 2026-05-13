import React, { useState } from "react";
import { BLOG_THEMES } from "@/lib/siteData";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABand from "@/components/shared/CTABand";
import { Droplets, Hammer, Layers, Zap, Info, ChevronRight, BookOpen } from "lucide-react";

const ICONS = { Droplets, Hammer, Layers, Zap, Info };

const THEME_COLORS = {
  blue:   { bg: "bg-blue-50",   border: "border-blue-200",   icon: "text-blue-600",   badge: "bg-blue-100 text-blue-700",   activeBg: "bg-blue-600 text-white",   dot: "bg-blue-500" },
  orange: { bg: "bg-orange-50", border: "border-orange-200", icon: "text-orange-600", badge: "bg-orange-100 text-orange-700", activeBg: "bg-orange-600 text-white", dot: "bg-orange-500" },
  slate:  { bg: "bg-slate-50",  border: "border-slate-200",  icon: "text-slate-600",  badge: "bg-slate-100 text-slate-700",  activeBg: "bg-slate-700 text-white",  dot: "bg-slate-500" },
  green:  { bg: "bg-green-50",  border: "border-green-200",  icon: "text-green-600",  badge: "bg-green-100 text-green-700",  activeBg: "bg-green-600 text-white",  dot: "bg-green-500" },
  purple: { bg: "bg-purple-50", border: "border-purple-200", icon: "text-purple-600", badge: "bg-purple-100 text-purple-700", activeBg: "bg-purple-600 text-white", dot: "bg-purple-500" },
};

export default function Blog() {
  const [activeTheme, setActiveTheme] = useState(BLOG_THEMES[0].id);

  const currentTheme = BLOG_THEMES.find(t => t.id === activeTheme);
  const totalArticles = BLOG_THEMES.reduce((acc, t) => acc + t.subthemes.reduce((a, s) => a + s.articles.length, 0), 0);

  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />

      {/* Hero */}
      <section className="bg-accent py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Blog Toiture — Conseils Expert Couvreur Haute-Savoie
          </h1>
          <p className="text-white/70 text-lg mb-4">
            Guides, conseils et actualités sur la couverture, l'entretien et la rénovation de toiture en Haute-Savoie.
          </p>
          <span className="inline-block bg-white/10 text-white/80 text-sm px-4 py-1.5 rounded-full">
            {totalArticles} articles • {BLOG_THEMES.length} thèmes
          </span>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Sidebar thèmes */}
            <aside className="lg:w-72 shrink-0">
              <h2 className="font-heading text-lg font-bold mb-4 text-foreground">Thèmes</h2>
              <nav className="flex flex-col gap-2">
                {BLOG_THEMES.map(theme => {
                  const Icon = ICONS[theme.icon];
                  const colors = THEME_COLORS[theme.color];
                  const isActive = activeTheme === theme.id;
                  const articleCount = theme.subthemes.reduce((a, s) => a + s.articles.length, 0);
                  return (
                    <button
                      key={theme.id}
                      onClick={() => setActiveTheme(theme.id)}
                      className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl border transition-all ${
                        isActive
                          ? `${colors.activeBg} border-transparent shadow-md`
                          : `bg-card border-border/50 hover:border-primary/30 hover:bg-muted/50`
                      }`}
                    >
                      <Icon className={`w-5 h-5 shrink-0 ${isActive ? "text-white" : colors.icon}`} />
                      <span className="font-medium text-sm flex-1 leading-tight">{theme.label}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${isActive ? "bg-white/20 text-white" : colors.badge}`}>
                        {articleCount}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Contenu thème actif */}
            <div className="flex-1 min-w-0">
              {currentTheme && (() => {
                const colors = THEME_COLORS[currentTheme.color];
                const Icon = ICONS[currentTheme.icon];
                return (
                  <div>
                    {/* Header thème */}
                    <div className={`flex items-start gap-4 p-5 rounded-2xl border mb-8 ${colors.bg} ${colors.border}`}>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm shrink-0`}>
                        <Icon className={`w-6 h-6 ${colors.icon}`} />
                      </div>
                      <div>
                        <h2 className="font-heading text-xl font-bold mb-1">{currentTheme.label}</h2>
                        <p className="text-muted-foreground text-sm">{currentTheme.description}</p>
                      </div>
                    </div>

                    {/* Sous-thèmes */}
                    <div className="space-y-8">
                      {currentTheme.subthemes.map((sub, si) => (
                        <div key={si}>
                          <div className="flex items-center gap-3 mb-4">
                            <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                            <h3 className="font-heading text-base font-bold text-foreground">{sub.label}</h3>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${colors.badge}`}>{sub.articles.length} articles</span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {sub.articles.map((article, ai) => (
                              <article
                                key={ai}
                                className="group flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-md transition-all cursor-pointer"
                              >
                                <BookOpen className="w-4 h-4 text-muted-foreground/50 shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
                                <div className="min-w-0">
                                  <h4 className="font-medium text-sm leading-snug group-hover:text-primary transition-colors">
                                    {article.title}
                                  </h4>
                                  <span className="inline-flex items-center gap-1 mt-2 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                                    Lire l'article <ChevronRight className="w-3 h-3" />
                                  </span>
                                </div>
                              </article>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      <CTABand title="Une question sur votre toiture ?" subtitle="Nos experts sont disponibles pour vous conseiller gratuitement." />
    </>
  );
}