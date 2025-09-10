import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, UnifrakturMaguntia } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oldEnglish = UnifrakturMaguntia({
  variable: "--font-old-english",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Real Love",
    template: "%s | Real Love",
  },
  description:
    "Real Love is a movement creating spaces of hope, healing, creativity, and faith through community, outreach, artist development, and spiritual renewal.",
  applicationName: "Real Love",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Real Love",
    description:
      "Real Love is a movement creating spaces of hope, healing, creativity, and faith.",
    siteName: "Real Love",
    images: [
      {
        url: "/real-love-logo.png",
        width: 1200,
        height: 630,
        alt: "Real Love logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Love",
    description:
      "Real Love is a movement creating spaces of hope, healing, creativity, and faith.",
    images: ["/real-love-logo.png"],
  },
  icons: {
    icon: "/real-love-logo.png",
    shortcut: "/real-love-logo.png",
    apple: "/real-love-logo.png",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ef4444",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oldEnglish.variable} antialiased`}
      >
        <Script id="ld-json-org" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Real Love",
            url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
            logo: "/real-love-logo.png",
            description:
              "Real Love is a movement creating spaces of hope, healing, creativity, and faith through community, outreach, artist development, and spiritual renewal.",
          })}
        </Script>
        <a id="top" />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
