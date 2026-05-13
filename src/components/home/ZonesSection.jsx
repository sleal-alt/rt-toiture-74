import React from "react";
import { Link } from "react-router-dom";
import { COMMUNES } from "@/lib/siteData";
import SectionHeading from "@/components/shared/SectionHeading";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ZonesSection() {
  return (
    <section className="py-20 lg:py-28 bg-accent overflow-hidden relative">
      {/* Decorative bg */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1400&q=60')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-accent/90" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Zone d'Intervention"
          title="Couvreur dans toute la Haute-Savoie"
          subtitle="Nous intervenons rapidement dans plus de 25 communes du département 74. Trouvez votre couvreur local certifié."
          light
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        >
          {COMMUNES.map(c => (
            <Link
              key={c.slug}
              to={`/couvreur/${c.slug}`}
              className="group flex items-center gap-2 p-3 bg-white/5 hover:bg-primary rounded-xl border border-white/10 hover:border-primary transition-all duration-200 text-sm"
            >
              <MapPin className="w-4 h-4 text-secondary shrink-0" />
              <div>
                <span className="font-medium text-white block leading-tight">{c.name}</span>
                <span className="text-white/40 text-xs group-hover:text-white/60">{c.code}</span>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}