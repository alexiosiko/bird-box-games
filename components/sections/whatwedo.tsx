import Description from "../description";
import Header from "../header";
import { whatwedo as data } from "@/data/whatwedo";
import React from "react";
import WhatWeDoCard from "../whatwedocard";

export default function WhatWeDo() {
	return (
		<section className="about">
			<div>
				<Header>
					{data.title}
				</Header>
				<br />
				<Description>{data.description}</Description>
				<br /><br />
				<div className={`flex flex-col`}>
				{data.items.map((item, index) => (
					<WhatWeDoCard index={index} item={item} key={index} />
				))}
				</div>
			</div>
		</section>
	)
}