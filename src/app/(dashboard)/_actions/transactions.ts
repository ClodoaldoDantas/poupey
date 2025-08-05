'use server'

import dayjs from 'dayjs'
import { and, gte, lt } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
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

type CreateTransactionParams = {
	description: string
	category: string
	type: 'income' | 'expense'
	amountInCents: number
	paymentDate: string
}

export async function createTransaction(payload: CreateTransactionParams) {
	try {
		await db.insert(transactionsTable).values(payload)
	} catch {
		return {
			success: false,
			message: 'Erro ao criar transação.',
		}
	}

	revalidatePath('/')

	return {
		success: true,
		message: 'Transação criada com sucesso.',
	}
}
