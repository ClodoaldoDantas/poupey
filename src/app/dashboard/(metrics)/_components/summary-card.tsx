import { CoinsIcon, TrendingDownIcon, TrendingUpIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

type SummaryCardProps = {
	type: 'income' | 'expense' | 'balance'
	value: string
}

const labels = {
	income: 'Receitas',
	expense: 'Despesas',
	balance: 'Saldo',
}

const icons = {
	income: <TrendingUpIcon className="size-6 text-green-500" />,
	expense: <TrendingDownIcon className="size-6 text-red-500" />,
	balance: <CoinsIcon className="size-6 text-zinc-500" />,
}

export function SummaryCard({ type, value }: SummaryCardProps) {
	return (
		<Card>
			<CardContent className="flex flex-col gap-4">
				<div className="flex items-center justify-between">
					<span className="block text-zinc-600">{labels[type]}</span>
					{icons[type]}
				</div>

				<strong className="text-2xl lg:text-3xl text-zinc-800 font-semibold">
					{value}
				</strong>
			</CardContent>
		</Card>
	)
}
