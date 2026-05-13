import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import L from "leaflet";
import { MapPin, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/shared/SectionHeading";
import "leaflet/dist/leaflet.css";

// Fix default marker icons for Vite/React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const createCustomIcon = (isHovered) =>
  L.divIcon({
    className: "",
    html: `<div style="
      width: 28px; height: 28px;
      background: ${isHovered ? "hsl(0,72%,42%)" : "hsl(220,12%,22%)"};
      border: 3px solid white;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      box-shadow: 0 2px 8px rgba(0,0,0,0.35);
      transition: all 0.2s;
    "></div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -30],
  });

const COMMUNES_GEO = [
  { slug: "annecy",                  name: "Annecy",                  lat: 45.8992, lng: 6.1294 },
  { slug: "annemasse",               name: "Annemasse",               lat: 46.1942, lng: 6.2337 },
  { slug: "chamonix-mont-blanc",     name: "Chamonix-Mont-Blanc",     lat: 45.9237, lng: 6.8694 },
  { slug: "bonneville",              name: "Bonneville",              lat: 46.0785, lng: 6.4025 },
  { slug: "cluses",                  name: "Cluses",                  lat: 46.0614, lng: 6.5769 },
  { slug: "sallanches",              name: "Sallanches",              lat: 45.9366, lng: 6.6317 },
  { slug: "megeve",                  name: "Megève",                  lat: 45.8570, lng: 6.6167 },
  { slug: "saint-julien-en-genevois",name: "Saint-Julien-en-Genevois",lat: 46.1428, lng: 6.0840 },
  { slug: "la-roche-sur-foron",      name: "La Roche-sur-Foron",      lat: 46.0700, lng: 6.3122 },
  { slug: "vetraz-monthoux",         name: "Vétraz-Monthoux",         lat: 46.1788, lng: 6.2503 },
  { slug: "douvaine",                name: "Douvaine",                lat: 46.3046, lng: 6.3032 },
  { slug: "sciez",                   name: "Sciez",                   lat: 46.3468, lng: 6.3700 },
  { slug: "veyrier-du-lac",          name: "Veyrier-du-Lac",          lat: 45.8700, lng: 6.1700 },
  { slug: "menthon-saint-bernard",   name: "Menthon-Saint-Bernard",   lat: 45.8428, lng: 6.1986 },
  { slug: "talloires",               name: "Talloires",               lat: 45.8272, lng: 6.2147 },
  { slug: "bossey",                  name: "Bossey",                  lat: 46.1312, lng: 6.1475 },
  { slug: "reignier-esery",          name: "Reignier-Ésery",          lat: 46.1326, lng: 6.2689 },
  { slug: "viuz-en-sallaz",          name: "Viuz-en-Sallaz",          lat: 46.1424, lng: 6.4043 },
  { slug: "chens-sur-leman",         name: "Chens-sur-Léman",         lat: 46.3229, lng: 6.2917 },
  { slug: "yvoire",                  name: "Yvoire",                  lat: 46.3753, lng: 6.3292 },
  { slug: "messery",                 name: "Messery",                 lat: 46.3614, lng: 6.3097 },
  { slug: "bonne",                   name: "Bonne",                   lat: 46.1669, lng: 6.3523 },
  { slug: "bons-en-chablais",        name: "Bons-en-Chablais",        lat: 46.2857, lng: 6.3626 },
  { slug: "saint-cergues",           name: "Saint-Cergues",           lat: 46.2341, lng: 6.2895 },
  { slug: "veigy-foncenex",          name: "Veigy-Foncenex",          lat: 46.2985, lng: 6.2515 },
  { slug: "collonges-sous-saleve",   name: "Collonges-sous-Salève",   lat: 46.1481, lng: 6.1339 },
];

export default function MapSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="py-16 lg:py-24 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          badge="Zone d'intervention"
          title="Couvreur dans toute la Haute-Savoie"
          subtitle="Cliquez sur une commune pour accéder à la page dédiée à votre secteur."
        />

        <div className="mt-10 grid lg:grid-cols-3 gap-6 items-start">
          {/* Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-xl border border-border/60" style={{ height: 480 }}>
            <MapContainer
              center={[46.05, 6.45]}
              zoom={9}
              style={{ width: "100%", height: "100%" }}
              zoomControl={false}
              scrollWheelZoom={false}
            >
              <ZoomControl position="bottomright" />
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {COMMUNES_GEO.map((commune) => (
                <Marker
                  key={commune.slug}
                  position={[commune.lat, commune.lng]}
                  icon={createCustomIcon(hovered === commune.slug)}
                  eventHandlers={{
                    mouseover: () => setHovered(commune.slug),
                    mouseout: () => setHovered(null),
                  }}
                >
                  <Popup closeButton={false} className="commune-popup">
                    <div className="p-1 min-w-[160px]">
                      <p className="font-bold text-sm text-foreground flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                        {commune.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 mb-2">Haute-Savoie (74)</p>
                      <Link
                        to={`/couvreur/${commune.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                      >
                        Voir la page <ExternalLink className="w-3 h-3" />
                      </Link>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {/* Sidebar list */}
          <div className="bg-card border border-border/60 rounded-2xl shadow-md p-5 flex flex-col gap-1 max-h-[480px] overflow-y-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
              {COMMUNES_GEO.length} communes couvertes
            </p>
            {COMMUNES_GEO.sort((a, b) => a.name.localeCompare(b.name)).map((commune) => (
              <Link
                key={commune.slug}
                to={`/couvreur/${commune.slug}`}
                onMouseEnter={() => setHovered(commune.slug)}
                onMouseLeave={() => setHovered(null)}
                className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors group ${
                  hovered === commune.slug
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted text-foreground"
                }`}
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 shrink-0 opacity-60" />
                  {commune.name}
                </span>
                <ArrowRight className={`w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${hovered === commune.slug ? "opacity-100" : ""}`} />
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-border">
              <Link to="/couvreur/annecy">
                <Button size="sm" className="w-full gap-2 text-xs">
                  Voir toutes les communes <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}