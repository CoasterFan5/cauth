import postgres from 'postgres';
import * as schema from './schema';
import { drizzle } from 'drizzle-orm/postgres-js';
import 'dotenv/config';

let dburl = process.env.DBURL;
console.log(dburl);

export const connection = postgres(process.env.DBURL || '', {});
export const db = drizzle(connection, { schema });
