import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { business } from "@/lib/data";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// TODO: replace siteUrl with the real production domain once you have one
const siteUrl = "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${business.name} | Cakes, Small Chops & Event Catering in ${business.city}`,
  description: `${business.tagline}. Custom cakes, small chops, snacks and full event catering for weddings, birthdays and corporate events in ${business.city}. Order on WhatsApp today.`,
  keywords: [
    "caterer in " + business.city,
    "cake maker " + business.city,
    "small chops " + business.city,
    "wedding catering Nigeria",
    "birthday cake order",
    "corporate catering",
    "bead jewellery Nigeria",
  ],
  openGraph: {
    title: business.name,
    description: business.tagline,
    url: siteUrl,
    siteName: business.name,
    locale: "en_NG",
    type: "website",
    // TODO: add a real 1200x630 social share image at /public/og-image.jpg
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: business.name,
    description: business.tagline,
  },
  alternates: { canonical: siteUrl },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: business.name,
  description: business.tagline,
  telephone: business.phoneDisplay,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: business.city,
    addressCountry: "NG",
  },
  servesCuisine: ["Nigerian", "Catering", "Confectionery"],
  priceRange: "₦₦",
  sameAs: [business.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
