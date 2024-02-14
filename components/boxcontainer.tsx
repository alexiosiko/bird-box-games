import { StaticImageData } from "next/image";
import Box from "./box";
import { boxData } from "@/data/boxdata";
import DownUpMotion from "./downupmotion";
import Header from "./header";
import { IconType } from "react-icons";

export type boxDataType = {
		header: string,
		description: string,
		img: IconType,
}
export default function BoxContainer() {
	return (
		<section>
			{/* <DownUpMotion>
				<Header>Why Choose Us?</Header>
			</DownUpMotion> */}
			<br /><br />
			<div className="md:grid grid-cols-3 md:gap-28 gap-3">
				{
					boxData.map((data: boxDataType, index: number ) =>
					<Box data={data} index={index} key={index} />
					)
				}
			</div>
		</section>
	)
}