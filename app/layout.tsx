import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/nav'
import { Signika_Negative } from 'next/font/google'

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
			<body className={`${inter.className} bg-[var(--background)] text-[var(--base)]`}>
				<Nav />
				{children}
			</body>
		</html>
	)
}
