"use client";

import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Define tu producto",
    body: "Nos cuentas qué quieres validar: producto, precio, propuesta, empaque, canal o campaña.",
  },
  {
    n: "02",
    title: "Corre la simulación",
    body: "Exponemos tu propuesta a consumidores colombianos calibrados y observamos su comportamiento de compra real.",
  },
  {
    n: "03",
    title: "Recibe tu veredicto",
    body: "Un reporte accionable en minutos con una decisión clara: GO / NO-GO / AJUSTAR.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative border-b border-hairline"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <Reveal>
          <p className="font-mono text-xs tracking-widest uppercase text-accent">
            Cómo funciona
          </p>
          <h2 className="mt-4 max-w-3xl font-black tracking-tightest text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
            Tres pasos entre una hipótesis y una decisión.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <div className="group relative h-full rounded-md border border-hairline bg-obsidian p-8 transition-colors hover:border-accent/40">
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-sm tracking-widest text-accent">
                    {step.n}
                  </span>
                  <span className="font-mono text-[11px] tracking-widest uppercase text-muted">
                    Paso
                  </span>
                </div>
                <h3 className="mt-6 font-black tracking-tightest text-2xl leading-tight">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {step.body}
                </p>
                <div
                  className="mt-8 h-px w-12 bg-accent/60 transition-all group-hover:w-20"
                  aria-hidden="true"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
