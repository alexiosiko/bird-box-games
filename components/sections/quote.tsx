import Description from "../description";
import Header from "../header";

export default function Quote() {
	const descriptionClass = "";
	const inputClass = "w-full px-4 py-2 border rounded-md focus:outline-none focus:border-green-500";
	const buttonClass = "w-full px-4 py-2";

	function handleOnSubmit(e: any) {
		e.preventDefault();
		console.log("hi alexi");
	}

	return (
		<form
		onSubmit={handleOnSubmit}
		className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md"
		>
		<Header className="text-center m-4">Request a Quote!</Header>

		{/* Contact Information Section */}
		<div className="mb-4">
			<Description className={descriptionClass} >
			Name
			</Description>
			<input
			className={inputClass}
			type="text"
			id="name"
			name="name"
			required
			/>
		</div>

		{/* Project Details Section */}
		<div className="mb-4">
			<Description className={descriptionClass}>
			Project Type
			</Description>
			<select
			className={inputClass}
			id="projectType"
			name="projectType"
			required
			>
			<option value="web">Web Development</option>
			<option value="app">Mobile App Development</option>
			{/* Add more options as needed */}
			</select>
		</div>

		<div className="mb-4">
			<Description className={descriptionClass}>
			Project Description
			</Description>
			<textarea
			className={inputClass}
			id="projectDescription"
			name="projectDescription"
			rows={4}
			required
			></textarea>
		</div>

		{/* Budget Information Section */}
		<div className="mb-4">
			<Description>
			Budget Range
			</Description>
			<input
			className={inputClass}
			type="text"
			id="budget"
			name="budget"
			placeholder="e.g., $5,000 - $10,000"
			required
			/>
		</div>

		<div className="mb-4">
			<Description>
			Project Timeline
			</Description>
			<input
			className={inputClass}
			type="text"
			id="timeline"
			name="timeline"
			placeholder="e.g., 3 months"
			required
			/>
		</div>

		{/* Add more form sections for additional fields as needed */}

		<button
			className={`${buttonClass} button`}
			type="submit"
		>
			Submit
		</button>
		</form>
	);
}
