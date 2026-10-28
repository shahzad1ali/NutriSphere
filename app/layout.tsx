import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactBar } from "@/components/layout/FloatingContactBar";
import { Header } from "@/components/layout/Header";
import { siteOrigin } from "@/lib/site";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const canonicalUrl = "https://nutritech-theta.vercel.app/";
const socialImageUrl =
  "https://nutritech-theta.vercel.app/solutions/nutritech-social.png";
const socialImageAlt =
  "Nutritech animal nutrition support, rooted in wellbeing";

export const metadata: Metadata = {
  title: {
    default: "Nutritech | Animal nutrition support, rooted in wellbeing",
    template: "%s | Nutritech",
  },
  description:
    "Feed additives, nutrition programs and professional nutrition consultation for healthier animals and stronger communities.",
  metadataBase: new URL(canonicalUrl),
  openGraph: {
    title: "Nutritech | Animal nutrition support, rooted in wellbeing",
    description:
      "Feed additives, nutrition programs and professional nutrition consultation for healthier animals and stronger communities.",
    url: canonicalUrl,
    siteName: "Nutritech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutritech | Animal nutrition support, rooted in wellbeing",
    description:
      "Feed additives, nutrition programs and professional nutrition consultation for healthier animals and stronger communities.",
    images: [{ url: socialImageUrl, alt: socialImageAlt }],
  },
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
