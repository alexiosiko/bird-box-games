import { EmailTemplate } from '@/components/Email-Template/email-template';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(request: NextRequest) {
	try {
		const data = request.body as any;
		const { error } = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: ['polytechdev@hotmail.com'],
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
		return Response.json({ e }, { status: 500})
	}

};
