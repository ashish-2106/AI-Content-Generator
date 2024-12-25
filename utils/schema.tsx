import { serial, varchar, text, pgTable } from "drizzle-orm/pg-core";


export const AIOutput =pgTable('aiOutput',{
    id:serial('id').primaryKey(),
    formData:varchar('form_data').notNull(),
    aiResponse:text('aiResponse').notNull(),
    templateSlug:varchar('templateSlug').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt').notNull(),
})


