import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      <div className="bp-grid-fade pointer-events-none absolute inset-0" />
      <div className="relative text-center">
        <div className="font-display text-[clamp(5rem,18vw,11rem)] font-semibold leading-none tracking-[-0.04em] text-ink">
          4<span className="text-cobalt">0</span>4
        </div>
        <p className="mono mt-2 text-xs uppercase tracking-[0.16em] text-ink-mute">
          Página no encontrada
        </p>
        <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
          La página que buscas no existe o fue movida.
        </p>
        <Button href="/" size="lg" className="mt-8 text-[15px]">
          ← Volver al inicio
        </Button>
      </div>
    </div>
  );
}
