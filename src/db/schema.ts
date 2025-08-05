import { createId } from '@paralleldrive/cuid2'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const transactionsTable = sqliteTable('transactions', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => createId()),
	description: text('description').notNull(),
	amountInCents: integer('amount_in_cents').notNull(),
	type: text('type').notNull(),
	category: text('category').notNull(),
	paymentDate: text('payment_date').notNull(),
})
