'use server'

import dayjs from 'dayjs'
import { and, desc, eq, gte, lt } from 'drizzle-orm'
import { db } from '@/db'
import { transactionsTable } from '@/db/schema'
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

	const startDate = dayjs()
		.year(year)
		.month(month)
		.startOf('month')
		.toISOString()

	const endDate = dayjs().year(year).month(month).endOf('month').toISOString()

	const transactions = await db
		.select()
		.from(transactionsTable)
		.where(
			and(
				eq(transactionsTable.userId, session.userId),
				gte(transactionsTable.paymentDate, startDate),
				lt(transactionsTable.paymentDate, endDate),
			),
		)
		.orderBy(desc(transactionsTable.paymentDate))

	return transactions as Transaction[]
}
