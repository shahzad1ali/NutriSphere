import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentDetailPage } from "@/components/sections/ContentDetailPage";
import { productPages } from "@/lib/data";
import { images } from "@/lib/images";
import { siteOrigin } from "@/lib/site";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return productPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const record = productPages.find((item) => item.slug === slug);
  if (!record) return { title: "Product not found" };
  return {
    title: record.title,
    description: record.intro,
    alternates: { canonical: `/products/${record.slug}` },
    openGraph: {
      title: `${record.title} | NutriSphere`,
      description: record.intro,
      url: `${siteOrigin}/products/${record.slug}`,
      images: [`${siteOrigin}${record.image.src ?? images.hero.src}`],
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const index = productPages.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  const record = productPages[index];
  const previous = productPages[index - 1];
  const next = productPages[index + 1];

  return (
    <ContentDetailPage
      kind="products"
      next={next}
      previous={previous}
      record={record}
    />
  );
}
