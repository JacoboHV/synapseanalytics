"use client";

import Reveal from "./Reveal";

export default function Solution() {
  return (
    <section className="relative border-b border-hairline">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-mono text-xs tracking-widest uppercase text-accent">
                La solución
              </p>
              <h2 className="mt-4 font-black tracking-tightest text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
                Entrenamos nuestro algoritmo con datos reales del consumidor
                colombiano.
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pt-2">
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-titanium/85">
                Creamos poblaciones de consumidores calibradas para el mercado
                colombiano, las exponemos a tu producto o propuesta, y medimos
                su comportamiento de compra{" "}
                <span className="text-titanium">real</span> — sin la presión
                social que sesga las encuestas y los focus groups.
              </p>
              <p className="mt-6 text-base leading-relaxed text-muted">
                El resultado no es una opinión. Es una simulación reproducible
                que anticipa cómo se va a comportar tu mercado antes de que
                gastes un peso en producción, canal o pauta.
              </p>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-hairline pt-8">
                <Stat value="Minutos" label="Tiempo de veredicto" />
                <Stat value="100%" label="Reproducible" />
                <Stat value="0" label="Sesgo de moderador" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-mono text-2xl sm:text-3xl font-bold text-titanium tracking-tightest">
        {value}
      </p>
      <p className="mt-2 font-mono text-[11px] tracking-widest uppercase text-muted">
        {label}
      </p>
    </div>
  );
}
