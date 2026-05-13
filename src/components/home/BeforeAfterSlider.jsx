import React, { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/images";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef(null);

  const getPos = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    return (x / rect.width) * 100;
  }, []);

  const onMouseMove = useCallback((e) => {
    if (!dragging) return;
    setPosition(getPos(e.clientX));
  }, [dragging, getPos]);

  const onTouchMove = useCallback((e) => {
    setPosition(getPos(e.touches[0].clientX));
  }, [getPos]);

  return (
    <section className="py-20 lg:py-28 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 bg-primary/10 text-primary">Résultats</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Des Transformations Spectaculaires</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Glissez le curseur pour voir la différence avant et après notre intervention.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3 relative select-none"
            ref={containerRef}
            onMouseDown={() => setDragging(true)}
            onMouseUp={() => setDragging(false)}
            onMouseLeave={() => setDragging(false)}
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
            style={{ cursor: dragging ? "ew-resize" : "ew-resize" }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video relative">
              {/* AFTER (bg) */}
              <img
                src={IMAGES.beforeAfter}
                alt="Après nettoyage et traitement toiture Haute-Savoie"
                className="w-full h-full object-cover absolute inset-0"
                draggable="false"
                loading="lazy"
              />
              {/* BEFORE (clip) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${position}%` }}
              >
                <img
                  src={IMAGES.zone}
                  alt="Avant nettoyage toiture Haute-Savoie – mousse et salissures"
                  className="w-full h-full object-cover absolute inset-0"
                  style={{ width: `${10000 / position}%`, maxWidth: "none" }}
                  draggable="false"
                  loading="lazy"
                />
              </div>

              {/* Labels */}
              <span className="absolute top-4 left-4 bg-black/60 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">AVANT</span>
              <span className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">APRÈS</span>

              {/* Divider */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
                style={{ left: `${position}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <MoveHorizontal className="w-5 h-5 text-accent" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h3 className="font-heading text-2xl font-bold mb-4">
              Un Résultat Visible Immédiatement
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              En Haute-Savoie, le climat alpin accélère le développement des mousses et lichens. 
              Notre intervention redonne à votre toiture son aspect d'origine tout en la protégeant durablement.
            </p>
            <ul className="space-y-3.5">
              {[
                "Démoussage professionnel haute pression",
                "Traitement fongicide longue durée",
                "Hydrofuge garanti <strong>10 ans</strong>",
                "Résultat esthétique et technique",
                "Prolonge la durée de vie de 10 à 20 ans",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-5 h-5 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}