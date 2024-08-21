import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "../styles/index.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: 'Polytech Development - Custom Web Solutions',
	description: 'We provide tailored web development solutions for businesses.',
	openGraph: {
	  title: 'Polytech Development',
	  description: 'Tailored web development solutions.',
	  images: ['/og-image.jpg'],
	},
	twitter: {
	  card: 'summary_large_image',
	  title: 'Polytech Development',
	},
  }

export default function RootLayout({
	children,
}: {
  	children: React.ReactNode;
}) {
	return (
		<html suppressHydrationWarning lang="en">

			<body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
				<Providers>
					<Header />
						{children}
					<Footer />
				</Providers>
				<Analytics />
			</body>
		</html>
	);
}

import { Providers } from "./providers";import { Metadata } from "next";

