import type { Metadata } from "next";
import { Schibsted_Grotesk, Hanken_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASticky } from "@/components/layout/CTASticky";
import { SmoothScroll } from "@/components/fx/SmoothScroll";
import { ScrollProgress } from "@/components/fx/ScrollProgress";
import { buildMetadata } from "@/lib/metadata";

// Display / títulos — grotesca con carácter, peso medio (no Geist/Inter)
const fontDisplay = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

// Texto de lectura
const fontSans = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Etiquetas / índices técnicos
const fontMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* "cutting the mustard": habilita los reveals solo si hay JS */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body
        className={`${fontDisplay.variable} ${fontSans.variable} ${fontMono.variable} font-sans antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:font-semibold focus:text-paper"
        >
          Saltar al contenido
        </a>
        <SmoothScroll />
        <ScrollProgress />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <CTASticky />
      </body>
    </html>
  );
}
