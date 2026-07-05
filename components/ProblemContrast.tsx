"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function ProblemContrast() {
  return (
    <section
      id="producto"
      className="relative border-y border-hairline bg-obsidian"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <Reveal>
          <p className="font-mono text-xs tracking-widest uppercase text-muted">
            El contraste
          </p>
          <h2 className="mt-3 max-w-3xl font-black tracking-tightest text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
            El método viejo cuesta una fortuna.
            <br />
            <span className="text-muted">El nuevo cuesta minutos.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-6 items-stretch">
          {/* Antes */}
          <Reveal>
            <div className="h-full rounded-md border border-hairline bg-obsidian p-8 lg:p-10">
              <p className="font-mono text-[11px] tracking-widest uppercase text-muted">
                Antes · Método tradicional
              </p>
              <p className="mt-6 font-mono text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tightest text-titanium/90">
                USD $40,000
              </p>
              <p className="mt-4 font-mono text-sm text-muted">
                Costo típico de un estudio de mercado
              </p>
              <div className="mt-8 h-px bg-hairline" />
              <p className="mt-8 font-mono text-3xl sm:text-4xl font-bold text-titanium/80">
                Meses
              </p>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Focus groups, reclutamiento, moderación, tabulación e informe.
                Un ciclo largo entre la hipótesis y la respuesta.
              </p>
            </div>
          </Reveal>

          {/* Transición */}
          <div className="flex lg:flex-col items-center justify-center py-2">
            <div className="hidden lg:flex flex-col items-center gap-3 text-muted">
              <ArrowDown size={22} className="text-accent" />
              <span className="font-mono text-[11px] tracking-widest uppercase text-accent">
                Synapse
              </span>
              <ArrowDown size={22} className="text-accent" />
            </div>
            <div className="flex lg:hidden items-center gap-3 text-muted">
              <ArrowRight size={22} className="text-accent" />
              <span className="font-mono text-[11px] tracking-widest uppercase text-accent">
                Synapse
              </span>
              <ArrowRight size={22} className="text-accent" />
            </div>
          </div>

          {/* Después */}
          <Reveal delay={0.1}>
            <div className="relative h-full rounded-md border border-accent/40 bg-accent/5 p-8 lg:p-10 shadow-glow-accent">
              <div
                className="absolute inset-0 rounded-md pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 0%, rgba(0,102,255,0.18), transparent 60%)",
                }}
                aria-hidden="true"
              />
              <div className="relative">
                <p className="font-mono text-[11px] tracking-widest uppercase text-accent">
                  Con Synapse
                </p>
                <p className="mt-6 font-mono text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tightest text-accent">
                  Minutos
                </p>
                <p className="mt-4 font-mono text-sm text-titanium/80">
                  De hipótesis a veredicto de mercado
                </p>
                <div className="mt-8 h-px bg-accent/20" />
                <p className="mt-8 font-black text-2xl sm:text-3xl tracking-tightest leading-tight text-titanium">
                  Resultados altamente similares — a una fracción del costo y el
                  tiempo.
                </p>
                <p className="mt-4 text-sm text-titanium/70 leading-relaxed">
                  Sin reclutamiento, sin moderadores, sin el sesgo social del
                  focus group. Sí la señal que necesitas para decidir.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
