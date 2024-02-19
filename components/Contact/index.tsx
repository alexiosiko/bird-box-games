
const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-28">
		<div className="w-full px-4 m-auto max-w-2xl">
		<div
			className="  shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
			data-wow-delay=".15s
			"
		>
			<h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
			Let's get Started and Request a Quote!
			</h2>
			<p className="mb-12 text-base font-medium text-body-color">
			Our support team will get back to you as soon as we can via email.
			</p>
			<form className="space-y-4">
				<div className="sm:flex gap-4 max-sm:space-y-4">
					<div>
						<label
						htmlFor="name"
						className="mb-3 block text-sm font-medium text-dark dark:text-white"
						>
						Your Name
						</label>
						<input
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
							required
							type="email"
							placeholder="Enter your email"
							className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
						/>
					</div>
				</div>
				<div className="sm:flex gap-4 max-sm:space-y-4">
					<div className="w-full">
						<label htmlFor="plan" className="mb-3 block text-sm font-medium text-dark dark:text-white">
						Choose Your Plan
						</label>
						<select
							required
							id="plan"
							className="border-stroke dark:text-body-color-dark dark:shadow-two h-[50px] rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none w-full"
						>
						<option value="basic">Basic Plan</option>
						<option value="pro">Pro Plan</option>
						<option value="enterprise">Enterprise Plan</option>
						</select>
					</div>
					<div className="w-full">
						<label 
						htmlFor="timeline"
						className="mb-3 block text-sm font-medium text-dark dark:text-white"
						>
						Project Deployment Expectations
						</label>
						<input
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
					name="message"
					rows={5}
					placeholder="Tell us what application you're looking for"
					className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
					></textarea>
				</div>
				<button className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
					Request Quote
				</button>
			</form>
		</div>
		</div>
    </section>
  );
};

export default Contact;
