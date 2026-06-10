"use client";

import { useState } from "react";
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
  const show = src && !failed;
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border ${
        dark ? "border-white/12" : "border-line"
      } ${ratio} ${className}`}
    >
      {show ? (
        <video
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
            style={{ background: "radial-gradient(circle at 50% 50%, rgba(27,54,255,0.10), transparent 65%)" }}
          />
          <div className="relative flex flex-col items-center gap-2.5">
            <span className="relative grid h-14 w-14 place-items-center rounded-full border border-cobalt/40 text-cobalt">
              <span className="absolute inset-0 animate-ping rounded-full bg-cobalt/10" />
              <Icon name={icon} className="h-6 w-6" />
            </span>
            <span className={`mono text-[10px] ${dark ? "text-paper/35" : "text-ink-mute"}`}>
              {src ? src.split("/").pop() : "video.mp4"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
