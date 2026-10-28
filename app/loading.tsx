import { Container } from "@/components/ui";

export default function Loading() {
  return (
    <main
      aria-busy="true"
      aria-label="Loading Nutritech"
      className="min-h-[60vh] bg-white py-16"
      role="status"
    >
      <Container>
        <span className="sr-only">Loading page content</span>
        <div className="h-8 w-48 animate-pulse rounded-lg bg-brand-100" />
        <div className="mt-6 h-16 max-w-2xl animate-pulse rounded-xl bg-ink-100" />
        <div className="mt-4 h-5 max-w-xl animate-pulse rounded bg-ink-100" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }, (_, index) => (
            <div
              aria-hidden="true"
              className="h-56 animate-pulse rounded-3xl bg-brand-50"
              key={index}
            />
          ))}
        </div>
      </Container>
    </main>
  );
}
