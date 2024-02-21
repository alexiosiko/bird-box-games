"use server"

import { error } from "console";
import { Resend } from "resend";

export async function sendEmail(data: {
    name: string;
    plan: string;
    email: string;
    description: string;
    expectations: string;
}): Promise<any> {
    const resend = new Resend(process.env.emailAPIKey);
	console.log("here");

    resend.emails.send({
        from: `Acme <onboarding@resend.dev>`,
        to: ['devolympus@hotmail.com'],
        subject: `Quote from ${data.name}`,
        text: `<p>
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
				</p>`,
        headers: {
            'X-Entity-Ref-ID': '123456789',
        },
        tags: [
            {
                name: 'category',
                value: 'confirm_email',
            },
        ],
    })
	.then(res => {
		return { ok: true, message: "Successfully sent email"}
	})
	.catch(error => {
		return { ok: false, message: "Unsuccessfully sent email"}
	})
}
