"use client";

type LogoProps = {
  /** Height in pixels for the whole lockup (icon + wordmark). */
  size?: number;
  /** Show the wordmark next to the icon. */
  showWordmark?: boolean;
  className?: string;
};

/**
 * Synapse Analytics logo — inverted triangle of dots (funnel / neural net motif)
 * plus wordmark. Rendered as inline SVG so it scales cleanly at any size.
 */
export default function Logo({
  size = 40,
  showWordmark = true,
  className = "",
}: LogoProps) {
  // Build the triangle programmatically: 9 rows, 9→1 dots.
  const rows = 9;
  const topRadius = 5.2;
  const bottomRadius = 2.6;
  const rowGap = 12; // vertical spacing between rows
  const dotGap = 18; // horizontal spacing between dots in the widest row
  const centerX = 100;
  const startY = 12;

  const dots: JSX.Element[] = [];
  for (let row = 0; row < rows; row++) {
    const dotsInRow = rows - row;
    // Radius shrinks from top row to bottom row.
    const r = topRadius - ((topRadius - bottomRadius) * row) / (rows - 1);
    // Horizontal spacing tightens slightly as we go down (funnel).
    const spacing = dotGap - row * 0.9;
    const rowWidth = (dotsInRow - 1) * spacing;
    const y = startY + row * rowGap;
    for (let i = 0; i < dotsInRow; i++) {
      const x = centerX - rowWidth / 2 + i * spacing;
      dots.push(
        <circle
          key={`${row}-${i}`}
          cx={x}
          cy={y}
          r={r}
          fill="currentColor"
        />,
      );
    }
  }

  return (
    <div
      className={`flex items-center gap-3 text-titanium ${className}`}
      style={{ height: size }}
      aria-label="Synapse Analytics"
    >
      <svg
        viewBox="0 0 200 140"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-hidden="true"
        style={{ height: size, width: "auto" }}
      >
        {dots}
      </svg>
      {showWordmark && (
        <span
          className="font-black tracking-tightest uppercase leading-none"
          style={{ fontSize: size * 0.42, letterSpacing: "-0.02em" }}
        >
          Synapse Analytics
        </span>
      )}
    </div>
  );
}
