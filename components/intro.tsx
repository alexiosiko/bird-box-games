"use client"
import { motion } from "framer-motion";
import Button from "./button";
import Description from "./description";
import ScreenImg from "@/images/screen-icon.png";
import Image from "next/image";
import LeftRight from "./leftright";

export default function Intro() {

	return (
		<motion.div
			className="flex justify-around gap-12"
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 100, y: 0 }}
			transition={{ delay: 0.6 }}
			>
			<div className="w-1/2 ">
				<div className="text-6xl  text-[var(--title)]">
					We make your 
					<span className='text-[var(--accent)]'> ideas </span> 
					come to 
					<span className='text-[var(--accent)]'> life</span>.
				</div>
				<Description className="!text-left mt-4 mb-12">
					We design, develop, and deploy software development products to our most valued customers.
				</Description>
				<Button to="contact" className="mt-8 hover:rounded-xl transition-all cursor-pointer bg-[var(--accent)] text-[var(--accent-foreground)]">
					Contact Us
				</Button>
			</div>
			<div className="w-1/2 ">
				<Image src={ScreenImg} alt="development-photo" className="mt-[-100px]"/>
			</div>
			
		</motion.div>
	)
}