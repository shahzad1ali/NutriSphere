import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentDetailPage } from "@/components/sections/ContentDetailPage";
import { speciesPages } from "@/lib/data";
import { images } from "@/lib/images";
import { siteOrigin } from "@/lib/site";

type SpeciesPageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return speciesPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: SpeciesPageProps): Promise<Metadata> {
  const { slug } = await params;
  const record = speciesPages.find((item) => item.slug === slug);
  if (!record) return { title: "Species not found" };
  return {
    title: `${record.title} Animal Health`,
    description: record.intro,
    alternates: { canonical: `/species/${record.slug}` },
    openGraph: {
      title: `${record.title} Animal Health | Nutritech`,
      description: record.intro,
      url: `${siteOrigin}/species/${record.slug}`,
      images: [`${siteOrigin}${record.image.src ?? images.hero.src}`],
    },
  };
}

export default async function SpeciesPage({ params }: SpeciesPageProps) {
  const { slug } = await params;
  const index = speciesPages.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  const record = speciesPages[index];
  const previous = speciesPages[index - 1];
  const next = speciesPages[index + 1];

  return (
    <ContentDetailPage
      kind="species"
      next={next}
      previous={previous}
      record={record}
    />
  );
}
