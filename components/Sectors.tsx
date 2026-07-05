"use client";

import {
  ShoppingBag,
  ShoppingCart,
  Package,
  Landmark,
  HeartPulse,
  Signal,
  Cpu,
  Rocket,
} from "lucide-react";
import Reveal from "./Reveal";

const SECTORS = [
  { icon: ShoppingBag, name: "Retail" },
  { icon: ShoppingCart, name: "E-commerce" },
  { icon: Package, name: "Consumo masivo" },
  { icon: Landmark, name: "Banca y servicios financieros" },
  { icon: HeartPulse, name: "Salud y farma" },
  { icon: Signal, name: "Telecomunicaciones" },
  { icon: Cpu, name: "Tech" },
  { icon: Rocket, name: "Startups" },
];

export default function Sectors() {
  return (
    <section id="sectores" className="relative border-b border-hairline">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32">
        <Reveal>
          <p className="font-mono text-xs tracking-widest uppercase text-accent">
            Sectores
          </p>
          <h2 className="mt-4 max-w-3xl font-black tracking-tightest text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
            Para cualquier industria que necesite entender a su consumidor.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
          {SECTORS.map((sector, i) => {
            const Icon = sector.icon;
            return (
              <Reveal key={sector.name} delay={(i % 4) * 0.05}>
                <div className="group relative h-full rounded-md border border-hairline bg-obsidian p-6 lg:p-7 transition-all hover:border-accent/50 hover:shadow-glow-accent">
                  <Icon
                    size={22}
                    strokeWidth={1.6}
                    className="text-titanium/90 group-hover:text-accent transition-colors"
                  />
                  <p className="mt-6 font-semibold text-sm lg:text-base text-titanium leading-tight">
                    {sector.name}
                  </p>
                  <div
                    className="mt-6 h-px w-8 bg-hairline group-hover:w-16 group-hover:bg-accent/70 transition-all"
                    aria-hidden="true"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
