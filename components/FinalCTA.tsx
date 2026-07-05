"use client";

import Reveal from "./Reveal";
import WaitlistForm from "./WaitlistForm";

export default function FinalCTA() {
  return (
    <section
      id="lista-de-espera"
      className="relative isolate overflow-hidden scroll-mt-20"
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade" aria-hidden="true" />
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(0,102,255,0.32), rgba(0,102,255,0.06) 45%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 py-28 lg:py-36">
        <Reveal>
          <div className="text-center">
            <p className="font-mono text-xs tracking-widest uppercase text-accent">
              Lista de espera · Acceso temprano
            </p>
            <h2 className="mt-6 font-black tracking-tightest text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
              Stop guessing.
              <br />
              <span className="text-accent">Run the simulation.</span>
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-base sm:text-lg text-titanium/80">
              Estamos abriendo cupos por lotes. Déjanos tus datos y te
              avisamos apenas te toque probar Synapse con tu propio caso.
            </p>
          </div>
        </Reveal>

        <div className="mt-14">
          <Reveal delay={0.1}>
            <WaitlistForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
