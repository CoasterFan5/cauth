import { RESEND_KEY } from '$env/static/private';
import { Resend } from 'resend';

export const resend = new Resend(RESEND_KEY);
