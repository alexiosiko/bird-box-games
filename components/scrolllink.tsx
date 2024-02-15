import { Link }from "react-scroll";
import React from "react";

export default function ScrollLink({ children, to = "", className }: {
	children: React.ReactNode,
	to: string
	className?: string,
}) {
	return (
		<Link to={to} smooth={true} className={`${className} p-4 pl-8 pr-8 `}>
			{children}
		</Link>
	)
}