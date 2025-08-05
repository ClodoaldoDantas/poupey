import type { CategoryId } from '@/components/category'

export type Transaction = {
	id: string
	description: string
	amount: number
	paymentDate: string
	category: CategoryId
	type: 'income' | 'expense'
}
