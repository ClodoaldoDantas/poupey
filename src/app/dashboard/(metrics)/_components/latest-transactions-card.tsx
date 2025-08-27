import dayjs from 'dayjs'
import { EyeIcon } from 'lucide-react'
import { Suspense } from 'react'
import { EmptyData } from '@/components/empty-data'
import { PreserveQueryLink } from '@/components/preserve-query-link'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { categories } from '@/constants/categories'
import { formatPrice } from '@/helpers/format-price'
import { cn } from '@/lib/utils'
import type { Transaction } from '@/types/transaction'

type LatestTransactionsCardProps = {
	transactions: Transaction[]
}

export function LatestTransactionsCard({
	transactions,
}: LatestTransactionsCardProps) {
	const latestTransactions = transactions.slice(0, 4)

	return (
		<Card className="flex flex-col">
			<CardHeader className="items-center pb-0">
				<CardTitle>Últimas Transações</CardTitle>
				<CardDescription>Veja suas transações mais recentes</CardDescription>

				{latestTransactions.length > 0 && (
					<CardAction>
						<Suspense>
							<Button variant="outline" asChild>
								<PreserveQueryLink href="/dashboard/transactions">
									<EyeIcon />
									Ver todos
								</PreserveQueryLink>
							</Button>
						</Suspense>
					</CardAction>
				)}
			</CardHeader>
			<CardContent className="flex-1">
				{latestTransactions.length > 0 ? (
					<div className="space-y-4">
						{latestTransactions.map((transaction) => {
							const category = categories[transaction.category]
							const Icon = category?.icon
							const isIncome = transaction.type === 'income'

							return (
								<div
									key={transaction.id}
									className="flex items-center justify-between p-3 border rounded-lg"
								>
									<div className="flex items-center gap-3">
										{Icon && (
											<div className="flex items-center justify-center w-10 h-10 rounded-full bg-muted">
												<Icon className="size-5 text-muted-foreground" />
											</div>
										)}
										<div className="flex flex-col">
											<span className="font-medium text-sm">
												{transaction.description}
											</span>
											<div className="flex items-center gap-2 text-xs text-muted-foreground">
												<span>{category?.name}</span>
												<span>•</span>
												<span>
													{dayjs(transaction.paymentDate).format('DD/MM/YYYY')}
												</span>
											</div>
										</div>
									</div>

									<span
										className={cn(
											'font-medium',
											isIncome ? 'text-green-600' : 'text-red-600',
										)}
									>
										{isIncome ? '+' : '-'}
										{formatPrice(transaction.amountInCents / 100)}
									</span>
								</div>
							)
						})}
					</div>
				) : (
					<EmptyData />
				)}
			</CardContent>
		</Card>
	)
}
