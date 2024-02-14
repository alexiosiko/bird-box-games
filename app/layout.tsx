import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/sections/nav'
import { Open_Sans } from 'next/font/google'
import Wallpaper from '@/components/wallpaper';
import wallpaperSVG from "@/images/wallpapers/whole.svg"

const inter = Open_Sans({
	subsets: ['latin'],
	weight: 'variable',
});

export const metadata: Metadata = {
  title: 'Dev Olympus',
  description: 'A software company based in Vancouver that develops applications',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-[var(--background)] text-[var(--base)]`}>
				<Nav />
				{children}
			</body>

		</html>
	)
}
