
"use server"

import emailjs from "emailjs-com"

export async function sendEmail(data: {
    name: string;
    plan: string;
    email: string;
    description: string;
    expectations: string;
}): Promise<any> {
	
	// Example: Send an email using emailjs
	emailjs.send(
		process.env.serviceID,
		process.env.templateID,
		data,
		process.env.userID
	).then(res => {
		console.log("SUCCESS", res.status, res.text);
		return res.status;
	}).catch(error => {
		console.log("FAILED..", error);
		return error;
	})
}