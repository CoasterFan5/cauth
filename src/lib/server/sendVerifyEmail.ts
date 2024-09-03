import { emailLogs, emailVerificationTokens } from '$lib/server/db/schema';
import crypto from 'crypto';
import { db } from '$lib/server/db/db';
import { resend } from '$lib/server/emails/resend';
import { RESEND_EMAIL, DOMAIN } from '$env/static/private';
import { verifyEmail } from '$lib/server/emails/verifyEmail';

export const sendVerifyEmail = async (userId: number, email: string) => {
	const emailVerificationTokenList = await db
		.insert(emailVerificationTokens)
		.values({
			token: crypto.randomBytes(32).toString('base64url'),
			userId
		})
		.returning({ token: emailVerificationTokens.token });

	const verifyUrl = `${DOMAIN}/verify/${emailVerificationTokenList[0].token}`;
	const { data, error } = await resend.emails.send({
		from: RESEND_EMAIL,
		to: [email],
		subject: 'Verify your email address',
		html: `${verifyEmail(verifyUrl)}`,
		text: 'Please verify your email address by clicking the link below:\n\n' + verifyUrl
	});

	if (error) {
		console.error('Failed to send email', error);
	}

	await db.insert(emailLogs).values({
		userId,
		email
	});

	return { data, error };
};
