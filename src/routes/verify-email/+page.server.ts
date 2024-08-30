import { db } from '$lib/server/db/db.js'
import { emailLogs, sessions, user } from '$lib/server/db/schema.js'
import { sendVerifyEmail } from '$lib/server/sendVerifyEmail.js'
import { fail } from '@sveltejs/kit'
import { and, count, eq, gte } from 'drizzle-orm'

const TEN_MINUTES = 1000 * 60 * 10

export const actions = {
    resendEmail: async ({ cookies }) => {
        // verify the session

        const sessionToken = cookies.get("session")
        if (!sessionToken) {
            return fail(401, {

                message: "Not logged in"
            })
        }
        const userRow = await db.select().from(user).leftJoin(sessions, eq(user.id, sessions.userId)).where(eq(sessions.sessionToken, sessionToken))

        if (userRow.length === 0) {
            return fail(401, {
                message: "Not logged in"
            })
        }

        const userEmail = userRow[0].users.email
        const userId = userRow[0].users.id

        if (!userEmail) {
            return fail(400, {
                message: "No email found"
            })
        }

        if (userRow[0].users.verifiedEmail) {
            return fail(400, {
                message: "Email already verified"
            })
        }

        // Check how many emails have been sent in the last 10 minutes
        const emailLogCount = (await db.select({ number: count() }).from(emailLogs).where(and(
            eq(emailLogs.userId, userId),
            gte(emailLogs.sent, new Date(Date.now() - TEN_MINUTES)
            ))))[0].number

        if (emailLogCount > 3) {
            return fail(400, {
                message: "Too much mail! Try again later."
            })
        }




        // send the email
        await sendVerifyEmail(userId, userEmail)
    }
}