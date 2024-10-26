"use client"

import { useState } from "react";
import axios from "axios";
import Animate from "./animations/Animate";

export type emailType = {
	name: string,
	email: string,
	description: string,
	expectations: string,
}
const Contact = () => {
	const [sentStatus, setSentStatus] = useState("Request Quote");
	async function handleOnSubmit(e: any) {
		e.preventDefault();
		if (sentStatus == "Successfull sent quote! We will get back to you shortly" || sentStatus == "Working...")
			return;
		setSentStatus(() => "Working...");
	
		const data: emailType = {
			name: e.target.name.value,
			email: e.target.email.value,
			description: e.target.description.value,
			expectations: e.target.expectations.value,
		}

		try {
			const res =  await axios.post('/api/send', { data })
			console.log(res.data);
			if (res.status == 200)
				setSentStatus("Successfull sent quote! We will get back to you shortly");
			else
				setSentStatus("Uh oh, something went wrong on our end :( Please email us instead polytechdev@hotmail.com");
		} catch (e) {
			setSentStatus("Uh oh, something went wrong on our end :( Please email us instead polytechdev@hotmail.com");
		}
		

	}


  return (
    <Animate id="Contact" className="relative z-10 py-16 md:py-20 lg:py-28">

		<div className="w-full px-4 m-auto max-w-2xl">
		<div
			className="  shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
			data-wow-delay=".15s">
			<h2 className="mb-3 text-6xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
			Let&apos;s get Started and Request a Quote!
			</h2>
			<p className="mb-12 text-base font-medium text-body-color">
			Our support team will get back to you as soon as we can via email.
			</p>
			<form onSubmit={handleOnSubmit} className="space-y-4">
				<div className="sm:flex gap-4 max-sm:space-y-4">
					<div>
						<label
						htmlFor="name"
						className="mb-3 block text-sm font-medium text-dark dark:text-white"
						>
						Your Name
						</label>
						<input
						name="name"
						required
						type="text"
						placeholder="Enter your name"
						className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
						/>
					</div>
					<div >
						<label
							htmlFor="email"
							className="mb-3 block text-sm font-medium text-dark dark:text-white"
						>
						Your Email
						</label>
						<input
							name="email"
							required
							type="email"
							placeholder="Enter your email"
							className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
						/>
					</div>
				</div>
				<div className="sm:flex gap-4 max-sm:space-y-4">
					<div className="w-full">
						<label 
						htmlFor="timeline"
						className="mb-3 block text-sm font-medium text-dark dark:text-white"
						>
						Project Deployment Expectations
						</label>
						<input
							name="expectations"
							required
							type="timeline"
							placeholder="e.g. 1 month from today"
							className="border-stroke dark:text-body-color-dark dark:shadow-two rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none w-full"
						/>
					</div>
				</div>

				<div className="">
					<label
					htmlFor="description"
					className="mb-3 block text-sm font-medium text-dark dark:text-white"
					>
					Product Description
					</label>
					<textarea
						minLength={20}
						required
						name="description"
						rows={5}
						placeholder="Tell us what application you&apos;re looking for"
						className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
					></textarea>
				</div>
				<button className={`
				${sentStatus == "Request Quote" && "bg-primary text-background"}
				${sentStatus == "Working..." && "bg-orange-400"}
				${sentStatus == "Uh oh, something went wrong on our end :( Please email us instead polytechdev@hotmail.com" && "bg-red-400"}
				${sentStatus == "Successfull sent quote! We will get back to you shortly" && "bg-green-400"} 
				shadow-submit dark:shadow-submit-dark rounded-sm  px-9 py-4 text-base font-medium text-black duration-300 w-full`} >
					{sentStatus}
				</button>
			</form>
		</div>
		</div>
		{/* Confirmation Modal */}
		{/* {isConfirmationOpen && (
			<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
			<div className="shadow-xl outline outline-1 dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
				<p className="mb-4 text-lg font-medium text-dark dark:text-white">Are you sure you want to submit this form?</p>
				<div className="flex justify-end">
				<button
					className="mr-4 px-6 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary-dark"
					onClick={handleConfirmSubmit}
				>
					Yes
				</button>
				<button
					className="px-6 py-2 text-sm font-medium text-white bg-gray-500 rounded-md hover:bg-gray-600"
					onClick={handleCancelSubmit}
				>
					No
				</button>
				</div>
			</div>
			</div>
		)} */}
		<div className="flex justify-center ">
			<p className="mb-4 text-lg font-medium text-dark dark:text-white">
				Or you can email us directly at
				<a href="mailto:polytechdev@hotmail.com" className="inline text-primary text-lg font-medium"> polytechdev@hotmail.com</a>
			</p>
		</div>
    </Animate>
  );
};

export default Contact;
