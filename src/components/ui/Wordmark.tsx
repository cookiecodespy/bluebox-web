import { asset } from "@/lib/asset";

// Logo oficial de BlueBox (PNG real). Fondo blanco → se muestra como chip
// redondeado que funciona sobre claro y oscuro.

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset("/images/bluebox-logo.png")}
      alt="BlueBox — Custom Software"
      width={120}
      height={110}
      className={`h-14 w-auto rounded-lg ${className}`}
    />
  );
}
