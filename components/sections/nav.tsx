"use client"

import Image from "next/image";
import ScrollLink from "../scrolllink";
import DevOlympusLogo from "@/images/logo/dev-olympus-logo.png";

export default function Nav() {
	const buttonStyles = "underline-offset-4";
	const textStyles = "hover:cursor-pointer text-xl text-white text-[var(--base)] hover:text-[var(--accent)] transition duration-150 ease-in-out text-sm";
	return (
			<div className="max-sm:hidden shadow-lg absolute w-full top-0">
				<Image src={DevOlympusLogo} height={40} className="object-contain absolute top-4 left-4" alt="dev-olympus-logo" />
				<div  className="flex gap-10 justify-center text-center p-2 text-[15px] text-white">
					<ScrollLink to="about" className={buttonStyles}>
						<p className={textStyles}>ABOUT</p>
					</ScrollLink>
					<ScrollLink to="howitworks" className={buttonStyles}>
						<p className={textStyles}>HOW IT WORKS</p>
					</ScrollLink>
					<ScrollLink to="contact" className={buttonStyles}>
						<p className={textStyles}>CONTACT</p>
					</ScrollLink>

				</div>
			</div>
	)
}