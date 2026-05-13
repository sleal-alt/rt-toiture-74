import React from "react";
import { Link } from "react-router-dom";
import { COMPANY } from "@/lib/siteData";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTABand({ title, subtitle }) {
  return (
    <section className="bg-primary py-14 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-primary-foreground">
          {title || "Votre Toiture Mérite un Expert"}
        </h2>
        <p className="text-primary-foreground/80 mt-3 text-lg">
          {subtitle || "Devis gratuit sous 24h • Intervention dans toute la Haute-Savoie • Garantie 10 ans"}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a href={COMPANY.phoneTel}>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold gap-2 text-base px-8">
              <Phone className="w-5 h-5" /> {COMPANY.phone}
            </Button>
          </a>
          <Link to="/devis">
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold gap-2 text-base px-8">
              Demander un Devis <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}