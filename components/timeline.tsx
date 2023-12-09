import { timelineData } from "@/data/timelinedata"
import Header from "./header"
import Description from "./description"

export default function Timeline() {
	return (
		<div className="flex flex-col items-center">
			{timelineData.map((data, index) => 
			<div key={index} className="flex justify-around w-full relative " >
				<div className="bg-gray-400 w-1 h-[360px] absolute" />{/* Vertical line */} 
				<div className={`absolute top-14 bg-[var(--accent-foreground)] rounded-full w-4 h-4 flex items-center justify-center `}></div>{/* Title */} 
				<div className={`absolute top-[60px] h-2 z-[-1] w-24 bg-[var(--accent)]  ${index % 2 == 0 ? 'ml-24' : 'mr-24'} `}/>{/* Arrow */} 
				<div className=" absolute top-12 w-4 h-4  rounded-full" />
				<div className={`w-1/3 ${index % 2 == 0 ? 'ml-[500px]' : 'mr-[500px]'}`}>
					<Header>{data.header}</Header>
					<Description>{data.description}</Description>
				</div>
			</div>

			)}

		</div>
	)
}