export default function Description({ children, className }: { children: React.ReactNode, className?: string}) {
	return (
		<div className={`${className} text-lg font-semibold leading-normal text-[var(--base)] max-md:text-center`}>
			{children}
		</div>
	)
}