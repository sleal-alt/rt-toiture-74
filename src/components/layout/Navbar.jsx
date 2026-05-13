import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { COMPANY } from "@/lib/siteData";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Accueil", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Réalisations", path: "/realisations" },
  { label: "Avis Clients", path: "/avis" },
  { label: "À Propos", path: "/a-propos" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-accent text-accent-foreground text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span>📍 {COMPANY.address}</span>
            <span>SIRET : {COMPANY.siret}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold">Urgence 7j/7</span>
            <a href={COMPANY.phoneTel} className="flex items-center gap-2 font-bold text-secondary hover:underline">
              <Phone className="w-4 h-4" /> {COMPANY.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-background"}`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6 flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">RT</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-heading font-bold text-base leading-tight text-foreground">RT Toiture 74</p>
              <p className="text-xs text-muted-foreground">Couvreur Haute-Savoie</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/5"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={COMPANY.phoneTel} className="hidden md:flex">
              <Button className="bg-primary hover:bg-primary/90 gap-2">
                <Phone className="w-4 h-4" /> Appeler
              </Button>
            </a>
            <Link to="/devis">
              <Button variant="outline" className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Devis Gratuit
              </Button>
            </Link>
            <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {NAV_LINKS.map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                      location.pathname === link.path
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/80 hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3 flex flex-col gap-2">
                  <a href={COMPANY.phoneTel}>
                    <Button className="w-full bg-primary gap-2"><Phone className="w-4 h-4" /> {COMPANY.phone}</Button>
                  </a>
                  <Link to="/devis">
                    <Button variant="outline" className="w-full border-primary text-primary">Devis Gratuit</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}