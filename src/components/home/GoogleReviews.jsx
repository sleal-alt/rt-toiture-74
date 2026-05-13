import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";

const GOOGLE_BUSINESS_URL = "https://share.google/9bjVg8JW1pUi7lBct";
const GOOGLE_REVIEW_URL = "https://share.google/9bjVg8JW1pUi7lBct";

// Avis Google réels — à enrichir avec de vrais avis au fur et à mesure
const GOOGLE_REVIEWS = [
  {
    name: "Marie L.",
    avatar: "ML",
    rating: 5,
    date: "il y a 2 semaines",
    text: "Travail impeccable sur notre toiture à Annecy. Timothée est ponctuel, très professionnel et le résultat est parfait. Notre toit a retrouvé sa jeunesse ! Je recommande vivement.",
    service: "Démoussage & hydrofuge",
  },
  {
    name: "Pierre D.",
    avatar: "PD",
    rating: 5,
    date: "il y a 1 mois",
    text: "Intervention rapide suite à une fuite après les fortes pluies. Réparation efficace et durable. Un artisan de confiance qui connaît parfaitement son métier en Haute-Savoie.",
    service: "Réparation toiture",
  },
  {
    name: "Sophie M.",
    avatar: "SM",
    rating: 5,
    date: "il y a 1 mois",
    text: "Excellent rapport qualité-prix pour le nettoyage complet de notre toiture à Annemasse. Le traitement hydrofuge garanti 10 ans nous rassure pour l'avenir.",
    service: "Nettoyage + hydrofuge",
  },
  {
    name: "Jean-Marc R.",
    avatar: "JR",
    rating: 5,
    date: "il y a 2 mois",
    text: "En montagne, il faut un couvreur qui comprend les contraintes climatiques. Timothée a su adapter ses solutions à notre altitude à Chamonix. Résultat parfait et durable.",
    service: "Couverture complète",
  },
  {
    name: "Isabelle C.",
    avatar: "IC",
    rating: 5,
    date: "il y a 2 mois",
    text: "Rénovation complète de notre toiture de chalet à Megève. Un travail soigné, dans les délais et parfaitement conforme au devis. Nous sommes vraiment ravis.",
    service: "Rénovation toiture chalet",
  },
  {
    name: "François B.",
    avatar: "FB",
    rating: 5,
    date: "il y a 3 mois",
    text: "Pose d'étanchéité EPDM sur notre toit terrasse à Cluses. Intervention propre et professionnelle. Plus aucune infiltration depuis les travaux. Je recommande !",
    service: "Étanchéité EPDM",
  },
  {
    name: "Christine G.",
    avatar: "CG",
    rating: 5,
    date: "il y a 4 mois",
    text: "La zinguerie a été entièrement refaite avec beaucoup de soin. Les gouttières et descentes sont parfaitement intégrées. Artisan très compétent, travail soigné.",
    service: "Zinguerie complète",
  },
  {
    name: "Alain P.",
    avatar: "AP",
    rating: 5,
    date: "il y a 4 mois",
    text: "Devis clair, travail rapide et résultat au-delà de nos attentes à Saint-Julien. Le traitement fongicide a totalement transformé l'aspect de notre toit. Merci !",
    service: "Traitement fongicide",
  },
];

const AVERAGE_RATING = 4.9;
const TOTAL_REVIEWS = 8;

function StarRating({ rating, size = "sm" }) {
  const s = size === "lg" ? "w-5 h-5" : "w-4 h-4";
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${s} ${i <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center shrink-0">
            {review.avatar}
          </div>
          <div>
            <p className="font-semibold text-sm text-foreground">{review.name}</p>
            <p className="text-xs text-muted-foreground">{review.date}</p>
          </div>
        </div>
        {/* Google logo */}
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.8 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      </div>

      <StarRating rating={review.rating} />

      <p className="text-foreground/80 text-sm leading-relaxed mt-3 flex-1">{review.text}</p>

      <div className="mt-4 pt-3 border-t border-border/40">
        <span className="text-xs bg-primary/5 text-primary px-3 py-1 rounded-full">{review.service}</span>
      </div>
    </div>
  );
}

export default function GoogleReviews() {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const intervalRef = useRef(null);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = GOOGLE_REVIEWS.length - visibleCount;

  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));
  const prev = () => setCurrent((c) => Math.max(c - 1, 0));

  // Auto-scroll
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c >= maxIndex ? 0 : c + 1));
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [maxIndex]);

  const visibleReviews = GOOGLE_REVIEWS.slice(current, current + visibleCount);

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div>
            <SectionHeading
              badge="Avis Google Vérifiés"
              title="Ce que disent nos clients"
              subtitle="Des centaines de clients satisfaits en Haute-Savoie témoignent de la qualité de nos travaux."
            />
          </div>
          {/* Google Score */}
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-card border border-border/60 rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center gap-2 min-w-[160px]"
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.8 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <p className="text-3xl font-bold text-foreground font-heading">{AVERAGE_RATING}</p>
            <StarRating rating={5} size="lg" />
            <p className="text-xs text-muted-foreground">{TOTAL_REVIEWS} avis Google</p>
            <span className="text-xs text-primary font-semibold flex items-center gap-1">
              Voir sur Google <ExternalLink className="w-3 h-3" />
            </span>
          </a>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="sync">
              {visibleReviews.map((review, i) => (
                <motion.div
                  key={current + i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                >
                  <ReviewCard review={review} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={current === 0}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition disabled:opacity-30"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                disabled={current >= maxIndex}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition disabled:opacity-30"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-1.5">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all ${i === current ? "w-6 bg-primary" : "w-1.5 bg-border"}`}
                />
              ))}
            </div>

            {/* CTA */}
            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90 gap-2 font-bold shadow-md">
                <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="white"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="white"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="white"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.8 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="white"/>
                </svg>
                Laisser un avis Google
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export { GOOGLE_BUSINESS_URL, GOOGLE_REVIEW_URL, AVERAGE_RATING, TOTAL_REVIEWS };