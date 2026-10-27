import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactBar } from "@/components/layout/FloatingContactBar";
import { Header } from "@/components/layout/Header";
import { siteOrigin, siteUrl } from "@/lib/site";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "NutriSphere | Veterinary care, rooted in wellbeing",
    template: "%s | NutriSphere",
  },
  description:
    "Veterinary medicines, vaccines, animal nutrition and professional consultation for healthier animals and stronger communities.",
  openGraph: {
    title: "NutriSphere | Veterinary care, rooted in wellbeing",
    description:
      "Veterinary medicines, vaccines, animal nutrition and professional consultation for healthier animals and stronger communities.",
    url: siteOrigin,
    siteName: "NutriSphere",
    type: "website",
  },
  metadataBase: siteUrl,
  icons: {
    icon: "/solutions/logo.png",
    apple: "/solutions/logo.png",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#c8102e",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteOrigin}/#organization`,
      name: "NutriSphere",
      url: siteOrigin,
      description:
        "Veterinary medicines, vaccines, animal nutrition and professional consultation for animal health.",
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "@id": `${siteOrigin}/#medical-business`,
      name: "NutriSphere",
      url: siteOrigin,
      description:
        "Animal-health products and veterinary consultation information.",
      parentOrganization: {
        "@id": `${siteOrigin}/#organization`,
      },
      // TODO: Add only the verified business address, service area and contact information.
    },
  ];

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-white">
        <a
          className="skip-link"
          href="#main-content"
        >
          Skip to content
        </a>
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <FloatingContactBar />
        <script
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}
