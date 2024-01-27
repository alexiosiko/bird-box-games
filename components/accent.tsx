export default function Description({ children, className }: { 
	children: React.ReactNode,
	className?: string
}) {
	return (
		<span className={`${className} text-[var(--accent)]`}>
			{children}
		</span>
	)
}
