import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X, ChevronDown, ChevronUp, Check, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "rt_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Small delay for UX — let page render first
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const save = (prefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...prefs, date: new Date().toISOString() }));
    // Activate analytics if accepted
    if (prefs.analytics && typeof window !== "undefined") {
      window.__cookieConsent = { analytics: true, marketing: prefs.marketing };
    }
    setVisible(false);
  };

  const acceptAll = () => save({ analytics: true, marketing: true });
  const refuseAll = () => save({ analytics: false, marketing: false });
  const saveCustom = () => save({ analytics, marketing });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 22, stiffness: 260 }}
          className="fixed bottom-0 left-0 right-0 z-[200] lg:bottom-6 lg:left-6 lg:right-auto lg:max-w-md"
        >
          <div className="bg-card border border-border shadow-2xl rounded-t-2xl lg:rounded-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-accent px-5 py-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shrink-0">
                  <Cookie className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-accent-foreground">Gestion des cookies</p>
                  <p className="text-xs text-muted-foreground">RT Toiture 74 — RGPD</p>
                </div>
              </div>
              <button onClick={refuseAll} className="text-muted-foreground hover:text-foreground transition p-1 rounded-lg hover:bg-muted/50">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="px-5 py-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic.{" "}
                <Link to="/cookies" className="text-primary hover:underline font-medium">En savoir plus</Link>
              </p>

              {/* Customize panel */}
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-3 border-t border-border/50 pt-4">
                      {/* Necessary — always on */}
                      <label className="flex items-start gap-3 cursor-not-allowed opacity-70">
                        <div className="w-10 h-5 bg-primary rounded-full flex items-center justify-end px-0.5 shrink-0 mt-0.5">
                          <div className="w-4 h-4 bg-white rounded-full" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">Cookies nécessaires</p>
                          <p className="text-xs text-muted-foreground">Toujours actifs — nécessaires au fonctionnement du site</p>
                        </div>
                      </label>

                      {/* Analytics */}
                      <label className="flex items-start gap-3 cursor-pointer">
                        <button
                          type="button"
                          onClick={() => setAnalytics(v => !v)}
                          className={`w-10 h-5 rounded-full flex items-center px-0.5 transition-colors shrink-0 mt-0.5 ${analytics ? "bg-primary justify-end" : "bg-muted-foreground/30 justify-start"}`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full shadow" />
                        </button>
                        <div>
                          <p className="text-sm font-semibold text-foreground">Cookies analytiques</p>
                          <p className="text-xs text-muted-foreground">Google Analytics, Google Tag Manager — mesure d'audience anonymisée</p>
                        </div>
                      </label>

                      {/* Marketing */}
                      <label className="flex items-start gap-3 cursor-pointer">
                        <button
                          type="button"
                          onClick={() => setMarketing(v => !v)}
                          className={`w-10 h-5 rounded-full flex items-center px-0.5 transition-colors shrink-0 mt-0.5 ${marketing ? "bg-primary justify-end" : "bg-muted-foreground/30 justify-start"}`}
                        >
                          <div className="w-4 h-4 bg-white rounded-full shadow" />
                        </button>
                        <div>
                          <p className="text-sm font-semibold text-foreground">Cookies marketing</p>
                          <p className="text-xs text-muted-foreground">Meta Pixel — suivi publicitaire (non actif actuellement)</p>
                        </div>
                      </label>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Actions */}
            <div className="px-5 pb-5 space-y-2">
              <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={acceptAll}
                  className="flex-1 bg-primary hover:bg-primary/90 font-bold gap-1.5 text-xs h-9"
                >
                  <Check className="w-3.5 h-3.5" /> Tout accepter
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={refuseAll}
                  className="flex-1 font-bold text-xs h-9 border-border/70"
                >
                  Tout refuser
                </Button>
              </div>
              <button
                onClick={() => expanded ? saveCustom() : setExpanded(true)}
                className="w-full flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-primary transition py-1"
              >
                {expanded ? (
                  <><Check className="w-3.5 h-3.5" /> Enregistrer mes choix</>
                ) : (
                  <><ChevronDown className="w-3.5 h-3.5" /> Personnaliser</>
                )}
              </button>
            </div>

            {/* RGPD mention */}
            <div className="px-5 pb-3 flex items-center gap-1.5">
              <Shield className="w-3 h-3 text-muted-foreground/60 shrink-0" />
              <p className="text-[10px] text-muted-foreground/60">Conforme RGPD — Aucune donnée vendue à des tiers</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}