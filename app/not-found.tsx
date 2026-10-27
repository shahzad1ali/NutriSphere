import { Leaf } from "@/components/icons";
import { Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <main
      className="grid min-h-[70vh] place-items-center bg-brand-50 py-20"
      id="main-content"
      tabIndex={-1}
    >
      <Container className="text-center">
        <span className="mx-auto grid size-16 place-items-center rounded-3xl bg-brand-900 text-brand-200">
          <Leaf aria-hidden="true" className="size-8" />
        </span>
        <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-brand-800">
          Page not found
        </p>
        <h1 className="mt-3 font-heading text-4xl font-semibold tracking-[-0.05em] text-brand-900 sm:text-5xl">
          This page has wandered off.
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-ink-600">
          The address may be out of date or the page may have moved. Head back
          to NutriSphere to find animal-health resources and support.
        </p>
        <Button className="mt-8" href="/" size="lg" withArrow>
          Return to homepage
        </Button>
      </Container>
    </main>
  );
}
