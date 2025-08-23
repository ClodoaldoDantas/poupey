import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
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

	const sortedExpenses = Object.values(expensesByCategory).sort(
		(a, b) => b.totalInCents - a.totalInCents,
	)

	return (
		<Card>
			<CardHeader>
				<CardTitle>Despesas por categoria</CardTitle>
				<CardDescription>
					Veja as despesas agrupadas por categoria
				</CardDescription>
			</CardHeader>
			<CardContent>
				{sortedExpenses.length > 0 ? (
					<div className="space-y-4">
						{sortedExpenses.map((expense) => {
							const { icon: Icon } = categories[expense.categoryId]

							return (
								<div
									key={expense.categoryId}
									className="flex items-center justify-between"
								>
									<div className="flex items-center gap-3">
										<div className="flex size-10 items-center justify-center rounded-lg bg-muted">
											<Icon className="size-5" />
										</div>
										<div>
											<p className="font-medium">{expense.categoryName}</p>
											<p className="text-sm text-muted-foreground">
												{expense.count}{' '}
												{expense.count === 1 ? 'transação' : 'transações'}
											</p>
										</div>
									</div>
									<div className="text-right">
										<p className="font-medium">
											{formatPrice(expense.totalInCents / 100)}
										</p>
									</div>
								</div>
							)
						})}
					</div>
				) : (
					<p className="text-center text-muted-foreground">
						Nenhuma despesa encontrada no período selecionado.
					</p>
				)}
			</CardContent>
		</Card>
	)
}
