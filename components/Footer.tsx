"use client";

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative border-t border-hairline bg-obsidian">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <Logo size={26} />
            <p className="mt-5 font-mono text-sm text-muted max-w-sm">
              Stop guessing. Run the simulation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-sm">
            <a
              href="#producto"
              className="text-muted hover:text-titanium transition-colors"
            >
              Producto
            </a>
            <a
              href="#sectores"
              className="text-muted hover:text-titanium transition-colors"
            >
              Sectores
            </a>
            <a
              href="#como-funciona"
              className="text-muted hover:text-titanium transition-colors"
            >
              Cómo funciona
            </a>
            <a
              href="#lista-de-espera"
              className="text-muted hover:text-titanium transition-colors"
            >
              Lista de espera
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-hairline pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono text-xs text-muted">
            © 2026 Synapse Analytics. Todos los derechos reservados.
          </p>
          <p className="font-mono text-[11px] tracking-widest uppercase text-muted">
            Medellín · Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
