'use server'

import { and, desc, eq, sql } from 'drizzle-orm'
import { db } from '@/db'
import { categoriesTable, transactionsTable } from '@/db/schema'
import { getSession } from '@/lib/auth'
import type { Transaction } from '@/types/transaction'

type GetTransactionsParams = {
	month: number
	year: number
}

export async function getTransactions({ month, year }: GetTransactionsParams) {
	const session = await getSession()

	if (!session?.userId) {
		throw new Error('Usuário não autenticado.')
	}

	const transactions = await db
		.select({
			id: transactionsTable.id,
			description: transactionsTable.description,
			amountInCents: transactionsTable.amountInCents,
			type: transactionsTable.type,
			paymentDate: transactionsTable.paymentDate,
			category: {
				id: categoriesTable.id,
				name: categoriesTable.name,
			},
		})
		.from(transactionsTable)
		.leftJoin(
			categoriesTable,
			eq(transactionsTable.categoryId, categoriesTable.id),
		)
		.where(
			and(
				eq(transactionsTable.userId, session.userId),
				sql`strftime('%Y', ${transactionsTable.paymentDate}) = ${String(year)}`,
				sql`strftime('%m', ${transactionsTable.paymentDate}) = ${String(month + 1).padStart(2, '0')}`,
			),
		)
		.orderBy(desc(transactionsTable.paymentDate))

	return transactions as Transaction[]
}
