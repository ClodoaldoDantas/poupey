'use client'

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts'
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
import { type CategoryId, categories } from '@/constants/categories'
import { formatPrice } from '@/helpers/format-price'
import type { Transaction } from '@/types/transaction'

type ExpensesByCategoryCardProps = {
	transactions: Transaction[]
}

type ExpensesByCategory = {
	categoryId: string
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
		.filter((transaction) => {
			return transaction.type === 'expense' && transaction.category !== null
		})
		.reduce(
			(acc, transaction) => {
				const categoryId = transaction.category!.id
				const categoryName = transaction.category!.name

				if (!categoryId) {
					return acc
				}

				if (!acc[categoryId]) {
					acc[categoryId] = {
						categoryId,
						categoryName,
						totalInCents: 0,
						count: 0,
					}
				}

				acc[categoryId].totalInCents += transaction.amountInCents
				acc[categoryId].count += 1

				return acc
			},
			{} as Record<string, ExpensesByCategory>,
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
				{transactions.length > 0 ? (
					<ChartContainer config={chartConfig} className="h-[300px] w-full">
						<BarChart accessibilityLayer data={chartData}>
							<CartesianGrid vertical={false} />
							<XAxis
								dataKey="category"
								tickLine={false}
								tickMargin={10}
								axisLine={false}
								fontSize={12}
								fontWeight={500}
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
								fill="var(--chart-1)"
								radius={4}
								barSize={60}
							/>
						</BarChart>
					</ChartContainer>
				) : (
					<EmptyData />
				)}
			</CardContent>
		</Card>
	)
}
