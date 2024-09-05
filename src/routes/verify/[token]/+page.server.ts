import { db } from '$lib/server/db/db';
import { emailVerificationTokens, sessions, users } from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';
import { and, eq } from 'drizzle-orm';

export const load = async ({ cookies, params }) => {
	const { token } = params;
	const session = cookies.get('session');
	if (!session) {
		return redirect(303, '/');
	}
	const userRow = await db
		.select()
		.from(users)
		.leftJoin(sessions, eq(sessions.userId, users.id))
		.leftJoin(emailVerificationTokens, eq(emailVerificationTokens.userId, users.id))
		.where(and(eq(emailVerificationTokens.token, token), eq(sessions.sessionToken, session)));
	if (userRow.length === 0) {
		return redirect(303, '/verify-email');
	}

	await db.update(users).set({ verifiedEmail: true }).where(eq(users.id, userRow[0].users.id));
	return redirect(303, '/dashboard');
};
