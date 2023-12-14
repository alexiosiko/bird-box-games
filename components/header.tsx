export default function Header({ children, className }: { children: React.ReactNode, className?: string }) {

	return (
		<p className={`mb-4 text-center text-5xl text-[var(--title)] ${className} `}>
			{children}
		</p>
	)
}