import type { Cookies } from '@sveltejs/kit';
import crypto from 'crypto';
import { sessions } from './db/schema';
import { db } from './db/db';

export const createSession = async (userId: number, cookies: Cookies) => {
	const { sessionToken } = (
		await db
			.insert(sessions)
			.values({
				userId,
				sessionToken: crypto.randomBytes(32).toString('base64url')
			})
			.returning({ sessionToken: sessions.sessionToken })
	)[0];

	if (sessionToken) {
		cookies.set('session', sessionToken, {
			sameSite: 'lax',
			secure: true,
			path: '/'
		});
	}

	return sessionToken;
};
