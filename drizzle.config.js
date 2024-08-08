/* eslint-disable import/no-anonymous-default-export */
import dotenv from 'dotenv';
import path from 'path';


dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });


/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./src/models/modelOutputSchema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_NEON_DATABASE_URL,
  }
};
