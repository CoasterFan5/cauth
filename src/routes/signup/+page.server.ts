import { actionHelper } from '$lib/server/actionHelper.js';
import { z } from 'zod';

export const actions = {
    createAccount: actionHelper(z.object({
        email: z.string().max(256, "Email too long"),
        firstName: z.string().max(256, "First name too long"),
        lastName: z.string().max(256, "Last name too long"),
        pass1: z.string(),
        pass2: z.string()
    }), async () => {
        return {
            success: false,
            message: "No code yet"
        }
    })
}