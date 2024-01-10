"use client"

import Image from "next/image";
import Button from "../button";
import DevOlympusLogo from "@/images/dev-olympus-logo.png";

export default function Nav() {
	const buttonStyles = "hover:underline underline-offset-4 transition-all";
	return (
		<div style={{ zIndex: -100}}>
			<Image src={DevOlympusLogo} height={40} className="object-contain absolute top-4 left-4" alt="dev-olympus-logo" />
			<div  className="flex gap-10 hover:cursor-pointer justify-center text-center p-2 text-[15px] text-[var(--foreground)]">
				<Button to="about" className={buttonStyles}>
					About
				</Button>
				<Button to="howitworks" className={buttonStyles}>
					How It Works
				</Button>
				<Button to="contact" className={buttonStyles}>
					Contact
				</Button>

			</div>
		</div>
	)
}