import { boolean, integer, pgSchema, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const schema = pgSchema('databaseSchema');

export const users = schema.table('users', {
	id: serial('id').primaryKey(),
	email: varchar('email', { length: 256 }).unique(),
	verifiedEmail: boolean('verifiedEmail'),
	firstName: varchar('firstName', { length: 256 }),
	lastName: varchar('lastName', { length: 256 }),
	hash: varchar('hash', { length: 256 }),
	salt: varchar('salt', { length: 256 }),
	totpSecret: varchar('totpSecret', { length: 256 }),
	totpLock: boolean('totpLock').default(false),
});

export const sessions = schema.table('sessions', {
	id: serial('id').primaryKey(),
	userId: integer('userId'),
	sessionToken: varchar('sessionToken', { length: 256 }),
	created: timestamp('created').notNull().defaultNow()
});

export const emailVerificationTokens = schema.table('emailVerificationTokens', {
	id: serial('id').primaryKey(),
	token: varchar('token', { length: 256 }),
	userId: integer('userId'),
	created: timestamp('created').notNull().defaultNow()
});

export const emailLogs = schema.table('emailLogs', {
	id: serial('id').primaryKey(),
	userId: integer('userId'),
	email: varchar('email', { length: 256 }),
	sent: timestamp('sent').notNull().defaultNow()
});
