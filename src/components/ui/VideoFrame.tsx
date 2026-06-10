"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { asset } from "@/lib/asset";

// Video en loop (autoplay/muted/playsinline, como CodersLab). Si el archivo no
// existe aún, muestra un placeholder animado on-brand. Drop-in: deja el .mp4 con
// ese nombre en public/videos y aparece solo.
export function VideoFrame({
  src,
  poster,
  icon = "dev",
  ratio = "aspect-video",
  className = "",
  dark = false,
}: {
  src?: string;
  poster?: string;
  icon?: string;
  ratio?: string;
  className?: string;
  dark?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // El error de carga puede ocurrir antes de la hidratación; revisar al montar.
  useEffect(() => {
    const v = videoRef.current;
    if (v && (v.error || v.networkState === 3)) setFailed(true);
  }, []);

  const show = src && !failed;
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border ${
        dark ? "border-white/12" : "border-line"
      } ${ratio} ${className}`}
    >
      {show ? (
        <video
          ref={videoRef}
          src={asset(src!)}
          poster={poster ? asset(poster) : undefined}
          autoPlay
          loop
          muted
          playsInline
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
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
            style={{ background: "radial-gradient(circle at 50% 45%, rgba(27,54,255,0.08), transparent 60%)" }}
          />

          {/* esquinas del logo Blue Box (4 colores) */}
          <span className="absolute left-3 top-3 h-3.5 w-3.5 rounded-tl border-l-2 border-t-2 border-[#3b6cff]/70" aria-hidden="true" />
          <span className="absolute right-3 top-3 h-3.5 w-3.5 rounded-tr border-r-2 border-t-2 border-[#27ae60]/60" aria-hidden="true" />
          <span className="absolute bottom-3 left-3 h-3.5 w-3.5 rounded-bl border-b-2 border-l-2 border-[#f3c613]/60" aria-hidden="true" />
          <span className="absolute bottom-3 right-3 h-3.5 w-3.5 rounded-br border-b-2 border-r-2 border-[#e2533b]/60" aria-hidden="true" />

          {/* anillos blueprint + pulso de "play" */}
          <span
            className={`pointer-events-none absolute aspect-square w-[58%] max-w-[200px] rounded-full border border-dashed ${
              dark ? "border-white/10" : "border-line"
            }`}
            aria-hidden="true"
          />
          <span className="relative grid h-14 w-14 place-items-center rounded-full border border-cobalt/40 text-cobalt">
            <span className="absolute inset-0 animate-ping rounded-full bg-cobalt/10" />
            <Icon name={icon} className="h-6 w-6" />
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
