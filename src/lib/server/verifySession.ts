import { eq } from 'drizzle-orm';
import { db } from './db/db';
import { sessions, user } from './db/schema';

export const verifySession = async (session: string | undefined) => {
	if (!session) {
		return undefined;
	}

	// Verify the session
	const userList = await db
		.select()
		.from(user)
		.leftJoin(sessions, eq(user.id, sessions.userId))
		.where(eq(sessions.sessionToken, session));
	if (userList.length === 0) {
		return undefined;
	}

	return userList[0].users;
};
