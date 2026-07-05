"use client";

import { MapPin } from "lucide-react";
import Reveal from "./Reveal";

export default function Differentiator() {
  return (
    <section className="relative border-b border-hairline">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1">
                <MapPin size={14} className="text-accent" />
                <span className="font-mono text-[11px] tracking-widest uppercase text-accent">
                  Colombia · LATAM
                </span>
              </div>
              <h2 className="mt-6 font-black tracking-tightest text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
                Hecho para Colombia.
                <br />
                <span className="text-muted">Calibrado para tu mercado.</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-titanium/85">
                El consumidor colombiano no se comporta como el promedio global.
                La decisión de compra en Bogotá, Medellín o Barranquilla
                responde a variables culturales, económicas y de canal que las
                soluciones internacionales no modelan.
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Por eso nuestro algoritmo se entrena con datos reales del
                consumidor colombiano y se calibra por región, estrato,
                segmento y categoría. Cada simulación refleja el mercado en el
                que realmente vas a lanzar — no una aproximación importada.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-hairline pt-8">
                <Pillar title="Calibración regional" body="Bogotá, Medellín, Cali, Barranquilla y ciudades intermedias." />
                <Pillar title="Segmentación real" body="Estrato, edad, canal, categoría de gasto." />
                <Pillar title="Contexto LATAM" body="Preparada para expansión al resto de la región." />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <p className="font-mono text-[11px] tracking-widest uppercase text-accent">
        {title}
      </p>
      <p className="mt-2 text-sm text-titanium/80 leading-relaxed">{body}</p>
    </div>
  );
}
