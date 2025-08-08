import { formatPrice } from '@/app/(dashboard)/_helpers/format-price'
import { useSummary } from '@/app/(dashboard)/_hooks/use-summary'
import type { Transaction } from '@/types/transaction'
import { SummaryCard } from './summary-card'

export function Summary({ transactions }: { transactions: Transaction[] }) {
	const { summary } = useSummary(transactions)

	const formattedIncome = formatPrice(summary.income / 100)
	const formattedExpense = formatPrice(summary.expense / 100)
	const formattedBalance = formatPrice(summary.balance / 100)

	return (
		<div className="container mx-auto px-4 mt-[-80px]">
			<div className="grid lg:grid-cols-3 gap-2 lg:gap-8">
				<SummaryCard type="income" value={formattedIncome} />
				<SummaryCard type="expense" value={formattedExpense} />
				<SummaryCard type="balance" value={formattedBalance} />
			</div>
		</div>
	)
}
