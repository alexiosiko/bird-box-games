import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import {  Delius_Swash_Caps } from "next/font/google";

const font = Delius_Swash_Caps({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-delius",
});

export const metadata: Metadata = {
  title: "Bird Box Games",
  description: "An indie game development company based in Greece, crafting cozy and creative games.",
  robots: "index, follow",
  openGraph: {
    title: "Bird Box Games",
    description: "Fun games for everyone.",
    url: "https://www.birdboxgames.com/",
    type: "website",
    images: [
      {
        url: "https://www.birdboxgames.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bird Box Games Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bird Box Games",
    description: "Cozy & creative games for everyone.",
    images: ["https://www.birdboxgames.com/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" sizes="32x32" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bird Box Games",
              url: "https://www.birdboxgames.com/",
              logo: "https://www.birdboxgames.com/logo.png",
              sameAs: [
                "https://instagram.com/birdboxgames",
                "https://x.com/birdboxgames",
                "https://store.steampowered.com/search/?developer=Bird%20Box%20Games",
              ],
            }),
          }}
        />
      </head>
      <body className={font.className}>
        <div className="overflow-hidden">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
