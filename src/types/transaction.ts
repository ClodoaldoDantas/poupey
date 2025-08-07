import type { CategoryId } from '@/app/(dashboard)/_components/category'

export type Transaction = {
	id: string
	description: string
	amountInCents: number
	paymentDate: string
	category: CategoryId
	type: 'income' | 'expense'
}
