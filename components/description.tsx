export default function Description({ children, className }: { children: React.ReactNode, className?: string}) {
	return (
		<div className={`${className} text-lg leading-normal  text-[var(--dark)] text-center`}>
			{children}
		</div>
	)
}