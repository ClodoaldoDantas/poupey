'use server'

import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { db } from '@/db'
import { categoriesTable } from '@/db/schema'
import { getSession } from '@/lib/auth'

export async function deleteCategory(categoryId: string) {
	const session = await getSession()

	if (!session?.userId) {
		throw new Error('Usuário não autenticado.')
	}

	const [category] = await db
		.select()
		.from(categoriesTable)
		.where(eq(categoriesTable.id, categoryId))

	if (!category) {
		throw new Error('Categoria não encontrada.')
	}

	if (category.userId !== session.userId) {
		throw new Error('Usuário não autorizado.')
	}

	await db.delete(categoriesTable).where(eq(categoriesTable.id, categoryId))

	revalidatePath('/dashboard/categories')
}
