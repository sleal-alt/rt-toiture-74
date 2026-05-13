import React from "react";
import { Star, Quote } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
        ))}
      </div>
      <Quote className="w-8 h-8 text-primary/20 mb-3" />
      <p className="text-foreground/90 leading-relaxed mb-4">{testimonial.text}</p>
      <div className="flex items-center justify-between pt-4 border-t border-border/50">
        <div>
          <p className="font-semibold text-sm">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.location}</p>
        </div>
        <span className="text-xs bg-primary/5 text-primary px-3 py-1 rounded-full">{testimonial.service}</span>
      </div>
    </div>
  );
}