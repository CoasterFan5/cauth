import { db } from '$lib/server/db/db.js';
import { users } from '$lib/server/db/schema.js';
import { getTotp } from '$lib/server/getTotp.js';
import { verifySession } from '$lib/server/verifySession.js';
import { json } from '@sveltejs/kit'
import { eq } from 'drizzle-orm';
import * as OTPAuth from "otpauth";
import QRCode from 'qrcode';



export const GET = async ({ cookies }) => {

    const user = await verifySession(cookies.get('session'));
    if (!user) {
        return json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (user.totpLock) {
        return json({ error: '2FA is already enabled' }, { status: 400 });
    }

    const secret = new OTPAuth.Secret({ size: 32 });

    const totp = getTotp(user.email || "Unknown Email", secret.base32);

    await db.update(users).set({ totpSecret: secret.base32 }).where(eq(users.id, user.id));

    const imageData = await QRCode.toDataURL(totp.toString());

    return json({
        uri: totp.toString(),
        secret: secret.base32,
        imageData
    });
}

export const POST = async ({ cookies, request }) => {

    const user = await verifySession(cookies.get('session'));
    if (!user) {
        return json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    if (user.totpLock) {
        return json({ error: '2FA is already enabled' }, { status: 400 });
    }

    if (!user.totpSecret) {
        return json({ error: 'No secret found' }, { status: 400 });
    }

    const { code } = body;

    const totp = getTotp(user.email || "Unknown Email", user.totpSecret);

    if (totp.validate({ token: code, window: 1 }) == null) {
        return json({ error: 'Invalid code' }, { status: 400 });
    }

    await db.update(users).set({ totpLock: true }).where(eq(users.id, user.id));

    return json({ success: true });
}