'use server'

import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import z from 'zod'
import { db } from '@/db'
import { categoriesTable } from '@/db/schema'
import { getSession } from '@/lib/auth'
import { actionClient } from '@/lib/safe-action'

const updateCategorySchema = z.object({
	id: z.string(),
	name: z.string().min(1, { message: 'Nome é obrigatório.' }),
})

export const updateCategory = actionClient
	.inputSchema(updateCategorySchema)
	.action(async ({ parsedInput }) => {
		const session = await getSession()

		if (!session?.userId) {
			throw new Error('Usuário não autenticado.')
		}

		const [category] = await db
			.select()
			.from(categoriesTable)
			.where(eq(categoriesTable.id, parsedInput.id))

		if (!category) {
			throw new Error('Categoria não encontrada.')
		}

		if (category.userId !== session.userId) {
			throw new Error('Usuário não autorizado.')
		}

		await db
			.update(categoriesTable)
			.set({ name: parsedInput.name })
			.where(eq(categoriesTable.id, parsedInput.id))

		revalidatePath('/dashboard/categories')
	})
