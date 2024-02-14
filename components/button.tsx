import React from "react"

export default function Button({ children, className }: {
	children?: React.ReactNode,
	className?: string,
}) {
	return (
		<div className={`${className} text-[var(--accent-other)] font-extrabold`}>
			{children}
		</div>
	)
}