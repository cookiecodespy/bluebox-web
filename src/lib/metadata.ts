import type { Metadata } from "next";
import { SITE_NAME, SITE_TAGLINE, SITE_DESCRIPTION, SITE_URL } from "./constants";
import { asset } from "./asset";

export function buildMetadata(overrides?: Partial<Metadata>): Metadata {
  const title = overrides?.title
    ? `${overrides.title} | ${SITE_NAME}`
    : `${SITE_NAME} – ${SITE_TAGLINE}`;

  const description =
    typeof overrides?.description === "string"
      ? overrides.description
      : SITE_DESCRIPTION;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: String(title),
      description,
      url: SITE_URL,
      siteName: SITE_NAME,
      locale: "es_CL",
      type: "website",
      images: [
        {
          // metadataBase ya resuelve el basePath; no prefijar aquí.
          url: "/images/bluebox-logo.png",
          width: 1310,
          height: 1200,
          alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: String(title),
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: asset("/images/bluebox-logo.png"),
      apple: asset("/images/bluebox-logo.png"),
    },
    ...overrides,
  };
}
