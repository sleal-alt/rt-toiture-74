import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyMobileCTA from "./StickyMobileCTA";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pb-16 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}