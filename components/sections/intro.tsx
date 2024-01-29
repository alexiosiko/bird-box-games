import { motion } from "framer-motion";
import ScrollLink from "../scrolllink";
import Description from "../description";
import ScreenImg from "@/images/phone.png";
import Image from "next/image";
import Wallpaper from "../wallpaper";
import wallpaperSVG from "@/images/wallpapers/top-old.svg";
import Accent from "../accent";

export default function Intro() {

	return (
		<div className="relative overflow-visible h-[100vh] flex items-center">
			<Wallpaper svg={wallpaperSVG}  className="!h-full" />
			<motion.div
				className="flex justify-around gap-12 -mt-24"
				initial={{ opacity: 0, y: -100 }}
				animate={{ opacity: 100, y: 0 }}
				transition={{ delay: 0.6 }}
				>
				<div className="w-1/2">
					<div className="text-6xl font-black leading-snug text-[var(--title)]">
						We make your 
						<Accent> ideas </Accent>
						come to 
						<Accent> life</Accent>.
					</div>
					<Description className="!text-left mt-4 mb-12 text-[var(--foreground)]">
						We design, develop, and deploy software development products to our most valued customers.
					</Description>
					<ScrollLink to="contact" className="mt-8 hover:rounded-xl transition-all cursor-pointer bg-[var(--accent)] text-[var(--accent-foreground)]">
						Contact Us
					</ScrollLink>
				</div>
				<div className="w-1/2 ">
					<Image src={ScreenImg} alt="development-photo" className="mt-[-100px]"/>
				</div>
				
			</motion.div>
		</div>
	)
}