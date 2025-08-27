'use client'

import { Pie, PieChart } from 'recharts'
import { EmptyData } from '@/components/empty-data'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart'
import type { Transaction } from '@/types/transaction'

const chartConfig = {
	income: {
		label: 'Receitas',
	},
	expense: {
		label: 'Despesas',
	},
} satisfies ChartConfig

type MonthlyBalanceCardProps = {
	transactions: Transaction[]
}

export function MonthlyBalanceCard({ transactions }: MonthlyBalanceCardProps) {
	const total = transactions.reduce(
		(acc, transaction) => {
			if (transaction.type === 'income') {
				acc.income += transaction.amountInCents / 100
			} else {
				acc.expense += transaction.amountInCents / 100
			}
			return acc
		},
		{
			income: 0,
			expense: 0,
		},
	)

	const chartData = [
		{
			type: 'income',
			amount: total.income,
			fill: 'var(--color-green-500)',
		},
		{
			type: 'expense',
			amount: total.expense,
			fill: 'var(--color-red-500)',
		},
	]

	return (
		<Card className="flex flex-col">
			<CardHeader className="items-center pb-0">
				<CardTitle>Resumo do mês</CardTitle>
				<CardDescription>
					Vejo o quanto você ganhou e gastou no mês de agosto.
				</CardDescription>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				{transactions.length > 0 ? (
					<ChartContainer
						config={chartConfig}
						className="mx-auto aspect-square max-h-[300px]"
					>
						<PieChart>
							<ChartTooltip
								cursor={false}
								content={<ChartTooltipContent hideLabel />}
							/>
							<Pie data={chartData} dataKey="amount" nameKey="type" />
						</PieChart>
					</ChartContainer>
				) : (
					<EmptyData />
				)}
			</CardContent>
		</Card>
	)
}
