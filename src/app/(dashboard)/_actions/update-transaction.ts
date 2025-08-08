'use server'

import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import z from 'zod'
import { db } from '@/db'
import { transactionsTable } from '@/db/schema'
import { actionClient } from '@/lib/safe-action'

const updateTransactionSchema = z.object({
	id: z.string(),
	description: z.string().min(1, { message: 'Descrição é obrigatória.' }),
	amountInCents: z
		.number({ error: 'Valor é inválido' })
		.min(1, { message: 'Valor é obrigatório.' }),
	type: z.enum(['income', 'expense']),
	category: z.string().min(1, { message: 'Categoria é obrigatória.' }),
	paymentDate: z.string().min(1, { message: 'Data é obrigatória.' }),
})

export const updateTransaction = actionClient
	.inputSchema(updateTransactionSchema)
	.action(async ({ parsedInput }) => {
		await db
			.update(transactionsTable)
			.set({
				description: parsedInput.description,
				amountInCents: parsedInput.amountInCents,
				type: parsedInput.type,
				category: parsedInput.category,
				paymentDate: parsedInput.paymentDate,
			})
			.where(eq(transactionsTable.id, parsedInput.id))

		revalidatePath('/')
	})
