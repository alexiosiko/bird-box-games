import Header from "../header";
import { motion, useAnimate } from "framer-motion";
import wallpaperSVG from "@/images/wallpapers/bottom.svg";
import Wallpaper from "../wallpaper";
import Description from "../description";
import Accent from "@/components/accent";

export default function Contact() {
	const [scope, animate] = useAnimate();
	const inputStyle:string  = "rounded-md h-8 p-2 text-black shadow-md";
	return (
		<section className="relative">
			<motion.div
				className="contact w-2/3 m-auto"
				ref={scope}	
				initial={{ y: 100, opacity: 0 }}
				onViewportEnter={() => animate(scope.current, { y: 0, opacity: 100 }, {  delay: 0.2})}
			>
				<Header>Contact Us!</Header>
				<br />
				<br />
				<Description>
					Email us at <span className="text-[var(--accent-other)]"><a href="mailto:alexiosiko@hotmail.com">alexiosiko@hotmail.com</a></span>
				</Description>
				<br />
				<Description>
					Tell us your name, your dream, and how we can build it together!
				</Description>
			</motion.div>
		</section>
	)
}