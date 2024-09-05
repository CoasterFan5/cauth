import { actionHelper } from '$lib/server/actionHelper.js';
import { z } from 'zod';
import { db } from '$lib/server/db/db';
import { users } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';
import { fail, redirect } from '@sveltejs/kit';
import { createPassword } from '$lib/server/createPassword.js';
import { createSession } from '$lib/server/createSession.js';

export const actions = {
	login: actionHelper(
		z.object({
			email: z.string().email(),
			password: z.string().min(8)
		}),
		async ({ email, password }, { cookies }) => {
			const lowerEmail = email.toLowerCase();

			const userList = await db.select().from(users).where(eq(users.email, lowerEmail));
			if (userList.length < 1) {
				return fail(401, {
					message: 'Invalid email or password'
				});
			}

			const userCheck = userList[0];
			const { hash } = await createPassword(password, userCheck.salt || '');

			if (hash !== userCheck.hash) {
				return fail(401, {
					message: 'Invalid email or password'
				});
			}
			await createSession(userCheck.id, cookies);
			throw redirect(303, '/dashboard');
		}
	)
};
