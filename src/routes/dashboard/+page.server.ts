import { verifySession } from '$lib/server/verifySession.js'
import { redirect } from '@sveltejs/kit';


export const load = async ({ cookies }) => {
    const user = await verifySession(cookies.get("session"));
    if (!user) {
        throw redirect(303, "/");
    }

    if (!user.verifiedEmail) {
        throw redirect(303, "/verify-email");
    }

    return {
        user
    }
}