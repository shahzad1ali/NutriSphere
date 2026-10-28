import { notFound, redirect } from "next/navigation";
import { productPages } from "@/lib/data";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return productPages.map(({ slug }) => ({ slug }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = productPages.find((item) => item.slug === slug);
  if (!product) notFound();
  redirect(product.keminUrl);
}
