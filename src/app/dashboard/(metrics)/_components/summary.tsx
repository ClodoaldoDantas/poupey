import { useMemo } from 'react'
import { formatPrice } from '@/helpers/format-price'
import type { Transaction } from '@/types/transaction'
import { SummaryCard } from './summary-card'

export function Summary({ transactions }: { transactions: Transaction[] }) {
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

	const formattedIncome = formatPrice(summary.income / 100)
	const formattedExpense = formatPrice(summary.expense / 100)
	const formattedBalance = formatPrice(summary.balance / 100)

	return (
		<div className="container mx-auto px-4 mt-[-80px]">
			<div className="flex items-center gap-2 overflow-x-auto pb-5">
				<SummaryCard type="income" value={formattedIncome} />
				<SummaryCard type="expense" value={formattedExpense} />
				<SummaryCard type="balance" value={formattedBalance} />
			</div>
		</div>
	)
}
