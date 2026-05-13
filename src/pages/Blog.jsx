import React, { useState } from "react";
import { BLOG_THEMES } from "@/lib/siteData";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import CTABand from "@/components/shared/CTABand";
import { Droplets, Hammer, Layers, Zap, Info, ChevronRight, ArrowLeft, BookOpen } from "lucide-react";

const ICONS = { Droplets, Hammer, Layers, Zap, Info };

const THEME_STYLES = {
  blue:   { gradient: "from-blue-500 to-blue-700",   light: "bg-blue-50 text-blue-700 border-blue-200",   dot: "bg-blue-500",   iconBg: "bg-blue-100",   iconText: "text-blue-600",   tag: "bg-blue-100 text-blue-600" },
  orange: { gradient: "from-orange-500 to-red-600",  light: "bg-orange-50 text-orange-700 border-orange-200", dot: "bg-orange-500", iconBg: "bg-orange-100", iconText: "text-orange-600", tag: "bg-orange-100 text-orange-600" },
  slate:  { gradient: "from-slate-600 to-slate-800", light: "bg-slate-50 text-slate-700 border-slate-200",  dot: "bg-slate-500",  iconBg: "bg-slate-100",  iconText: "text-slate-600",  tag: "bg-slate-100 text-slate-600" },
  green:  { gradient: "from-emerald-500 to-green-700", light: "bg-green-50 text-green-700 border-green-200", dot: "bg-green-500", iconBg: "bg-green-100",  iconText: "text-green-600",  tag: "bg-green-100 text-green-600" },
  purple: { gradient: "from-purple-500 to-violet-700", light: "bg-purple-50 text-purple-700 border-purple-200", dot: "bg-purple-500", iconBg: "bg-purple-100", iconText: "text-purple-600", tag: "bg-purple-100 text-purple-600" },
};

function ThemeCard({ theme, onClick }) {
  const style = THEME_STYLES[theme.color];
  const Icon = ICONS[theme.icon];
  const count = theme.subthemes.reduce((a, s) => a + s.articles.length, 0);

  return (
    <button
      onClick={onClick}
      className="group text-left bg-card border border-border/60 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full"
    >
      <div className={`h-28 bg-gradient-to-br ${style.gradient} flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_30%,white,transparent)]" />
        <Icon className="w-12 h-12 text-white/90 relative z-10" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-heading font-bold text-base leading-snug group-hover:text-primary transition-colors">{theme.label}</h3>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${style.tag}`}>{count} articles</span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{theme.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {theme.subthemes.map((s, i) => (
            <span key={i} className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full">{s.label}</span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          Explorer le thème <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </button>
  );
}

function ThemeDetail({ theme, onBack }) {
  const style = THEME_STYLES[theme.color];
  const Icon = ICONS[theme.icon];
  const count = theme.subthemes.reduce((a, s) => a + s.articles.length, 0);

  return (
    <div>
      {/* Back */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" /> Retour aux thèmes
      </button>

      {/* Header */}
      <div className={`flex items-center gap-5 p-6 rounded-2xl bg-gradient-to-br ${style.gradient} text-white mb-8`}>
        <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
          <Icon className="w-7 h-7 text-white" />
        </div>
        <div>
          <h2 className="font-heading text-xl font-bold mb-1">{theme.label}</h2>
          <p className="text-white/75 text-sm">{theme.description}</p>
        </div>
        <div className="ml-auto text-right hidden sm:block shrink-0">
          <p className="text-3xl font-bold">{count}</p>
          <p className="text-white/70 text-xs">articles</p>
        </div>
      </div>

      {/* Sous-thèmes */}
      <div className="space-y-10">
        {theme.subthemes.map((sub, si) => (
          <div key={si}>
            <div className="flex items-center gap-3 mb-4">
              <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${style.dot}`} />
              <h3 className="font-heading font-bold text-base">{sub.label}</h3>
              <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${style.light}`}>
                {sub.articles.length} articles
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sub.articles.map((article, ai) => (
                <div
                  key={ai}
                  className="group flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50 hover:border-primary/25 hover:shadow-md cursor-pointer transition-all"
                >
                  <BookOpen className="w-4 h-4 text-muted-foreground/40 shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
                  <div>
                    <p className="text-sm font-medium leading-snug group-hover:text-primary transition-colors">
                      {article.title}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-1.5 text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Lire <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Blog() {
  const [activeTheme, setActiveTheme] = useState(null);
  const totalArticles = BLOG_THEMES.reduce((acc, t) => acc + t.subthemes.reduce((a, s) => a + s.articles.length, 0), 0);
  const currentTheme = BLOG_THEMES.find(t => t.id === activeTheme);

  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />

      <section className="bg-accent py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-4">
            Blog Toiture — Conseils Expert
          </h1>
          <p className="text-white/70 text-lg mb-5">
            Guides et conseils d'experts pour entretenir, rénover et protéger votre toiture en Haute-Savoie.
          </p>
          <span className="inline-block bg-white/10 text-white/80 text-sm px-4 py-1.5 rounded-full border border-white/20">
            {totalArticles} articles · {BLOG_THEMES.length} thèmes
          </span>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6">
          {!currentTheme ? (
            <>
              <p className="text-muted-foreground text-sm mb-8 text-center">Choisissez un thème pour explorer les articles</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {BLOG_THEMES.map(theme => (
                  <ThemeCard key={theme.id} theme={theme} onClick={() => setActiveTheme(theme.id)} />
                ))}
              </div>
            </>
          ) : (
            <ThemeDetail theme={currentTheme} onBack={() => setActiveTheme(null)} />
          )}
        </div>
      </section>

      <CTABand title="Une question sur votre toiture ?" subtitle="Nos experts sont disponibles pour vous conseiller gratuitement." />
    </>
  );
}