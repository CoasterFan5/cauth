import * as OTPAuth from 'otpauth';

export const getTotp = (email: string, secret: string) => {
    return new OTPAuth.TOTP({
        issuer: "C Auth",
        label: email || "Unknown Email",
        algorithm: "SHA1",
        digits: 6,
        period: 30,
        secret: secret
    });
}