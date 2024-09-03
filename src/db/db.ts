import postgres from 'postgres';
import * as schema from '../lib/server/db/schema';
import { drizzle } from 'drizzle-orm/postgres-js';
import 'dotenv/config';

export const connection = postgres(process.env.DBURL || '', {});
export const db = drizzle(connection, { schema });
