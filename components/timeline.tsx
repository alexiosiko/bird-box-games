"use client"

import { timelineData } from "@/data/timelinedata"
import TimelineCard from "./timelinecard"

export default function Timeline() {
	return (
		<section>
			{timelineData.map((data, index) => 
				<TimelineCard key={index} index={index} data={data}/>
			)}
		</section>
	)
}