import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumbs({ items }) {
  return (
    <nav className="bg-muted/50 border-b border-border/50" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          <li>
            <Link to="/" className="text-muted-foreground hover:text-primary transition flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Accueil
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
              {item.href ? (
                <Link to={item.href} className="text-muted-foreground hover:text-primary transition">{item.label}</Link>
              ) : (
                <span className="text-foreground font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}