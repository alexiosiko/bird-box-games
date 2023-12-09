import React from "react"

export default function LeftRight({
	children,
}: {
	children: React.ReactNode
}) {
	return (
	  	<div className="flex justify-around gap-5">
			{React.Children.map(children, (child, index) => 
				<div key={index} className="flex-1 p-4 items-center flex">
					{child}
				</div>
			)}	
		</div>
	)
}