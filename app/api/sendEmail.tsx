"use server"

import { Resend } from "resend";

export async function sendEmail(data: {
    name: string;
    plan: string;
    email: string;
    description: string;
    expectations: string;
}): Promise<any> {
	try {
		const resend = new Resend('re_7Q8Qd9Q4_NJGnaNHUGqmCUYeojPKrxmx3');

		resend.emails.send({
			from: 'onboarding@resend.dev',
			to: 'devolympus@hotmail.com',
			subject: `New quote request from ${data.name}`,
			html: `
				<p>
					name: ${data.name}
				</p>
				<p>
					plan: ${data.plan}
				</p>
				<p>
					email: ${data.email}
				</p>
				<p>
					description: ${data.description}
				</p>
				<p>
					expectation: ${data.expectations}
				</p>
				`
		});

		console.log("Worked!");
		return "Success";

	} catch (error) { 
		console.log(error);
		return "Error sending quote";
	}

}