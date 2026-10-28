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
    default: "Nutritech | Animal nutrition support, rooted in wellbeing",
    template: "%s | Nutritech",
  },
  description:
    "Feed additives, nutrition programs and professional nutrition consultation for healthier animals and stronger communities.",
  openGraph: {
    title: "Nutritech | Animal nutrition support, rooted in wellbeing",
    description:
      "Feed additives, nutrition programs and professional nutrition consultation for healthier animals and stronger communities.",
    url: siteOrigin,
    siteName: "Nutritech",
    type: "website",
  },
  metadataBase: siteUrl,
  icons: {
    icon: "/solutions/Nutritech-favicon.png",
    apple: "/solutions/Nutritech.png",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#C51D21",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteOrigin}/#organization`,
      name: "Nutritech",
      url: siteOrigin,
      description:
        "Feed additives, nutrition programs and professional nutrition consultation for animal health.",
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
