import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/sections/nav'
import { Signika_Negative } from 'next/font/google'
import Image from 'next/image';
import Wallpaper from "@/images/svg/wallpaper-waves.svg";

const inter = Signika_Negative({
	subsets: ['latin'],
	weight: '400'
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
			<body className={`${inter.className}  bg-[var(--background)] text-[var(--base)]`}>
				<div className=''>
					<Nav />
					{children}
				</div>
			</body>

		</html>
	)
}
