import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen mesh-bg flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-9xl font-extrabold gradient-text mb-6">404</div>
        <h1 className="text-3xl font-bold text-white mb-4">
          Página no encontrada
        </h1>
        <p className="text-slate-300 text-lg mb-8 max-w-md mx-auto">
          La página que buscas no existe o fue movida. Vuelve al inicio para
          continuar.
        </p>
        <Button href="/" variant="primary" size="lg">
          Volver al inicio
        </Button>
      </div>
    </div>
  );
}
