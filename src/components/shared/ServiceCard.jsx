import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Shield, ShieldCheck, Paintbrush, Home, Layers, Wrench } from "lucide-react";

const ICON_MAP = {
  Droplets,
  Shield,
  ShieldCheck,
  Paintbrush,
  PaintBucket: Paintbrush,
  Home,
  Layers,
  Wrench,
};

export default function ServiceCard({ service }) {
  const Icon = ICON_MAP[service.icon] || Shield;

  return (
    <Link
      to={`/services/${service.slug}`}
      className="group bg-card rounded-2xl p-6 lg:p-8 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
      <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors">{service.shortTitle}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
      <span className="inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        En savoir plus <ArrowRight className="w-4 h-4" />
      </span>
    </Link>
  );
}