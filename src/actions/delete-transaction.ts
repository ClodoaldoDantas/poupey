'use server'

import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { db } from '@/db'
import { transactionsTable } from '@/db/schema'
import { getSession } from '@/lib/auth'

export async function deleteTransaction(transactionId: string) {
	const session = await getSession()

	if (!session?.userId) {
		throw new Error('Usuário não autenticado.')
	}

	const [transaction] = await db
		.select()
		.from(transactionsTable)
		.where(eq(transactionsTable.id, transactionId))

	if (!transaction) {
		throw new Error('Transação não encontrada.')
	}

	if (transaction.userId !== session.userId) {
		throw new Error('Usuário não autorizado.')
	}

	await db
		.delete(transactionsTable)
		.where(eq(transactionsTable.id, transactionId))

	revalidatePath('/dashboard/transactions')
}
