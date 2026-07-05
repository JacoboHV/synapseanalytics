"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { href: "#producto", label: "Producto" },
  { href: "#sectores", label: "Sectores" },
  { href: "#como-funciona", label: "Cómo funciona" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-obsidian/70 border-b border-hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="Ir al inicio">
          <Logo size={28} />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-titanium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#lista-de-espera"
            className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-titanium hover:bg-accent-hover hover:shadow-glow-accent transition-all"
          >
            Entra a la lista de espera
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden text-titanium p-2 -mr-2"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden border-t border-hairline bg-obsidian/95 backdrop-blur-md">
          <div className="px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base text-titanium/90 hover:text-titanium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#lista-de-espera"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex justify-center rounded-md bg-accent px-4 py-3 text-sm font-semibold text-titanium hover:bg-accent-hover transition-colors"
            >
              Entra a la lista de espera
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
