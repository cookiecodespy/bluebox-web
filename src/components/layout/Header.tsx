"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/lib/nav";
import { Wordmark } from "@/components/ui/Wordmark";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sobre el hero oscuro del home (sin scroll): header transparente con texto claro.
  const overHero = pathname === "/" && !scrolled && !mobileOpen;

  // El logo SIEMPRE lleva al inicio: si ya estás en el home, sube suave al tope
  // (Lenis si está activo) y limpia el #ancla de la URL.
  const onLogoClick = (e: React.MouseEvent) => {
    setMobileOpen(false);
    if (pathname !== "/") return;
    e.preventDefault();
    if (window.__lenis) window.__lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        overHero
          ? "border-b border-transparent bg-transparent"
          : "border-b border-line bg-paper/85 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-[92px] max-w-[1240px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" aria-label="BlueBox — inicio" onClick={onLogoClick}>
          <Wordmark />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative pb-1 text-[14.5px] font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:bg-cobalt after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 ${
                    active ? "after:scale-x-100" : "after:scale-x-0"
                  } ${
                    overHero
                      ? "text-paper/75 hover:text-paper"
                      : active
                        ? "text-ink"
                        : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("bb:open-cmdk"))}
              aria-label="Abrir buscador (Ctrl+K)"
              title="Buscar en el sitio (Ctrl+K)"
              className={`mono inline-flex items-center gap-1.5 rounded-full border px-3 py-2 text-[11px] tracking-wide transition-colors ${
                overHero
                  ? "border-white/20 text-paper/60 hover:border-white/40 hover:text-paper"
                  : "border-line text-ink-mute hover:border-ink/30 hover:text-ink"
              }`}
            >
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m21 21-4.3-4.3" strokeLinecap="round" />
              </svg>
              ⌘K
            </button>
          </li>
          <li>
            <Link
              href="/contacto"
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[14px] font-semibold transition-all ${
                overHero
                  ? "border border-white/25 text-paper hover:bg-white/10"
                  : "bg-ink text-paper hover:opacity-90"
              }`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cobalt" />
              Conversemos
            </Link>
          </li>
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`rounded-lg p-2 transition-colors lg:hidden ${
            overHero ? "text-paper hover:bg-white/10" : "text-ink hover:bg-paper-2"
          }`}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-line bg-paper/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          mobileOpen ? "max-h-screen border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-1 px-5 py-5">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-3 font-display text-base font-medium text-ink transition-colors hover:bg-paper-2"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 font-semibold text-paper"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cobalt" />
            Conversemos
          </Link>
        </div>
      </div>
    </header>
  );
}
