import { pgSchema, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const schema = pgSchema('databaseSchema');

export const user = schema.table('users', {
	id: serial('id').primaryKey(),
	firstName: varchar('firstName', { length: 256 }),
	lastName: varchar('lastName', { length: 256 }),
	hash: varchar('hash', { length: 256 }),
	salt: varchar('salt', { length: 256 })
});
