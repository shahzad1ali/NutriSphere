import type { MetadataRoute } from "next";
import { sampleGuides, speciesPages } from "@/lib/data";
import { siteOrigin } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/products", "/solutions", "/about", "/species", "/library", "/contact"].map((path) => ({
    url: `${siteOrigin}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  const generatedPages = [
    ...speciesPages.map(({ slug }) => `/species/${slug}`),
    ...sampleGuides.map(({ slug }) => `/library/${slug}`),
  ].map((path) => ({
    url: `${siteOrigin}${path}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...generatedPages,
  ];
}
