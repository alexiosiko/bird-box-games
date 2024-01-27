import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/sections/nav'
import { Open_Sans } from 'next/font/google'
import Wallpaper from '@/components/wallpaper';
import wallpaperSVG from "@/images/wallpapers/whole.svg"

const inter = Open_Sans({
	subsets: ['latin'],
	weight: '500',
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
				<Wallpaper className='z-10 top-[100vh] !h-[5000px]' svg={wallpaperSVG} />
				<Nav />
				{children}
			</body>

		</html>
	)
}
