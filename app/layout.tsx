import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Boogaloo } from "next/font/google";

const font = Boogaloo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-delius",
});

export const metadata: Metadata = {
  title: "Bird Box Games",
  description: "Bird Box Games is an indie game company founded by Alexi Ikonomou, CEO and lead developer.",
  robots: "index, follow",
  openGraph: {
    title: "Bird Box Games",
    description: "Indie games by Alexi Ikonomou, CEO of Bird Box Games.",
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
    description: "Indie games by Alexi Ikonomou, CEO of Bird Box Games.",
    images: ["https://www.birdboxgames.com/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" sizes="32x32" />

        {/* Organization Schema */}
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

        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Alexi Ikonomou",
              jobTitle: "CEO",
              worksFor: {
                "@type": "Organization",
                name: "Bird Box Games",
              },
              url: "https://www.birdboxgames.com/",
              sameAs: [
                "https://instagram.com/birdboxgames",
				"https://www.youtube.com/@BirdBoxGames",
                "https://x.com/birdboxgames",
                "https://www.linkedin.com/in/alexi-ikonomou-84a257284/",
				"https://www.facebook.com/alexi.ikonomou"
              ]
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
