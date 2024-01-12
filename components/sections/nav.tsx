"use client"

import Image from "next/image";
import Button from "../button";
import DevOlympusLogo from "@/images/dev-olympus-logo.png";

export default function Nav() {
	const buttonStyles = "underline-offset-4";
	const textStyles = "hover:cursor-pointer hover:text-[var(--accent)] transition duration-150 ease-in-out text-sm";
	return (
		<div style={{ zIndex: -100}}>
			<Image src={DevOlympusLogo} height={40} className="object-contain absolute top-4 left-4" alt="dev-olympus-logo" />
			<div  className="flex gap-10 justify-center text-center p-2 text-[15px] text-[var(--foreground)]">
				<Button to="about" className={buttonStyles}>
					<p className={textStyles}>About</p>
				</Button>
				<Button to="howitworks" className={buttonStyles}>
					<p className={textStyles}>How It Works</p>
				</Button>
				<Button to="contact" className={buttonStyles}>
					<p className={textStyles}>Contact</p>
				</Button>

			</div>
		</div>
	)
}