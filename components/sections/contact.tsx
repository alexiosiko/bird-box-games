"use client"

import Header from "../header";
import { motion, useAnimate } from "framer-motion";
import wallpaperSVG from "@/images/svg/bottom.svg";
import Wallpaper from "../wallpaper";
import emailjs from "@emailjs/browser";

export default function Contact() {
	
	console.log(process.env.EMAILJS_ID)
	
	function SendEmail(e: any) {
		e.preventDefault();

		emailjs.send

	}
	const [scope, animate] = useAnimate();
	const inputStyle:string  = "rounded-md h-8 p-2 text-black shadow-md";
	return (
		<section className="relative">
			<Wallpaper svg={wallpaperSVG} className="-bottom-[730px]" />

			<Header className="mb-[50px] !text-[var(--accent-foreground)]">Free Consulation!</Header>
			<motion.div
				className="contact w-2/3 m-auto"
				ref={scope}	
				initial={{ y: 100, opacity: 0 }}
				onViewportEnter={() => animate(scope.current, { y: 0, opacity: 100 }, {  delay: 0.2})}
			>
				<form id="myform" className="max-w-lg m-auto flex text-[var(--accent-foreground)] flex-col gap-6">
					<h1>Tell us what kind of application you want developed and we will get back to you as soon as possible</h1>
					<div className="grid grid-cols-2 gap-4">
						<div className="flex flex-col gap-1">
							<label>First Name</label>
							<input className={`${inputStyle}`} required type="text" name="firstname" />
						</div>
						<div className="flex flex-col gap-1">
							<label>Last Name</label>
							<input className={`${inputStyle}`} required type="text" name="lastname" />
						</div>
					</div>
					<div className="grid grid-cols-2 gap-4">
						<div className="flex flex-col gap-1">
							<label>Email</label>
							<input className={`${inputStyle}`} required type="text" name="email" />

						</div>
						<div className="flex flex-col gap-1">
							<label>Company Name (Optional)</label>
							<input className={`${inputStyle}`} type="text" name="company" />
						</div>
					</div>
						<label className="-mb-4">Description your application ... What? / Where? / Why?</label>
						<textarea className={`${inputStyle} h-52`} />
					<div className="grid grid-cols-2 gap-4">
						<div className="flex flex-col">
							<label>Your Plan</label>
							<select className={`${inputStyle}`} required name="plan">
								<option value="basic">Basic</option>
								<option value="pro">Pro</option>
								<option value="enterprise">Enterprise</option>
							</select>
						</div>
						<button className="bg-[var(--accent)] h-9 mt-[22px] text-[var(--accent-foreground)] rounded-md">Connect With Us</button>
					</div>
				</form>
			</motion.div>
		</section>
	)
}