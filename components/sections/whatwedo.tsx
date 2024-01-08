import LeftRight from "@/components/leftright";
import Image from 'next/image';
import ColumnList from "../columnlist";
import { whatwedo } from "@/data/whatwedo";
import Img from "@/images/222.png"


export default function WhatWeDo() {
	return (
		<section className="about">
			<LeftRight>
				<ColumnList data={whatwedo} />
				<Image src={Img} alt="image" />
			</LeftRight>

		</section>
	)
}