import React from "react";
import { IconType } from "react-icons";
import SubTitle from "./subtitle";
import Description from "./description";
import { motion } from "framer-motion";
import LeftRight from "./leftright";

export default function WhatWeDoCard({ item, index } : { 
	index: number,
	item: {
		header: string;
		description: string;
		img: IconType;
	}
}) {

	return (
		<motion.div key={index} className={`flex items-center gap-8 p-6 rounded-md`}>
			<div className="flex justify-center">
				{React.createElement(item.img,  { size: 70,  })}
			</div>
			<div>
				<SubTitle className=" !text-left">{item.header}</SubTitle>
				<Description className="!text-left">{item.description}</Description>
			</div>
		</motion.div>
	)
}