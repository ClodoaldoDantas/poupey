'use server'

import { eq } from 'drizzle-orm'
import { db } from '@/db'
import { usersTable } from '@/db/schema'
import { getSession } from '@/lib/auth'

export async function getProfile() {
	const session = await getSession()

	if (!session?.userId) {
		throw new Error('Usuário não autenticado.')
	}

	const [user] = await db
		.select({
			id: usersTable.id,
			name: usersTable.username,
			imageUrl: usersTable.imageUrl,
		})
		.from(usersTable)
		.where(eq(usersTable.id, session.userId))

	if (!user) {
		throw new Error('Usuário não encontrado.')
	}

	return user
}
