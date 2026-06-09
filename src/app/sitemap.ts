import type { MetadataRoute } from "next";
import { SITE_URL, SOLUTIONS } from "@/lib/constants";
import { ARTICLES } from "@/lib/insights";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "",
    "/servicios",
    "/industrias",
    "/casos",
    "/insights",
    "/nosotros",
    "/tecnologia",
    "/contacto",
    ...SOLUTIONS.map((s) => `/soluciones/${s.id}`),
    ...ARTICLES.map((a) => `/insights/${a.slug}`),
  ];
  return paths.map((p) => ({
    url: `${SITE_URL}${p}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
}
