import * as React from 'react';

interface EmailTemplateProps {
	name: string,
	email: string,
	description: string,
	expectations: string,
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  	name,
	email,
	description,
	expectations,
}) => (
	<div>
		<h1>Name: {name}!</h1>
		<p>email: {email}</p>
		<p>description: {description}</p>
		<p>expectations: {expectations}</p>
	</div>
);
