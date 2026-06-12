"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { SOLUTIONS, WHATSAPP_FULL_URL, CONTACT_EMAIL } from "@/lib/constants";
import { ARTICLES } from "@/lib/insights";
import { Icon } from "@/components/ui/Icon";

// Paleta de comandos ⌘K: navegar todo el sitio y ejecutar acciones desde el
// teclado. Se abre con Cmd/Ctrl+K o con el evento "bb:open-cmdk" (botón del header).

type Item = {
  id: string;
  group: string;
  label: string;
  hint?: string;
  icon: string;
  run: () => void;
};

const norm = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const items = useMemo<Item[]>(() => {
    const go = (href: string) => () => {
      setOpen(false);
      router.push(href);
    };
    const pages: Item[] = [
      { id: "home", group: "Páginas", label: "Inicio", icon: "home", run: go("/") },
      { id: "servicios", group: "Páginas", label: "Servicios", icon: "spark", run: go("/servicios") },
      { id: "industrias", group: "Páginas", label: "Industrias", icon: "manufactura", run: go("/industrias") },
      { id: "casos", group: "Páginas", label: "Casos", icon: "filecheck", run: go("/casos") },
      { id: "insights", group: "Páginas", label: "Insights", icon: "message", run: go("/insights") },
      { id: "nosotros", group: "Páginas", label: "Nosotros", icon: "users", run: go("/nosotros") },
      { id: "tecnologia", group: "Páginas", label: "Tecnología", icon: "server", run: go("/tecnologia") },
      { id: "contacto", group: "Páginas", label: "Contacto", icon: "mail", run: go("/contacto") },
    ];
    const sols: Item[] = SOLUTIONS.map((s) => ({
      id: `sol-${s.id}`,
      group: "Soluciones",
      label: s.title,
      icon: s.id,
      run: go(`/soluciones/${s.id}`),
    }));
    const arts: Item[] = ARTICLES.map((a) => ({
      id: `art-${a.slug}`,
      group: "Insights",
      label: a.title,
      hint: `${a.readMin} min`,
      icon: a.icon,
      run: go(`/insights/${a.slug}`),
    }));
    const actions: Item[] = [
      {
        id: "wsp",
        group: "Acciones",
        label: "Escribir por WhatsApp",
        hint: "respuesta rápida",
        icon: "message",
        run: () => {
          setOpen(false);
          window.open(WHATSAPP_FULL_URL, "_blank", "noopener,noreferrer");
        },
      },
      {
        id: "mail",
        group: "Acciones",
        label: "Escribir un correo",
        hint: CONTACT_EMAIL,
        icon: "mail",
        run: () => {
          setOpen(false);
          window.location.href = `mailto:${CONTACT_EMAIL}`;
        },
      },
      {
        id: "copy",
        group: "Acciones",
        label: copied ? "¡Correo copiado!" : "Copiar correo",
        hint: CONTACT_EMAIL,
        icon: "copy",
        run: () => {
          navigator.clipboard?.writeText(CONTACT_EMAIL);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
            setOpen(false);
          }, 900);
        },
      },
      {
        id: "diag",
        group: "Acciones",
        label: "Agendar un diagnóstico",
        hint: "sin costo",
        icon: "rocket",
        run: go("/contacto"),
      },
    ];
    return [...pages, ...sols, ...actions, ...arts];
  }, [router, copied]);

  const results = useMemo(() => {
    if (!query.trim()) return items;
    const q = norm(query);
    return items.filter((it) => norm(`${it.group} ${it.label} ${it.hint ?? ""}`).includes(q));
  }, [items, query]);

  // abrir/cerrar: ⌘K / Ctrl+K, Esc, y evento del botón del header
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("bb:open-cmdk", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("bb:open-cmdk", onOpen);
    };
  }, []);

  // al abrir: reset + foco + pausar scroll suave
  useEffect(() => {
    if (open) {
      setQuery("");
      setActive(0);
      window.__lenis?.stop();
      setTimeout(() => inputRef.current?.focus(), 30);
    } else {
      window.__lenis?.start();
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  // mantener el ítem activo a la vista
  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-idx="${active}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [active]);

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      results[active]?.run();
    }
  };

  if (!open) return null;

  let lastGroup = "";

  return (
    <div
      className="fixed inset-0 z-[90] flex items-start justify-center px-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Buscador del sitio"
    >
      <button
        className="absolute inset-0 cursor-default bg-ink/45 backdrop-blur-sm"
        onClick={() => setOpen(false)}
        aria-label="Cerrar buscador"
        tabIndex={-1}
      />
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#14110c] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)]">
        {/* input */}
        <div className="flex items-center gap-3 border-b border-white/8 px-5 py-4">
          <Icon name="search" className="h-[18px] w-[18px] flex-shrink-0 text-paper/40" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onInputKey}
            placeholder="Busca páginas, soluciones o acciones…"
            aria-label="Buscar en el sitio"
            className="w-full bg-transparent text-[15px] text-paper placeholder:text-paper/35 focus:outline-none"
          />
          <kbd className="mono rounded border border-white/12 px-1.5 py-0.5 text-[10px] text-paper/40">
            esc
          </kbd>
        </div>

        {/* resultados */}
        <ul ref={listRef} className="max-h-[46vh] overflow-y-auto py-2" role="listbox">
          {results.length === 0 && (
            <li className="px-5 py-8 text-center text-[14px] text-paper/45">
              Nada por aquí — prueba con &ldquo;servicios&rdquo;, &ldquo;ia&rdquo; o &ldquo;whatsapp&rdquo;.
            </li>
          )}
          {results.map((it, i) => {
            const showGroup = it.group !== lastGroup;
            lastGroup = it.group;
            return (
              <li key={it.id}>
                {showGroup && (
                  <p className="kicker !text-paper/35 px-5 pb-1.5 pt-3 !text-[10px]">{it.group}</p>
                )}
                <button
                  data-idx={i}
                  onClick={it.run}
                  onMouseEnter={() => setActive(i)}
                  role="option"
                  aria-selected={i === active}
                  className={`mx-2 flex w-[calc(100%-16px)] items-center gap-3.5 rounded-lg px-3 py-2.5 text-left transition-colors ${
                    i === active ? "bg-cobalt/15 text-paper" : "text-paper/75"
                  }`}
                >
                  <span
                    className={`grid h-7 w-7 flex-shrink-0 place-items-center rounded-md border ${
                      i === active ? "border-cobalt/50 text-cobalt" : "border-white/10 text-paper/50"
                    }`}
                  >
                    <Icon name={it.icon} className="h-[14px] w-[14px]" />
                  </span>
                  <span className="flex-1 truncate text-[14px] font-medium">{it.label}</span>
                  {it.hint && (
                    <span className="mono flex-shrink-0 text-[10.5px] text-paper/35">{it.hint}</span>
                  )}
                  {i === active && <span className="text-[12px] text-cobalt">↵</span>}
                </button>
              </li>
            );
          })}
        </ul>

        {/* pie */}
        <div className="mono flex items-center gap-4 border-t border-white/8 px-5 py-2.5 text-[10.5px] text-paper/35">
          <span>↑↓ navegar</span>
          <span>↵ abrir</span>
          <span>esc cerrar</span>
          <span className="ml-auto flex items-center gap-1.5 text-paper/25">
            <Icon name="command" className="h-3 w-3" /> Blue Box
          </span>
        </div>
      </div>
    </div>
  );
}
