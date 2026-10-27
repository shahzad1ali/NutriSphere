import type { MetadataRoute } from "next";
import { siteOrigin } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const configured = Boolean(process.env.NEXT_PUBLIC_SITE_URL?.trim());

  return {
    rules: {
      userAgent: "*",
      allow: configured ? "/" : undefined,
      disallow: configured ? undefined : "/",
    },
    sitemap: configured ? `${siteOrigin}/sitemap.xml` : undefined,
  };
}
