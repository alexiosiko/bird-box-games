import React from "react"
import Card from "./card";

export default function LeftRight({
	children,
	className,
}: {
	children: React.ReactNode,
	className?: string,
}) {
	return (
	  	<div className={`${className} md:flex md:gap-12`}>
			{React.Children.map(children, (child, index) =>
				<Card key={index} index={index} child={child} />
			)}	
		</div>
	)
}