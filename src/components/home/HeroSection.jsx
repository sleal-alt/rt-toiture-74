import React from "react";
import { Link } from "react-router-dom";
import { COMPANY } from "@/lib/siteData";
import { Phone, ArrowRight, Shield, Clock, Star, Award, Zap, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const TRUST_ITEMS = [
  { icon: Shield,       label: "Certifié RGE",    color: "text-emerald-400" },
  { icon: Clock,        label: "Urgence 7j/7",    color: "text-secondary" },
  { icon: Star,         label: "4.9/5 · 80+ avis",color: "text-yellow-400" },
  { icon: Award,        label: "Garantie 10 ans", color: "text-blue-400" },
];

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Couvreur professionnel Haute-Savoie – Reinhart Timothée Rénovation Toiture"
          className="w-full h-full object-cover object-center"
          fetchpriority="high"
        />
        {/* Stronger gradient so text is crisp */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/80 to-accent/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-accent/70 via-transparent to-transparent" />
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
        <div className="max-w-xl lg:max-w-2xl">

          {/* Top badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
            className="flex flex-wrap items-center gap-2 mb-7"
          >
            <span className="flex items-center gap-1.5 bg-primary text-white px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-lg shadow-primary/40">
              <Zap className="w-3 h-3" /> Urgence 7j/7
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 text-emerald-300 px-3.5 py-1.5 rounded-full text-[11px] font-bold border border-emerald-400/40 uppercase tracking-widest backdrop-blur-sm">
              <Shield className="w-3 h-3" /> Certifié RGE
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 text-secondary px-3.5 py-1.5 rounded-full text-[11px] font-bold border border-secondary/40 uppercase tracking-widest backdrop-blur-sm">
              <Award className="w-3 h-3" /> Hydrofuge garanti 10 ans
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-white leading-[1.08] tracking-tight"
          >
            <span className="block text-4xl md:text-5xl lg:text-6xl">Couvreur</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl">Haute-Savoie 74</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl text-secondary mt-1">Reinhart Timothée</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl text-white/80 font-semibold mt-1.5">Rénovation Toiture</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.22 }}
            className="mt-5 text-base md:text-lg text-white/75 leading-relaxed max-w-lg"
          >
            Artisan couvreur local certifié RGE — démoussage, hydrofuge, rénovation et zinguerie.{" "}
            <strong className="text-white font-semibold">Devis gratuit sous 24h</strong>, intervention dans tout le 74.
          </motion.p>

          {/* USP quick list */}
          <motion.ul
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 flex flex-wrap gap-x-5 gap-y-2"
          >
            {["Devis gratuit & rapide", "Intervention sous 48h", "10 ans d'expérience"].map(item => (
              <li key={item} className="flex items-center gap-1.5 text-white/80 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> {item}
              </li>
            ))}
          </motion.ul>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.38 }}
            className="flex flex-col sm:flex-row gap-3.5 mt-8"
          >
            <a href={COMPANY.phoneTel} className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold gap-3 text-base px-7 h-[60px] w-full sm:w-auto shadow-2xl shadow-primary/50 group rounded-xl"
              >
                <Phone className="w-5 h-5 group-hover:animate-bounce shrink-0" />
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] font-normal opacity-70 uppercase tracking-widest">Appel gratuit</span>
                  <span className="text-lg font-extrabold">{COMPANY.phone}</span>
                </span>
              </Button>
            </a>
            <Link to="/devis" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/70 text-white hover:bg-white/15 hover:border-white font-bold gap-2 text-base px-7 h-[60px] w-full sm:w-auto backdrop-blur-sm rounded-xl"
              >
                Devis Gratuit Sous 24h <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-9 pt-7 border-t border-white/15 flex flex-wrap gap-x-6 gap-y-3"
          >
            {TRUST_ITEMS.map(({ icon: Icon, label, color }) => (
              <div key={label} className="flex items-center gap-2 text-white/70">
                <Icon className={`w-4 h-4 shrink-0 ${color}`} />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}