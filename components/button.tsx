import { Link }from "react-scroll";
import React from "react";

export default function Button({ children, to = "", className }: {
	children: React.ReactNode,
	to: string
	className?: string,
}) {
	return (
		<Link to={to} smooth={true} className={`${className} flex-grow-0 min-width p-4 m-1 rounded-sm  `}>
			{children}
		</Link>
	)
}