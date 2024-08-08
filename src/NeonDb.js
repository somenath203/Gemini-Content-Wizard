import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

import * as schema from './models/modelOutputSchema';


const sql = neon(process.env.NEXT_PUBLIC_NEON_DATABASE_URL);


export const db = drizzle(sql, { schema: schema });