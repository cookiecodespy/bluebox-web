// Prefijo para assets estáticos servidos desde /public.
// En GitHub Pages el sitio vive bajo /bluebox-web (NEXT_PUBLIC_BASE_PATH);
// en dominio propio el prefijo queda vacío. Los datos usan rutas limpias
// ("/images/...") y el prefijo se aplica solo donde se renderiza.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const asset = (path: string) => `${BASE_PATH}${path}`;
