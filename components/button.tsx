import React from "react";

export default function Button({ children, onClick, className }: {
	children: React.ReactNode,
	onClick?: React.MouseEventHandler
	className?: string,
}) {
	return (
		<button onClick={onClick} className={`${className} p-4 m-1 rounded-sm  `}>
		{children}
		</button>
	)
}