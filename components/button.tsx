import React from "react"

export default function Button({ children, className }: {
	children?: React.ReactNode,
	className?: string,
}) {
	return (
		<div className={`${className} font-extrabold`}>
			{children}
		</div>
	)
}