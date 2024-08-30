import { actionHelper } from '$lib/server/actionHelper.js';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';
import { db } from "$lib/server/db/db"
import { emailVerificationTokens, user } from '$lib/server/db/schema.js';
import { eq } from 'drizzle-orm';
import crypto from "crypto";

export const actions = {
    createAccount: actionHelper(z.object({
        email: z.string().email("Invalid Email").max(256, "Email too long"),
        firstName: z.string().max(256, "First name too long").min(1, "First name is required"),
        lastName: z.string().max(256, "Last name too long").min(1, "Last name is required"),
        pass1: z.string().min(6, "Password must be at least 6 characters"),
        pass2: z.string().min(6, "Password must be at least 6 characters")
    }), async ({ email, firstName, lastName, pass1, pass2 }) => {
        if (pass1 !== pass2) {
            return fail(400, {
                message: "Passwords do not match"
            });
        }

        const usersWithEmail = await db.select().from(user).where(eq(user.email, email))
        if (usersWithEmail.length > 0) {
            return fail(400, {
                message: "Email already in use"
            });
        }

        const salt = crypto.randomBytes(32).toString("base64url");
        const hash = crypto.pbkdf2Sync(pass1, salt, 1000, 64, "sha512").toString("base64url");

        const userIds = await db.insert(user).values({
            email,
            firstName,
            lastName,
            hash,
            salt,
            verifiedEmail: false
        }).returning({ userId: user.id })
        const userId = userIds[0].userId

        const emailVerificationTokenList = await db.insert(emailVerificationTokens).values({
            token: crypto.randomBytes(32).toString("base64url"),
            userId
        }).returning({ token: emailVerificationTokens.token })

        const emailToken = emailVerificationTokenList[0].token

        //email logic
        return {
            success: true,
            message: "Account created. Please verify your email address.",
        }

    })


}