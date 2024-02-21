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
		})
		.then(res => console.log(res, "yes"))
		.catch(err => console.log(err, "cath"));

		console.log("Worked!");
		return { ok: true, message: "Email send successfully"};

	} catch (error) { 
		console.log(error);
		return { ok: false, message: "Email send unsuccessfully"};

	}

}