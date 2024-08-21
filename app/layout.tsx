import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "../styles/index.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

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

import { Providers } from "./providers";
