import { actionHelper } from '$lib/server/actionHelper.js';
import { fail, redirect } from '@sveltejs/kit';
import { z } from 'zod';
import { db } from "$lib/server/db/db"
import { emailVerificationTokens, sessions, user } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';
import crypto from "crypto";
import { sendVerifyEmail } from '$lib/server/sendVerifyEmail.js';
import { createSession } from '$lib/server/createSession.js';
import { createPassword } from '$lib/server/createPassword.js';

export const actions = {
    createAccount: actionHelper(z.object({
        email: z.string().email("Invalid Email").max(256, "Email too long"),
        firstName: z.string().max(256, "First name too long").min(1, "First name is required"),
        lastName: z.string().max(256, "Last name too long").min(1, "Last name is required"),
        pass1: z.string().min(6, "Password must be at least 6 characters"),
        pass2: z.string().min(6, "Password must be at least 6 characters")
    }), async ({ email, firstName, lastName, pass1, pass2 }, { cookies }) => {
        if (pass1 !== pass2) {
            return fail(400, {
                message: "Passwords do not match"
            });
        }

        const lowerEmail = email.toLowerCase();

        const usersWithEmail = await db.select().from(user).where(eq(user.email, lowerEmail))
        if (usersWithEmail.length > 0) {
            return fail(400, {
                message: "Email already in use"
            });
        }

        const { salt, hash } = await createPassword(pass1);

        const userIds = await db.insert(user).values({
            email: lowerEmail,
            firstName,
            lastName,
            hash,
            salt,
            verifiedEmail: false
        }).returning({ userId: user.id })
        const userId = userIds[0].userId

        await createSession(userId, cookies);
        await sendVerifyEmail(userId, email);

        return redirect(303, "/verify-email")

    })


}