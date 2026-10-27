import Link from "next/link";
import { Container } from "@/components/ui/container";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="border-b border-ink-100 bg-brand-50">
      <Container className="py-10 sm:py-14">
        <nav aria-label="Breadcrumb" className="mb-7">
          <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-ink-500">
            <li>
              <Link className="transition hover:text-brand-600" href="/">
                Home
              </Link>
            </li>
            {breadcrumbs.map(({ href, label }) => (
              <li className="flex items-center gap-2" key={label}>
                <span aria-hidden="true" className="text-ink-300">/</span>
                {href ? (
                  <Link className="transition hover:text-brand-600" href={href}>
                    {label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-ink-700">{label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="max-w-4xl border-l-2 border-accent-teal pl-5 sm:pl-7">
          <p className="text-xs font-bold uppercase tracking-[0.17em] text-brand-600">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.045em] text-ink-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-ink-700 sm:text-lg">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
