import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synapse Analytics — Investigación de mercados con IA",
  description:
    "Simulamos el comportamiento de compra de consumidores colombianos y te entregamos un veredicto de mercado en minutos. Stop guessing. Run the simulation.",
  metadataBase: new URL("https://synapse-analytics.co"),
  openGraph: {
    title: "Synapse Analytics — Stop guessing. Run the simulation.",
    description:
      "Investigación de mercados con IA calibrada para Colombia. Valida tu producto antes de lanzarlo.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-obsidian text-titanium font-sans antialiased selection:bg-accent selection:text-titanium">
        {children}
      </body>
    </html>
  );
}
