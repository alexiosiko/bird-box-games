"use client"

import Button from "./button";

export default function Nav() {
	const styles = "hover:underline underline-offset-4 transition-all";
	return (
		<div className="flex gap-10 justify-center  text-center p-2 text-[15px]">
			<p className="absolute text-3xl text-[var(--accent)] left-5 top-7 font-extrabold">Dev Olympus</p>
			<Button to="about" className={styles}>
				About
			</Button>
			<Button to="howitworks" className={styles}>
				How It Works
			</Button>
			<Button to="contact" className={styles}>
				Contact
			</Button>

		</div>
	)
}