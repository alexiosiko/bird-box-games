export default function SubTitle({ children, className }: { children: React.ReactNode, className?: string }) {
	return (
		<p className={`${className} text-center text-1xl font-bold text-[var(--title)]  `}>
			{children}
		</p>
	)
}