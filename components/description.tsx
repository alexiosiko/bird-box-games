export default function Description({ children, className }: { children: React.ReactNode, className?: string}) {
	return (
		<div className={`${className} text-xl text-[var(--text)] text-center`}>
			{children}
		</div>
	)
}