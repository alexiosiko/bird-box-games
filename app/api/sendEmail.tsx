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

    try {
        const resend = new Resend(process.env.emailAPIKey);

       	await resend.emails.send({
            from: `Acme <onboarding@resend.dev>`,
            to: ['devolympus@hotmail.com'],
            subject: `Quote from ${data.name}`,
            text: `
                    name: ${data.name}
                    
					plan: ${data.plan}

                    email: ${data.email}

                    description: ${data.description}

                    expectation: ${data.expectations}
				`,
            headers: {
                'X-Entity-Ref-ID': '123456789',
            },
            tags: [
                {
                    name: 'category',
                    value: 'confirm_email',
                },
            ],
        });

        return { ok: true, message: "Successfully sent email" };
    } catch (error) {
        return { ok: false, message: "Unsuccessfully sent email" };
    }
}
