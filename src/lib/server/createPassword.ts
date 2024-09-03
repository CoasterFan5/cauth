import crypto from 'crypto';
import { promisify } from 'util';
const pbkdf2async = promisify(crypto.pbkdf2);

export const createPassword = async (pass: string, salt?: string) => {
	if (!salt) {
		salt = crypto.randomBytes(32).toString('base64url');
	}

	const hash = (await pbkdf2async(pass, salt, 1000, 64, 'sha512')).toString('base64url');

	return {
		salt,
		hash
	};
};
