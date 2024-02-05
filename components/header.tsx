export default function Header({ children, className }: { children: React.ReactNode, className?: string }) {
	return (
		<p className={`${className} max-md:text-center text-4xl font-bold text-[var(--accent-other)]  `}>
			{children}
		</p>
	)
}