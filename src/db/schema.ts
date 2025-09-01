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

export const categoriesTable = sqliteTable('categories', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => createId()),
	userId: text('user_id')
		.notNull()
		.references(() => usersTable.id, { onDelete: 'cascade' }),
	name: text('name').notNull(),
})

export const categoriesRelations = relations(
	categoriesTable,
	({ many, one }) => ({
		transactions: many(transactionsTable),
		user: one(usersTable),
	}),
)

export const transactionsTable = sqliteTable('transactions', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => createId()),
	description: text('description').notNull(),
	amountInCents: integer('amount_in_cents').notNull(),
	type: text('type').notNull(),
	paymentDate: text('payment_date').notNull(),
	categoryId: text('category_id').references(() => categoriesTable.id, {
		onDelete: 'set null',
	}),
	userId: text('user_id')
		.notNull()
		.references(() => usersTable.id, { onDelete: 'cascade' }),
})

export const transactionsRelations = relations(
	transactionsTable,
	({ one }) => ({
		user: one(usersTable, {
			fields: [transactionsTable.userId],
			references: [usersTable.id],
		}),
		category: one(categoriesTable, {
			fields: [transactionsTable.categoryId],
			references: [categoriesTable.id],
		}),
	}),
)
