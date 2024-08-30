import { db } from "$lib/server/db/db";
import { emailVerificationTokens, sessions, user } from "$lib/server/db/schema";
import { redirect } from "@sveltejs/kit";
import { and, eq } from "drizzle-orm";

export const load = async ({ request, cookies, params }) => {
    const { token } = params;
    const session = cookies.get("session");
    if (!session) {
        return redirect(303, "/")
    }
    const userRow = await db.select().from(user)
        .leftJoin(sessions, eq(sessions.userId, user.id))
        .leftJoin(emailVerificationTokens, eq(emailVerificationTokens.userId, user.id))
        .where(and(
            eq(emailVerificationTokens.token, token),
            eq(sessions.sessionToken, session)
        ));
    if (userRow.length === 0) {
        return redirect(303, "/verify-email");
    }

    await db.update(user).set({ verifiedEmail: true }).where(eq(user.id, userRow[0].users.id));
    return redirect(303, "/dashboard");

}