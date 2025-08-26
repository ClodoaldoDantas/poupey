'use client'

import { DollarSignIcon } from 'lucide-react'
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
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
import { type CategoryId, categories } from '@/constants/categories'
import { formatPrice } from '@/helpers/format-price'
import type { Transaction } from '@/types/transaction'

type ExpensesByCategoryCardProps = {
	transactions: Transaction[]
}

type ExpensesByCategory = {
	categoryId: CategoryId
	categoryName: string
	totalInCents: number
	count: number
}

const chartConfig = {
	amount: {
		label: 'Valor',
	},
} satisfies ChartConfig

export function ExpensesByCategoryCard({
	transactions,
}: ExpensesByCategoryCardProps) {
	const expensesByCategory = transactions
		.filter((transaction) => transaction.type === 'expense')
		.reduce(
			(acc, transaction) => {
				const categoryId = transaction.category

				if (!acc[categoryId]) {
					acc[categoryId] = {
						categoryId,
						categoryName: categories[categoryId].name,
						totalInCents: 0,
						count: 0,
					}
				}

				acc[categoryId].totalInCents += transaction.amountInCents
				acc[categoryId].count += 1

				return acc
			},
			{} as Record<CategoryId, ExpensesByCategory>,
		)

	const chartData = Object.values(expensesByCategory).map((item) => ({
		category: item.categoryName,
		amount: item.totalInCents / 100,
	}))

	return (
		<Card>
			<CardHeader>
				<CardTitle>Despesas por categoria</CardTitle>
				<CardDescription>
					Veja as despesas agrupadas por categoria
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart accessibilityLayer data={chartData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="category"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
						/>
						<ChartTooltip
							cursor={false}
							content={
								<ChartTooltipContent
									hideLabel
									formatter={(value) => (
										<>
											Total:{' '}
											<strong className="font-semibold">
												{formatPrice(Number(value))}
											</strong>
										</>
									)}
								/>
							}
						/>
						<Bar
							dataKey="amount"
							fill="var(--chart-2)"
							radius={8}
							barSize={65}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
