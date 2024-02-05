import Image from "next/image";
import Description from "../description";
import Header from "../header";
import { whatwedo as data } from "@/data/whatwedo";
import LeftRight from "../leftright";
import svg from "@/images/2phones.png"

export default function WhatWeDo() {
	return (
		<section className="about">
			<LeftRight>
				<div>
					<Header>
						{data.title}
					</Header>
					<br />
					<Description>{data.description}</Description>
					<br /><br />
					<div className={`flex flex-col`}>
					{data.items.map((item, index) => (
						<div key={index} className={`flex items-center gap-8 p-6 rounded-md`}>
							<div className="p-4 shadow-lg rounded-full">
								<Image className="object-contain" src={item.image} alt="icon" width={60} height={60} />
							</div>
							<div>
								<Header className="text-[var(--base)] !text-left text-lg font-semibold">{item.header}</Header>
								<Description className="!text-left">{item.description}</Description>
							</div>
						</div>
					))}
					</div>
				</div>
				<Image src={svg} width={500} alt="illustration" />
			</LeftRight>
		</section>
	)
}