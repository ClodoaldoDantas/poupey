import { SummaryCard } from './summary-card'

export function Summary() {
	return (
		<div className="container mx-auto px-4 mt-[-80px]">
			<div className="grid lg:grid-cols-3 gap-2 lg:gap-8">
				<SummaryCard type="income" value="R$ 17.400,00" />
				<SummaryCard type="expense" value="R$ 1.259,00" />
				<SummaryCard type="balance" value="R$ 16.141,00" />
			</div>
		</div>
	)
}
