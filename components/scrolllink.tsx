import { Link }from "react-scroll";
import React from "react";

export default function ScrollLink({ children, to = "", className }: {
	children: React.ReactNode,
	to: string
	className?: string,
}) {
	return (
		<Link to={to} smooth={true} className={`${className} flex-grow-0 min-width p-4 pl-8 pr-8 m-1 rounded-[40px]  `}>
			{children}
		</Link>
	)
}