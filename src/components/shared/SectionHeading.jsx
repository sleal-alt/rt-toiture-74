import React from "react";

export default function SectionHeading({ badge, title, subtitle, center = true, light = false }) {
  return (
    <div className={`mb-10 lg:mb-14 ${center ? "text-center" : ""}`}>
      {badge && (
        <span className={`inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 ${
          light ? "bg-white/10 text-white/80" : "bg-primary/10 text-primary"
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${light ? "text-white" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed ${center ? "mx-auto" : ""} ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}