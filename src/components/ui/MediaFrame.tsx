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
          <div className="relative flex flex-col items-center gap-2.5">
            <span
              className={`grid h-12 w-12 place-items-center rounded-xl border text-cobalt ${
                dark ? "border-white/15" : "border-line bg-paper"
              }`}
            >
              <Icon name={icon} className="h-[22px] w-[22px]" />
            </span>
            <span className={`mono text-[10px] ${dark ? "text-paper/35" : "text-ink-mute"}`}>
              {src ? src.split("/").pop() : "imagen"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
