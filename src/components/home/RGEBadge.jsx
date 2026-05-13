import React from "react";
import { Shield, Check, TrendingDown, Euro, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AIDES = [
  { icon: Euro, label: "MaPrimeRénov'" },
  { icon: TrendingDown, label: "Éco-PTZ" },
  { icon: Leaf, label: "Certificats CEE" },
  { icon: Check, label: "TVA réduite 5,5%" },
];

export default function RGEBadge() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-slate-800 to-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,theme(colors.primary.DEFAULT),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <div className="w-36 h-36 rounded-3xl bg-white/10 border-2 border-white/20 flex flex-col items-center justify-center shadow-2xl backdrop-blur">
              <Shield className="w-12 h-12 text-emerald-400 mb-1.5" />
              <span className="text-white font-heading font-black text-2xl tracking-wider">RGE</span>
              <span className="text-white/60 text-xs mt-0.5">Certifié</span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
              Entreprise Partenaire Rénovation Énergétique RGE
            </h2>
            <p className="text-white/65 leading-relaxed mb-6 max-w-xl">
              Notre certification RGE (Reconnu Garant de l'Environnement) vous donne accès aux aides 
              financières de l'État pour vos travaux de toiture. Une économie pouvant atteindre <strong className="text-white">plusieurs milliers d'euros</strong>.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              {AIDES.map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/15 transition">
                  <Icon className="w-4 h-4 text-emerald-400" /> {label}
                </span>
              ))}
            </div>
            <Link
              to="/devis"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm shadow-lg transition"
            >
              Vérifier mes droits aux aides →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}