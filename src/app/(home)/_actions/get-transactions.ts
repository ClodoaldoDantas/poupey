import dayjs from 'dayjs'
import { and, gte, lt } from 'drizzle-orm'
import { db } from '@/db'
import { transactionsTable } from '@/db/schema'
import type { Transaction } from '@/types/transaction'

type GetTransactionsParams = {
	month: number
	year: number
}

export async function getTransactions({ month, year }: GetTransactionsParams) {
	const startDate = dayjs()
		.year(year)
		.month(month)
		.startOf('month')
		.toISOString()

	const endDate = dayjs().year(year).month(month).endOf('month').toISOString()

	console.log('startDate', startDate)
	console.log('endDate', endDate)

	const transactions = await db
		.select()
		.from(transactionsTable)
		.where(
			and(
				gte(transactionsTable.paymentDate, startDate),
				lt(transactionsTable.paymentDate, endDate),
			),
		)

	return transactions as Transaction[]
}
