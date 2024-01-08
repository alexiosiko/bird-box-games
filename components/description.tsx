export default function Description({ children, className }: { children: React.ReactNode, className?: string}) {
	return (
		<div className={`${className} text-xl text-[var(--base)] text-center`}>
			{children}
		</div>
	)
}