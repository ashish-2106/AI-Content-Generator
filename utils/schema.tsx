import { serial, varchar, text, pgTable } from "drizzle-orm/pg-core";


export const AIOutput =pgTable('aiOutput',{
    id:serial('id').primaryKey(),
    formData:varchar('form_data'),
    aiResponse:text('aiResponse'),
    templateSlug:varchar('templateSlug'),
    createdBy:varchar('createdBy'),
    createdAt:varchar('createdAt'),
})


