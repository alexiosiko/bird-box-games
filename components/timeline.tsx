import { timelineData } from "@/data/timelinedata"
import Header from "./header"
import Description from "./description"

export default function Timeline() {
	return (
		<div className="flex flex-col items-center mb-[400px]">
			{timelineData.map((data, index) => 
			<div key={index} className="flex justify-around w-full relative " >
				<div className="bg-[var(--accent-foreground)] w-1 h-[270px] absolute" />{/* Vertical line */} 
				<div className={`absolute top-20 bg-[var(--accent)] rounded-full w-4 h-4 flex items-center justify-center `}></div>{/* Title */} 
				<div className={`absolute top-[86px] h-1 z-[-1] w-24 bg-[var(--accent-foreground)]  ${index % 2 == 0 ? 'ml-24' : 'mr-24'} `}/>{/* Arrow */} 
				<div className={`w-1/3 ${index % 2 == 0 ? 'ml-[700px]' : 'mr-[700px]'}`}>
					<Header>{data.header}</Header>
					<Description>{data.description}</Description>
				</div>
			</div>

			)}

		</div>
	)
}