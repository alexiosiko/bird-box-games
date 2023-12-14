"use client"

import Image from "next/image";
import Description from "./description";
import Header from "./header";
import ContactImg from "@/images/contact.png";
import { motion, useAnimate } from "framer-motion";

export default function Contact() {
	const [scope, animate] = useAnimate();
	return (
		<section>

			<Header className="mb-[50px]">Free Consulation!</Header>
			<motion.div
				className="contact w-2/3 m-auto"
				ref={scope}	
				initial={{ y: 300, opacity: 0 }}
				onViewportEnter={() => animate(scope.current, { y: 0, opacity: 100 }, { duration: 1.2, delay: 0.1})}
			>

				<Description>We want you to be happy with your expected results before we get started.</Description>
				<Description>Reach out to
					<a className="text-[var(--accent)]" href="mailto:DevOlympus@hotmail.com"> DevOlympus@hotmail.com</a>
					. Tell us a little bit about who you are and what you're looking for and we'll be so happy to get
					back to you and work together!
				</Description>
				<Image src={ContactImg} className="justify-center m-auto mt-12" alt="contact-img" />
			</motion.div>
		</section>
	)
}