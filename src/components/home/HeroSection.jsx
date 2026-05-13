import React from "react";
import { Link } from "react-router-dom";
import { COMPANY } from "@/lib/siteData";
import { Phone, ArrowRight, Shield, Clock, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Couvreur professionnel en Haute-Savoie travaillant sur une toiture avec vue sur les Alpes" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/80 to-accent/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-0 w-full">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold border border-primary/30">
                ⭐ Artisan Certifié RGE
              </span>
              <span className="bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold border border-secondary/30">
                Garantie 10 ans
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Couvreur Expert en{" "}
            <span className="text-secondary">Haute-Savoie</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-lg md:text-xl text-white/80 leading-relaxed"
          >
            Rénovation, nettoyage et traitement de toiture par un artisan local de confiance.
            Intervention rapide dans tout le département 74. Devis gratuit sous 24h.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <a href={COMPANY.phoneTel} className="w-full sm:w-auto">
              <Button size="lg" className="relative bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-3 text-lg px-8 h-16 w-full sm:w-auto shadow-lg shadow-primary/40 animate-pulse hover:animate-none">
                <Phone className="w-6 h-6" />
                <span className="flex flex-col items-start leading-tight">
                  <span className="text-xs font-normal opacity-80">Appel gratuit</span>
                  <span>{COMPANY.phone}</span>
                </span>
              </Button>
            </a>
            <Link to="/devis" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/20 font-bold gap-2 text-base px-8 h-16 w-full sm:w-auto">
                Devis Gratuit 24h <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { icon: Shield, label: "Certifié RGE" },
              { icon: Clock, label: "Urgence 7j/7" },
              { icon: Star, label: "4.9/5 Avis" },
              { icon: Award, label: "Garantie 10 ans" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5 text-white/70">
                <Icon className="w-5 h-5 text-secondary shrink-0" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}