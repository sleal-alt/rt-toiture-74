import React from "react";
import { Link } from "react-router-dom";
import { COMPANY } from "@/lib/siteData";
import { Phone, ArrowRight, Shield, Clock, Star, Award, Zap, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const BADGES = [
  { icon: Shield, label: "Certifié RGE", color: "text-emerald-400" },
  { icon: Clock,  label: "Urgence 7j/7", color: "text-secondary" },
  { icon: Star,   label: "4.9/5 · 80+ avis", color: "text-yellow-400" },
  { icon: Award,  label: "Garantie 10 ans", color: "text-blue-400" },
];

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Couvreur professionnel Haute-Savoie – Reinhart Timothée Rénovation Toiture"
          className="w-full h-full object-cover"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/97 via-accent/85 to-accent/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-accent/60 via-transparent to-transparent" />
      </div>

      {/* Floating WhatsApp */}
      <a
        href={`https://wa.me/${COMPANY.phone.replace(/\s/g, "")}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-5 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20b558] rounded-full shadow-2xl flex items-center justify-center transition-transform hover:scale-110"
        aria-label="Contacter par WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-0 w-full">
        <div className="max-w-2xl">
          {/* Top badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2.5 mb-7"
          >
            <span className="flex items-center gap-2 bg-primary/25 text-primary-foreground px-3.5 py-1.5 rounded-full text-xs font-bold border border-primary/40 uppercase tracking-wide">
              <Zap className="w-3.5 h-3.5" /> Urgence 7j/7
            </span>
            <span className="flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-bold border border-emerald-400/30 uppercase tracking-wide">
              <Shield className="w-3.5 h-3.5" /> Certifié RGE
            </span>
            <span className="flex items-center gap-2 bg-secondary/20 text-secondary px-3.5 py-1.5 rounded-full text-xs font-bold border border-secondary/30 uppercase tracking-wide">
              <Award className="w-3.5 h-3.5" /> Hydrofuge garanti 10 ans
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.1] tracking-tight"
          >
            Couvreur Haute-Savoie 74{" "}
            <span className="block mt-1 text-secondary">Reinhart Timothée</span>
            <span className="block text-white/90 text-3xl md:text-4xl lg:text-[2.6rem] mt-1">Rénovation Toiture</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-lg md:text-xl text-white/75 leading-relaxed"
          >
            Artisan couvreur local certifié RGE — démoussage, hydrofuge, rénovation et zinguerie.
            <strong className="text-white font-semibold"> Devis gratuit sous 24h</strong>, intervention dans tout le 74.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-9"
          >
            <a href={COMPANY.phoneTel} className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-3 text-lg px-8 h-16 w-full sm:w-auto shadow-2xl shadow-primary/50 border border-primary/50 group"
              >
                <Phone className="w-6 h-6 group-hover:animate-bounce" />
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[11px] font-normal opacity-75 uppercase tracking-wider">Appel gratuit</span>
                  <span>{COMPANY.phone}</span>
                </span>
              </Button>
            </a>
            <Link to="/devis" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/60 text-white hover:bg-white/10 hover:border-white font-bold gap-2 text-base px-8 h-16 w-full sm:w-auto backdrop-blur-sm"
              >
                Devis Gratuit Sous 24h <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
          >
            {BADGES.map(({ icon: Icon, label, color }) => (
              <div key={label} className="flex items-center gap-2 text-white/70">
                <Icon className={`w-4.5 h-4.5 ${color} shrink-0 w-5 h-5`} />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}