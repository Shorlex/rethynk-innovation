import { Cormorant_Garamond, Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "./component/Header";
import Footer from "./component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const comorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

inter

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://rethynkinnovation.com"),
  title: {
    default: "ReThynk Innovation | Digital Transformation Agency in Nigeria",
    template: "%s | ReThynk Innovation",
  },
  description:
    "Leading digital transformation agency in Nigeria. We deliver AI automation, web development, cloud migration, and data analytics solutions for businesses.",
  keywords: [
    "digital transformation Nigeria",
    "AI automation Nigeria",
    "web development Nigeria",
    "cloud migration Nigeria",
    "data analytics Nigeria",
    "business automation",
    "ReThynk Innovation",
  ],
  authors: [{ name: "ReThynk Innovation" }],
  creator: "ReThynk Innovation",
  publisher: "ReThynk Innovation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://rethynkinnovation.com",
    siteName: "ReThynk Innovation",
    title: "ReThynk Innovation | Digital Transformation Agency in Nigeria",
    description:
      "Leading digital transformation agency in Nigeria. We deliver AI automation, web development, cloud migration, and data analytics solutions.",
    images: [
      {
        url: "/og-image.png", // Create a 1200x630px image
        width: 1200,
        height: 630,
        alt: "ReThynk Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReThynk Innovation | Digital Transformation Agency",
    description: "Leading digital transformation agency in Nigeria.",
    creator: "@rethynkinnovation", // Add your Twitter handle
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "eREU1etzwLwn_5o8MNDlERJR7nnQfPiPAd4T6hOcmog", // Get from Google Search Console
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema - Global */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ReThynk Innovation",
              url: "https://rethynkinnovation.com",
              logo: "https://rethynkinnovation.com/logo.webp",
              description: "Leading digital transformation agency in Nigeria",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressRegion: "Lagos",
                addressCountry: "NG",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+2349035632364", // Add your phone
                contactType: "Customer Service",
                areaServed: "NG",
                availableLanguage: ["en"],
              },
              sameAs: [
                "https://facebook.com/rethynkinnovation", // Add your social links
                "https://x.com/thynkinnovation",
                "https://linkedin.com/company/rethynkinnovation",
              ],
            }),
          }}
        />
      </head>
      <body>
        <main className="3xl:w-[1620px] relative my-0 mx-auto">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
