import type { Metadata } from "next";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "./constants";

export function buildMetadata(overrides?: Partial<Metadata>): Metadata {
  const title = overrides?.title
    ? `${overrides.title} | ${SITE_NAME}`
    : `${SITE_NAME} – Software a medida. Automatización real.`;

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
          url: "/images/og-default.png",
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} – Software a medida`,
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
    ...overrides,
  };
}
