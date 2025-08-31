'use server'

import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import z from 'zod'
import { db } from '@/db'
import { transactionsTable } from '@/db/schema'
import { getSession } from '@/lib/auth'
import { actionClient } from '@/lib/safe-action'

const updateTransactionSchema = z.object({
	id: z.string(),
	description: z.string().min(1, { message: 'Descrição é obrigatória.' }),
	amountInCents: z
		.number({ error: 'Valor é inválido' })
		.min(1, { message: 'Valor é obrigatório.' }),
	type: z.enum(['income', 'expense']),
	categoryId: z.string().min(1, { message: 'Categoria é obrigatória.' }),
	paymentDate: z.string().min(1, { message: 'Data é obrigatória.' }),
})

export const updateTransaction = actionClient
	.inputSchema(updateTransactionSchema)
	.action(async ({ parsedInput }) => {
		const session = await getSession()

		if (!session?.userId) {
			throw new Error('Usuário não autenticado.')
		}

		const [transaction] = await db
			.select()
			.from(transactionsTable)
			.where(eq(transactionsTable.id, parsedInput.id))

		if (!transaction) {
			throw new Error('Transação não encontrada.')
		}

		if (transaction.userId !== session.userId) {
			throw new Error('Usuário não autorizado.')
		}

		await db
			.update(transactionsTable)
			.set({
				description: parsedInput.description,
				amountInCents: parsedInput.amountInCents,
				type: parsedInput.type,
				categoryId: parsedInput.categoryId,
				paymentDate: parsedInput.paymentDate,
			})
			.where(eq(transactionsTable.id, parsedInput.id))

		revalidatePath('/dashboard/transactions')
	})
