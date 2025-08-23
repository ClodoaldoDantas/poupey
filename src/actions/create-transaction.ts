'use server'

import { revalidatePath } from 'next/cache'
import z from 'zod'
import { db } from '@/db'
import { transactionsTable } from '@/db/schema'
import { getSession } from '@/lib/auth'
import { actionClient } from '@/lib/safe-action'

const createTransactionSchema = z.object({
	description: z.string().min(1, { message: 'Descrição é obrigatória.' }),
	amountInCents: z
		.number({ error: 'Valor é inválido' })
		.min(1, { message: 'Valor é obrigatório.' }),
	type: z.enum(['income', 'expense']),
	category: z.string().min(1, { message: 'Categoria é obrigatória.' }),
	paymentDate: z.string().min(1, { message: 'Data é obrigatória.' }),
})

export const createTransaction = actionClient
	.inputSchema(createTransactionSchema)
	.action(async ({ parsedInput }) => {
		const session = await getSession()

		if (!session?.userId) {
			throw new Error('Usuário não autenticado.')
		}

		await db.insert(transactionsTable).values({
			userId: session.userId,
			description: parsedInput.description,
			amountInCents: parsedInput.amountInCents,
			type: parsedInput.type,
			category: parsedInput.category,
			paymentDate: parsedInput.paymentDate,
		})

		revalidatePath('/')
	})
