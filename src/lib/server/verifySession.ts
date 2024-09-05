import { eq } from 'drizzle-orm';
import { db } from './db/db';
import { sessions, users } from './db/schema';

export const verifySession = async (session: string | undefined) => {
	if (!session) {
		return undefined;
	}

	// Verify the session
	const userList = await db
		.select()
		.from(users)
		.leftJoin(sessions, eq(users.id, sessions.userId))
		.where(eq(sessions.sessionToken, session));
	if (userList.length === 0) {
		return undefined;
	}

	return userList[0].users;
};
