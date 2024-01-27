import { StaticImageData } from "next/image";
import Box from "./box";
import { boxData } from "@/data/boxdata";

export type boxDataType = {
		header: string,
		description: string,
		img: StaticImageData
}


export default function BoxContainer() {
	return (
		<div className="boxcontainer grid grid-cols-3 gap-28">
			{
				boxData.map((data: boxDataType, index: number ) =>
					<Box data={data} index={index} key={index} />
				)
			}
		</div>
	)
}