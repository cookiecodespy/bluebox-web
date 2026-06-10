"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { asset } from "@/lib/asset";

// Marco de imagen con fallback elegante: si el archivo aún no existe en
// public/images, muestra un placeholder on-brand con el nombre sugerido.
// Apenas dejes el archivo con ese nombre, la foto aparece sola.
export function MediaFrame({
  src,
  alt,
  icon = "dev",
  ratio = "aspect-[4/3]",
  className = "",
  dark = false,
}: {
  src?: string;
  alt: string;
  icon?: string;
  ratio?: string;
  className?: string;
  dark?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // El 404 puede ocurrir antes de que React hidrate (onError no alcanza a
  // engancharse): al montar, revisar si la imagen ya falló.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  const showImg = src && !failed;
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border ${
        dark ? "border-white/12" : "border-line"
      } ${ratio} ${className}`}
    >
      {showImg ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          ref={imgRef}
          src={asset(src!)}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      ) : (
        <div
          className={`relative flex h-full w-full items-center justify-center ${
            dark ? "bg-white/[0.04]" : "bg-gradient-to-br from-paper-2 to-paper-3"
          }`}
        >
          <div className="bp-grid pointer-events-none absolute inset-0 opacity-50" />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(circle at 50% 45%, rgba(27,54,255,0.07), transparent 60%)" }}
          />

          {/* esquinas del logo Blue Box (4 colores) */}
          <span className="absolute left-3 top-3 h-3.5 w-3.5 rounded-tl border-l-2 border-t-2 border-[#3b6cff]/70" aria-hidden="true" />
          <span className="absolute right-3 top-3 h-3.5 w-3.5 rounded-tr border-r-2 border-t-2 border-[#27ae60]/60" aria-hidden="true" />
          <span className="absolute bottom-3 left-3 h-3.5 w-3.5 rounded-bl border-b-2 border-l-2 border-[#f3c613]/60" aria-hidden="true" />
          <span className="absolute bottom-3 right-3 h-3.5 w-3.5 rounded-br border-b-2 border-r-2 border-[#e2533b]/60" aria-hidden="true" />

          {/* anillos blueprint alrededor del ícono */}
          <span
            className={`pointer-events-none absolute aspect-square w-[58%] max-w-[200px] rounded-full border border-dashed ${
              dark ? "border-white/10" : "border-line"
            }`}
            aria-hidden="true"
          />
          <span
            className={`pointer-events-none absolute aspect-square w-[36%] max-w-[124px] rounded-full border ${
              dark ? "border-white/8" : "border-line-soft"
            }`}
            aria-hidden="true"
          />

          <span
            className={`relative grid h-12 w-12 place-items-center rounded-xl border text-cobalt ${
              dark ? "border-white/15" : "border-line bg-paper"
            }`}
          >
            <Icon name={icon} className="h-[22px] w-[22px]" />
          </span>

          {src && (
            <span
              className={`mono absolute bottom-2.5 right-3.5 text-[9px] tracking-wide ${
                dark ? "text-paper/25" : "text-ink-mute/60"
              }`}
            >
              {src.split("/").pop()}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
