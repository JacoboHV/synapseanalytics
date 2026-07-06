"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Two identical groups of the wordmark → seamless infinite marquee.
  const wordmarks = Array.from({ length: 4 });

  return (
    <footer className="relative overflow-hidden border-t border-hairline bg-obsidian">
      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-10 pb-6">
        <div className="flex items-center justify-between gap-6">
          {/* Have a project in mind */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs sm:text-sm tracking-widest uppercase text-titanium">
              ¿Tienes un proyecto en mente?
            </p>
            <a
              href="#lista-de-espera"
              className="inline-flex w-fit items-center rounded-full border border-titanium bg-titanium px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-obsidian hover:bg-accent hover:border-accent hover:text-titanium transition-colors"
            >
              Hablemos
            </a>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-3 font-mono text-xs sm:text-sm tracking-widest uppercase text-titanium hover:text-accent transition-colors"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-titanium group-hover:border-accent group-hover:bg-accent transition-colors">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7 12V2M7 2L2 7M7 2L12 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            Volver arriba
          </button>
        </div>
      </div>

      {/* Infinite marquee SYNAPSE with vertical gradient */}
      <div
        className="relative overflow-hidden"
        aria-hidden="true"
      >
        <div className="flex animate-marquee whitespace-nowrap select-none pointer-events-none will-change-transform">
          {[0, 1].map((groupIdx) => (
            <div
              key={groupIdx}
              className="flex shrink-0 items-center"
            >
              {wordmarks.map((_, i) => (
                <span
                  key={`${groupIdx}-${i}`}
                  className="font-black tracking-tightest leading-[0.85] pr-10 sm:pr-14 text-transparent bg-clip-text"
                  style={{
                    fontSize: "clamp(6rem, 20vw, 20rem)",
                    letterSpacing: "-0.05em",
                    backgroundImage:
                      "linear-gradient(180deg, #FFFFFF 0%, #7A7A7A 55%, #1F1F1F 100%)",
                  }}
                >
                  SYNAPSE
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pb-6 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="font-mono text-xs text-muted underline underline-offset-4 decoration-hairline">
          by Synapse Analytics
        </p>
        <p className="font-mono text-[11px] tracking-widest uppercase text-muted">
          © 2026 · Medellín · Colombia
        </p>
      </div>
    </footer>
  );
}
