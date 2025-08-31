export type Transaction = {
	id: string
	type: 'income' | 'expense'
	description: string
	amountInCents: number
	paymentDate: string
	category: {
		id: string
		name: string
	} | null
}
