"use client"
import { motion } from "framer-motion";
import Button from "./button";
import Description from "./description";
import ScreenImg from "@/images/screen-icon.png";
import Image from "next/image";

export default function Intro() {

	return (
		<motion.div
			className="h-[600px] mt-64 flex justify-around gap-12"
			initial={{ opacity: 0, y: -100 }}
			animate={{ opacity: 100, y: 0 }}
			>
			<div className="w-1/2 ">
				<div className="text-6xl  text-[var(--header)]">
					We make your 
					<span className='text-[var(--accent)]'> ideas </span> 
					come to 
					<span className='text-[var(--accent)]'> life</span>.
				</div>
				<Description className="!text-left mt-4 mb-12">We make design research easier and faster than ever before. Explore over then 23,000 pages and over than 22,000 iOS screens.</Description>
				<Button to="contact" className="mt-8 cursor-pointer bg-[var(--accent)] text-[var(--accent-foreground)]">
					Contact Us
				</Button>
			</div>
			<div className="w-1/2 ">
				<Image src={ScreenImg} alt="development-photo" className="mt-[-50px]"/>
			</div>
		</motion.div>
	)
}