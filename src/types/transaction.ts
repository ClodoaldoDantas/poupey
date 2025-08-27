import type { CategoryId } from '@/constants/categories'

export type Transaction = {
	id: string
	description: string
	amountInCents: number
	paymentDate: string
	category: CategoryId
	type: 'income' | 'expense'
}
