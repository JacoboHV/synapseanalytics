"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NeuralBackground from "./NeuralBackground";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-screen flex items-center overflow-hidden"
    >
      {/* Layered background: grid + radial glow + neural net */}
      <div className="absolute inset-0 bg-grid bg-grid-fade" aria-hidden="true" />
      <div
        className="absolute inset-0 radial-accent-glow"
        aria-hidden="true"
      />
      <NeuralBackground />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-24 w-full">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs md:text-sm tracking-widest uppercase text-accent"
          >
            Investigación de mercados con IA · Calibrada para Colombia
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-black tracking-tightest leading-[0.95] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            Valida tu producto{" "}
            <span className="block">antes de lanzarlo.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 font-mono text-base sm:text-lg text-titanium/90"
          >
            <span className="text-accent">/</span> Stop guessing.{" "}
            <span className="text-accent">Run the simulation.</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-muted"
          >
            Simulamos el comportamiento de compra de consumidores colombianos y
            te entregamos un veredicto de mercado en minutos — no en meses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <a
              href="#lista-de-espera"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-titanium hover:bg-accent-hover hover:shadow-glow-accent transition-all"
            >
              Entra a la lista de espera
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-titanium/20 px-6 py-3.5 text-sm font-semibold text-titanium hover:border-titanium hover:bg-titanium/5 transition-all"
            >
              Ver cómo funciona
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into the next section */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-obsidian pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
