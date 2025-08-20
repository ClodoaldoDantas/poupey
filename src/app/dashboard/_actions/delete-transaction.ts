'use server'

import { eq } from 'drizzle-orm'
import { revalidatePath } from 'next/cache'
import { db } from '@/db'
import { transactionsTable } from '@/db/schema'

export async function deleteTransaction(transactionId: string) {
	await db
		.delete(transactionsTable)
		.where(eq(transactionsTable.id, transactionId))

	revalidatePath('/')
}
