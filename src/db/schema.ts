import { createId } from '@paralleldrive/cuid2'
import { relations } from 'drizzle-orm'
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const usersTable = sqliteTable('users', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => createId()),
	imageUrl: text('image_url'),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull(),
})

export const userRelations = relations(usersTable, ({ many }) => ({
	transactions: many(transactionsTable),
}))

export const transactionsTable = sqliteTable('transactions', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => createId()),
	description: text('description').notNull(),
	amountInCents: integer('amount_in_cents').notNull(),
	type: text('type').notNull(),
	category: text('category').notNull(),
	paymentDate: text('payment_date').notNull(),
	userId: text('user_id')
		.notNull()
		.references(() => usersTable.id, { onDelete: 'cascade' }),
})

export const transactionsRelations = relations(
	transactionsTable,
	({ one }) => ({
		user: one(usersTable),
	}),
)
