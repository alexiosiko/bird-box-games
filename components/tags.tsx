"use client"

import Image from "next/image";
import LeftRight from "./leftright";
import checkImg from "@/images/check.png";
import { motion } from "framer-motion";

export default function Tags() {

	return (
		<motion.div className="flex w-[50%] justify-between"
			initial={{ opacity: 0, y: -50}}
			animate={{ opacity: 100, y: 0 }}
			transition={{ delay: 1.5}}
		>
			<div className="flex gap-4 items-center">
				<Image src={checkImg} alt="check-mark" height={20}/>
				<div className="">Trustworthy</div>
			</div>
			<div className="flex gap-4 items-center">
				<Image src={checkImg} alt="check-mark" height={20}/>
				<div>Reliable</div>
			</div>
			<div className="flex gap-4 items-center">
				<Image src={checkImg} alt="check-mark" height={20}/>
				<div>Secure</div>
			</div>
		</motion.div>
	)

}