import { useMemo } from 'react'
import type { Transaction } from '@/types/transaction'

export function useSummary(transactions: Transaction[]) {
	const summary = useMemo(() => {
		return transactions.reduce(
			(acc, transaction) => {
				if (transaction.type === 'income') {
					acc.income += transaction.amountInCents
					acc.balance += transaction.amountInCents
				} else {
					acc.expense += transaction.amountInCents
					acc.balance -= transaction.amountInCents
				}

				return acc
			},
			{
				income: 0,
				expense: 0,
				balance: 0,
			},
		)
	}, [transactions])

	return {
		summary,
	}
}
