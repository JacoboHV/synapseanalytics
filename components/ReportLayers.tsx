"use client";

import { Zap, LineChart, FileCheck2 } from "lucide-react";
import Reveal from "./Reveal";

const LAYERS = [
  {
    icon: Zap,
    title: "Veredicto",
    body: "GO / NO-GO / AJUSTAR, con score de preparación de mercado e intención de compra.",
    bullets: [
      "Decisión binaria clara",
      "Market-readiness score",
      "Intención de compra estimada",
    ],
  },
  {
    icon: LineChart,
    title: "Inteligencia accionable",
    body: "Los números que necesitas para ajustar producto, precio y target antes de lanzar.",
    bullets: [
      "Curva de demanda por escenario de precio",
      "Conversión por segmento",
      "Principales barreras y disparadores de compra",
    ],
  },
  {
    icon: FileCheck2,
    title: "Trazabilidad auditable",
    body: "Metodología completa y fuente por cada variable — todo reproducible y auditable.",
    bullets: [
      "Metodología documentada end-to-end",
      "Fuente por variable",
      "Ejecución reproducible",
    ],
  },
];

export default function ReportLayers() {
  return (
    <section className="relative border-b border-hairline">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <Reveal>
          <p className="font-mono text-xs tracking-widest uppercase text-accent">
            El reporte
          </p>
          <h2 className="mt-4 max-w-3xl font-black tracking-tightest text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
            Tres capas de profundidad, según lo que necesites.
          </h2>
          <p className="mt-6 max-w-2xl text-base text-muted leading-relaxed">
            Desde el veredicto instantáneo para tomar una decisión, hasta la
            trazabilidad completa para auditar la metodología.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {LAYERS.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <Reveal key={layer.title} delay={i * 0.08}>
                <div className="group relative h-full rounded-md border border-hairline bg-obsidian p-8 transition-all hover:border-accent/50 hover:shadow-glow-accent">
                  <div className="inline-flex rounded-md border border-hairline p-2.5 text-accent group-hover:border-accent/50 transition-colors">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>

                  <h3 className="mt-8 font-black tracking-tightest text-2xl leading-tight">
                    {layer.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">
                    {layer.body}
                  </p>

                  <ul className="mt-6 space-y-2.5 border-t border-hairline pt-6">
                    {layer.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-3 text-sm text-titanium/85"
                      >
                        <span
                          className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
