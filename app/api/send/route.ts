import { emailType } from '@/components/contact';
import { EmailTemplate } from '@/components/emailtemplate/emailtemplate';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request: NextRequest) {
	try {
		const { data }: { data: emailType } = await request.json();
		console.log(data);
		const { error } = await resend.emails.send({
			from: 'Poly Tech Quote <onboarding@resend.dev>',
			to: ['jemimassyrup@gmail.com'],
			subject: 'Hello world',
			react: EmailTemplate({
				name: data.name,
				description: data.description,
				email: data.email,
				expectations: data.expectations
			}),
		});
		if (error)
			throw error

		return Response.json({ "worked": "asd" }, { status: 200});
	} catch (e) {
		console.error(e);
		return Response.json({ e }, { status: 500})
	}

};
