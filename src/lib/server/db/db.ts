import { DBURL } from "$env/static/private";
import postgres from 'postgres';
import * as schema from './schema';
import { drizzle } from 'drizzle-orm/postgres-js';

export const connection = postgres(process.env.DBURL || '', {});
export const db = drizzle(connection, { schema });