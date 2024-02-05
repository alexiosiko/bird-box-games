import Header from "../header";

export default function Quote() {
	function handleOnSubmit(e: any) {
		e.preventDefault();
		console.log("hi alexi");
	}
	return (
		<form onSubmit={handleOnSubmit} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
			<Header className="text-center m-4">Request a Quote!</Header>

			{/* Contact Information Section */}
			<div>
				<label className="block text-sm font-semibold text-gray-600" htmlFor="name">Name</label>
				<input className="w-full px-4 py-2 mt-2 mb-4 border rounded-md focus:outline-none focus:border-green-500" type="text" id="name" name="name" required />
			</div>

			{/* Project Details Section */}
			<div>
				<label className="block text-sm font-semibold text-gray-600" htmlFor="projectType">Project Type</label>
				<select className="w-full px-4 py-2 mt-2 mb-4 border rounded-md focus:outline-none focus:border-green-500" id="projectType" name="projectType" required>
				<option value="web">Web Development</option>
				<option value="app">Mobile App Development</option>
				{/* Add more options as needed */}
				</select>
			</div>

			<div>
				<label className="block text-sm font-semibold text-gray-600" htmlFor="projectDescription">Project Description</label>
				<textarea className="w-full px-4 py-2 mt-2 mb-4 border rounded-md focus:outline-none focus:border-green-500" id="projectDescription" name="projectDescription" rows={4} required></textarea>
			</div>

			{/* Budget Information Section */}
			<div>
				<label className="block text-sm font-semibold text-gray-600" htmlFor="budget">Budget Range</label>
				<input className="w-full px-4 py-2 mt-2 mb-4 border rounded-md focus:outline-none focus:border-green-500" type="text" id="budget" name="budget" placeholder="e.g., $5,000 - $10,000" required />
			</div>

			<div>
				<label className="block text-sm font-semibold text-gray-600" htmlFor="timeline">Project Timeline</label>
				<input className="w-full px-4 py-2 mt-2 mb-4 border rounded-md focus:outline-none focus:border-green-500" type="text" id="timeline" name="timeline" placeholder="e.g., 3 months" required />
			</div>

			{/* Add more form sections for additional fields as needed */}

			<button className="w-full px-4 py-2 bg-green-500 text-white rounded-md hover:opacity-80 transition-all cursor-pointer" type="submit">Submit</button>
		</form>
	)
}