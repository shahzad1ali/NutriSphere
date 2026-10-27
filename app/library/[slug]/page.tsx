import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/icons";
import { PageTransition } from "@/components/ui/PageTransition";
import { Container, SectionHeading } from "@/components/ui";
import { ImageGallery } from "@/components/ui/ImageGallery";
import { SmartImage } from "@/components/ui/SmartImage";
import { sampleGuides } from "@/lib/data";
import { images } from "@/lib/images";
import { siteOrigin } from "@/lib/site";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return sampleGuides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = sampleGuides.find((item) => item.slug === slug);
  if (!guide) return { title: "Guide not found" };
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/library/${guide.slug}` },
    openGraph: {
      title: `${guide.title} | NutriSphere Knowledge Library`,
      description: guide.description,
      url: `${siteOrigin}/library/${guide.slug}`,
      images: [`${siteOrigin}${guide.image.src}`],
    },
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = sampleGuides.find((item) => item.slug === slug);
  if (!guide) notFound();

  return (
    <PageTransition>
      <main id="main-content" tabIndex={-1}>
          <nav aria-label="Breadcrumb" className="bg-ink-50 text-ink-700">
            <Container className="flex min-h-12 items-center gap-2 text-sm">
              <Link className="inline-flex min-h-11 items-center text-ink-600 hover:text-brand-700" href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link className="inline-flex min-h-11 items-center text-ink-600 hover:text-brand-700" href="/library">Knowledge Library</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="truncate font-semibold">{guide.title}</span>
            </Container>
          </nav>
          <article>
            <div className="relative h-[20rem] sm:h-[30rem]">
              <SmartImage asset={guide.image} className="size-full" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent" />
              <Container className="absolute inset-x-0 bottom-0 pb-8 text-white sm:pb-12">
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand-200">{guide.category} · {guide.readTime}</p>
                <h1 className="mt-3 max-w-4xl font-heading text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">{guide.title}</h1>
              </Container>
            </div>
            <Container className="grid gap-12 py-12 lg:grid-cols-[minmax(0,2fr)_minmax(16rem,1fr)] sm:py-16">
              <div>
                <SectionHeading as="h2" description={guide.intro} title="A guide to a more informed conversation" />
                <div className="mt-8 space-y-5">
                  {guide.longDescription.map((paragraph) => <p className="text-base leading-8 text-ink-600" key={paragraph}>{paragraph}</p>)}
                </div>
                <h2 className="mt-12 font-heading text-2xl font-semibold text-brand-900">Related scenes</h2>
                <div className="mt-5">
                  <ImageGallery images={[guide.image, images.lab.lab1, images.farm.farm4]} title={`${guide.title} gallery`} />
                </div>
                <Link className="mt-8 inline-flex min-h-11 items-center gap-2 font-semibold text-brand-800 hover:text-brand-900" href="/library">
                  <Arrow aria-hidden="true" className="size-4 rotate-180" /> Back to all guides
                </Link>
              </div>
              <aside className="h-fit rounded-3xl border border-brand-100 bg-brand-50 p-6 lg:sticky lg:top-24">
                <h2 className="font-heading text-xl font-semibold text-brand-900">A note on sample content</h2>
                <p className="mt-3 text-sm leading-6 text-ink-600">This guide is an illustrative sample. It is not medical advice and should be replaced by reviewed, region-appropriate content before publication.</p>
                <Link className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-800 hover:text-brand-900" href="/contact">Contact the team <Arrow aria-hidden="true" className="size-4" /></Link>
              </aside>
            </Container>
          </article>
      </main>
    </PageTransition>
  );
}
