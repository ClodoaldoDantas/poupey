'use server'

import { and, asc, eq } from 'drizzle-orm'
import { db } from '@/db'
import { categoriesTable } from '@/db/schema'
import { getSession } from '@/lib/auth'
import type { Category } from '@/types/category'

export async function getCategories() {
	const session = await getSession()

	if (!session?.userId) {
		throw new Error('Usuário não autenticado.')
	}

	const categories = await db.query.categoriesTable.findMany({
		columns: {
			id: true,
			name: true,
		},
		where: and(eq(categoriesTable.userId, session.userId)),
		orderBy: [asc(categoriesTable.name)],
	})

	return categories as Category[]
}
