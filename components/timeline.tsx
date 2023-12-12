"use client"

import { timelineData } from "@/data/timelinedata"
import TimelineCard from "./timelinecard"

export default function Timeline() {
	return (
		<div className="flex flex-col items-center mt-24">
			<div className="bg-[var(--foreground)] w-1 h-[700px] absolute" />{/* Vertical line */} 
			{timelineData.map((data, index) => 
				<TimelineCard key={index} index={index} data={data} />
			)}

		</div>
	)
}