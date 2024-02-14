import { motion } from "framer-motion";
import ScrollLink from "../scrolllink";
import Description from "../description";
import Accent from "../accent";

export default function Intro() {

	return (
		<div className="h-[100vh] md:flex items-center">
			<motion.div
				initial={{ opacity: 0, y: -100 }}
				animate={{ opacity: 100, y: 0 }}
				transition={{ delay: 0.6 }}
				>
				<div className="max-md:h-[100vh]">
					<div className="text-8xl max-md:text-center font-bold leading-snug text-[var(--title)]">
						We make your 
						<Accent> ideas </Accent>
						come to 
						<Accent> life</Accent>.
					</div>
					<Description className="mt-4 mb-12 text-[var(--base)]">
						We design, develop, and deploy software development products to our most valued customers.
					</Description>
					<ScrollLink to="contact" className="button">
						Contact Us
					</ScrollLink>
				</div>
				{/* <div className="max-md:hidden w-1/2">
					<Image src={ScreenImg} alt="development-photo" className="mt-[-100px]"/>
				</div> */}
				
			</motion.div>
		</div>
	)
}