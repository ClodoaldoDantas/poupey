'use server'

import { revalidatePath } from 'next/cache'
import z from 'zod'
import { db } from '@/db'
import { categoriesTable } from '@/db/schema'
import { getSession } from '@/lib/auth'
import { actionClient } from '@/lib/safe-action'

const createCategorySchema = z.object({
	name: z.string().min(1, { message: 'Nome é obrigatório.' }),
})

export const createCategory = actionClient
	.inputSchema(createCategorySchema)
	.action(async ({ parsedInput }) => {
		const session = await getSession()

		if (!session?.userId) {
			throw new Error('Usuário não autenticado.')
		}

		await db.insert(categoriesTable).values({
			userId: session.userId,
			name: parsedInput.name,
		})

		revalidatePath('/dashboard/categories')
	})
