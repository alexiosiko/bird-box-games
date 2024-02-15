import { motion } from "framer-motion";
import ScrollLink from "../scrolllink";
import Description from "../description";
import Accent from "../accent";
import Br from "../br";
import TextTransition from "../texttransition";

export default function Intro() {

	return (
		<div className="h-[100vh] flex items-center">
			<motion.div
				initial={{ opacity: 0, y: -100 }}
				animate={{ opacity: 100, y: 0 }}
				transition={{ delay: 0.6 }}
				>
				<div>
					<Br size={1} />
					<div className="md:text-8xl text-5xl max-md:text-center font-bold leading-snug text-[var(--title)]">
						We make your 
						<Accent> dreams </Accent>
						come to 
						<Accent> life</Accent>.
					</div>
					<Br size={1} />
					<TextTransition />
					<Br size={2} />
					{/* <Description className="mt-4 mb-12 text-[var(--base)]">
						We design, develop, and deploy software development products to our most valued customers.
					</Description> */}
					<div className="flex max-md:justify-center">
						<ScrollLink to="contact" className="button static">
							Contact Us
						</ScrollLink>
						<ScrollLink to="contact" className=" static">
							Learn More
						</ScrollLink>
					</div>
				</div>
				{/* <div className="max-md:hidden w-1/2">
					<Image src={ScreenImg} alt="development-photo" className="mt-[-100px]"/>
				</div> */}
				
			</motion.div>
		</div>
	)
}