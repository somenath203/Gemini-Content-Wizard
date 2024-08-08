import { serial, text, varchar, pgTable } from "drizzle-orm/pg-core";


export const AiOutputSchema = pgTable('aiOutput', {
    id: serial('id').primaryKey(),
    aiResponse: text('aiResponse').notNull(),
    templateSlugName: varchar('templateSlug').notNull(),
    createdBy: varchar('email').notNull(),
    // here, the field name is createdBy means the user who created this and the email means the column
    // name is email that will be displayed in neon database means we are storing the email address
    // of the user who created it
    createdAt: varchar('createdAt')
});