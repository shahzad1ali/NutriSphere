import Link from "next/link";
import { Arrow, Check, Stethoscope } from "@/components/icons";
import { Badge, Button, Container } from "@/components/ui";
import { ImageGallery } from "@/components/ui/ImageGallery";
import { PageTransition } from "@/components/ui/PageTransition";
import { SmartImage } from "@/components/ui/SmartImage";
import { productPages, speciesPages, type DetailRecord, type ProductRecord } from "@/lib/data";
import { HexIcon } from "@/components/icons/HexIcon";

type ContentDetailPageProps = {
  record: DetailRecord;
  kind: "species" | "products";
  previous?: { slug: string; title: string };
  next?: { slug: string; title: string };
};

function DetailRelatedCard({
  href,
  image,
  title,
  description,
  external = false,
}: {
  href: string;
  image: DetailRecord["image"];
  title: string;
  description: string;
  external?: boolean;
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg">
      <Link className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-4 focus-visible:outline-brand-700" href={href} rel={external ? "noopener noreferrer" : undefined} target={external ? "_blank" : undefined}>
        <span className="sr-only">{external ? `View ${title} on Kemin’s website` : `View ${title}`}</span>
      </Link>
      <div className="relative h-32 overflow-hidden">
        <SmartImage asset={image} className="size-full transition-transform duration-500 group-hover:scale-105" imageClassName="transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 80vw, 250px" />
      </div>
      <div className="p-4">
        <h4 className="font-heading font-semibold text-brand-900">{title}</h4>
        <p className="mt-1 text-xs leading-5 text-ink-600">{description}</p>
        <span className="mt-3 inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-brand-800">{external ? "View on Kemin" : "Explore"} <Arrow aria-hidden="true" className="size-4" /></span>
      </div>
    </article>
  );
}

export function ContentDetailPage({
  record,
  kind,
  previous,
  next,
}: ContentDetailPageProps) {
  const isSpecies = kind === "species";
  const relatedProducts = record.relatedProducts
    .filter((slug, index, slugs) => slugs.indexOf(slug) === index)
    .map((slug) => productPages.find((product) => product.slug === slug))
    .filter((product): product is ProductRecord => Boolean(product));
  const relatedSpecies = record.relatedSpecies
    .filter((slug, index, slugs) => slugs.indexOf(slug) === index)
    .map((slug) => speciesPages.find((species) => species.slug === slug))
    .filter(
      (species): species is (typeof speciesPages)[number] =>
        species !== undefined,
    );
  const practiceImages = record.gallery.filter(
    (image, index, gallery) =>
      image.src !== record.image.src &&
      gallery.findIndex((galleryImage) => galleryImage.src === image.src) === index,
  );
  const usedImageSources = new Set([
    record.image.src,
    ...practiceImages.map((image) => image.src),
  ]);
  const related = isSpecies
    ? relatedProducts
        .filter((product) => !usedImageSources.has(product.image.src))
        .map((product) => ({
          ...product,
          href: product.keminUrl,
          external: true,
        }))
    : relatedSpecies
        .filter((species) => !usedImageSources.has(species.image.src))
        .map((species) => ({
          ...species,
          href: `/species/${species.slug}`,
          external: false,
        }));
  const articleAnchor = isSpecies ? "/species" : "/products";

  return (
    <PageTransition>
      <main className="bg-white text-ink-900" id="main-content" tabIndex={-1}>
          <nav aria-label="Breadcrumb" className="bg-ink-50 text-ink-700">
            <Container className="flex min-h-12 items-center gap-2 text-sm">
              <Link className="min-h-11 inline-flex items-center text-ink-600 hover:text-brand-700" href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <Link className="min-h-11 inline-flex items-center text-ink-600 hover:text-brand-700" href={articleAnchor}>{isSpecies ? "Species" : "Products"}</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="font-semibold">{record.title}</span>
            </Container>
          </nav>
          <section aria-labelledby="detail-title" className="relative">
            <div className="relative h-[24rem] sm:h-[32rem] lg:h-[38rem]">
              <SmartImage asset={record.image} className="size-full" imageClassName="object-center" sizes="100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0">
                <Container className="pb-8 sm:pb-12">
                  <div className="max-w-3xl bg-ink-950/85 p-5 text-white backdrop-blur-md [clip-path:polygon(0_0,100%_0,96%_100%,0_100%)] sm:p-8">
                    <Badge className="border border-white/15 bg-white/10 text-brand-100">{isSpecies ? "Species care" : "Kemin product"}</Badge>
                    <h1 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.04em] sm:text-5xl" id="detail-title">{record.title}</h1>
                    <p className="mt-2 text-white/85 sm:text-lg">{record.tagline}</p>
                  </div>
                </Container>
              </div>
            </div>
          </section>

          <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-12 text-ink-900 lg:col-span-8">
              <section aria-labelledby="overview">
                <h2 className="font-heading text-2xl font-semibold text-ink-900 sm:text-3xl" id="overview">An overview of {record.title}</h2>
                <p className="mt-6 rounded-r-2xl border-l-4 border-brand-500 bg-brand-50/70 px-5 py-5 text-lg leading-8 text-ink-700 sm:px-7">
                  {record.intro}
                </p>
                <div className="mt-8 grid gap-3">
                  {record.longDescription.map((paragraph, index) => (
                    <article
                      className="grid gap-3 rounded-2xl border border-ink-100 bg-white p-5 shadow-sm sm:grid-cols-[3rem_1fr] sm:gap-5 sm:p-6"
                      key={paragraph}
                    >
                      <span className="font-mono text-sm font-semibold tracking-widest text-brand-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="text-base leading-7 text-ink-700">
                        {paragraph}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <section aria-labelledby="benefits-heading" id="common-diseases">
                <h2 className="font-heading text-2xl font-semibold text-ink-900" id="benefits-heading">{isSpecies ? "Care planning considerations" : "Product information at a glance"}</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {record.keyBenefits.map((benefit) => (
                    <li className="flex gap-3 rounded-2xl bg-brand-50 p-4 text-sm leading-6 text-ink-700" key={benefit}>
                      <Check aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-brand-700" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="gallery-title" id="nutrition-plan">
                <h2 className="mb-5 font-heading text-2xl font-semibold text-ink-900" id="gallery-title">In practice</h2>
                {practiceImages.length > 0 ? (
                  <ImageGallery images={practiceImages} title={`${record.title} gallery`} />
                ) : (
                  <p className="text-sm leading-6 text-ink-600">
                    More species-specific photos will be added soon.
                  </p>
                )}
              </section>

              <section aria-labelledby="faq-title">
                <h2 className="font-heading text-2xl font-semibold text-ink-900" id="faq-title">Frequently asked questions</h2>
                <div className="mt-4 divide-y divide-ink-200 border-y border-ink-200">
                  {record.faqs.map((faq) => (
                    <details className="group py-1" key={faq.question}>
                      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 font-semibold text-ink-800 [&::-webkit-details-marker]:hidden">
                        {faq.question}<Arrow aria-hidden="true" className="size-4 rotate-90 transition-transform group-open:-rotate-90" />
                      </summary>
                      <p className="pb-4 pr-8 text-sm leading-6 text-ink-600">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              <section aria-labelledby="related-title" id="recommended-products">
                <h2 className="font-heading text-2xl font-semibold text-ink-900" id="related-title">{isSpecies ? "Related products" : "Related species"}</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {related.map((item) => (
                    <DetailRelatedCard
                      description={item.tagline}
                      external={item.external}
                      href={item.href}
                      image={item.image}
                      key={item.slug}
                      title={item.title}
                    />
                  ))}
                </div>
                {related.length === 0 ? <p className="mt-4 text-sm text-ink-600">Contact us for related product information.</p> : null}
              </section>

              <nav aria-label="Browse related pages" className="flex items-center justify-between gap-4 border-t border-ink-200 pt-6">
                {previous ? <Link className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900" href={`/${kind}/${previous.slug}`}><Arrow aria-hidden="true" className="size-4 rotate-180" />Previous: {previous.title}</Link> : <span />}
                {next ? <Link className="group inline-flex min-h-11 items-center gap-2 text-right text-sm font-semibold text-brand-700 hover:text-brand-900" href={`/${kind}/${next.slug}`}>Next: {next.title}<Arrow aria-hidden="true" className="size-4" /></Link> : <span />}
              </nav>
            </div>

            <aside aria-label={`${record.title} navigation and consultation`} className="lg:col-span-4">
              <div className="space-y-5 lg:sticky lg:top-24">
                <div className="relative overflow-hidden rounded-3xl border border-brand-100 bg-white p-6 shadow-lg">
                  <HexIcon className="absolute right-5 top-5 size-14" icon={Stethoscope} variant="dark" />
                  <p className="pr-16 text-xs font-bold uppercase tracking-[0.15em] text-brand-700">{isSpecies ? "Care overview" : "Product overview"}</p>
                  <h2 className="mt-3 pr-12 font-heading text-xl font-semibold text-brand-900">{record.title}</h2>
                  <div className="mt-5 divide-y divide-ink-100">
                    {[
                      ["Overview", "#overview", "Read the introduction and care context."],
                      ["Common Diseases", "#common-diseases", "Review general care-planning considerations."],
                      ["Recommended Products", "#recommended-products", "See related Kemin animal nutrition products."],
                      ["Nutrition Plan", "#nutrition-plan", "Explore the related care gallery."],
                      ["Contact Us", "/contact", "Start a conversation with the team."],
                    ].map(([label, href, detail]) => (
                      <details className="group/menu" key={label}>
                        <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-2 text-sm font-medium text-ink-700 transition hover:text-brand-800 [&::-webkit-details-marker]:hidden">
                          {label}<Arrow aria-hidden="true" className="size-4 rotate-90 transition-transform group-open/menu:-rotate-90" />
                        </summary>
                        <div className="pb-3 pl-2">
                          <p className="text-xs leading-5 text-ink-600">{detail}</p>
                          <a className="mt-2 inline-flex min-h-11 items-center text-xs font-semibold text-brand-800 hover:text-brand-900" href={href}>View section</a>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
                <div className="rounded-3xl border-l-4 border-accent-teal bg-brand-50 p-6">
                  <h2 className="font-heading text-lg font-semibold text-brand-900">Need a professional perspective?</h2>
                  <p className="mt-2 text-sm leading-6 text-ink-600">Talk with a nutrition professional about your context and local options.</p>
                  <Button className="mt-4 w-full" href="/contact" size="sm" withArrow>Talk to a Nutritionist</Button>
                </div>
              </div>
            </aside>
          </Container>
      </main>
    </PageTransition>
  );
}
