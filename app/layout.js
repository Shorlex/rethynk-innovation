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
  title: "ReThynk Innovation - Digital Transformation Agency in Nigeria",
  description:
    "ReThynk Innovation helps Nigerian SMEs transform manual business processes into digital workflows using AI, Cloud, Web3, and Data solutions.",
  openGraph: {
    images: [
      {
        url: "https://rethynkinnovation.com/api/og/home",
        width: 1200,
        height: 630,
        alt: "ReThynk Innovation Landing Page",
      },
    ],
  },
  twitter: {
    images: ["https://rethynkinnovation.com/api/og/home"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
