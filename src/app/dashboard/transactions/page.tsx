import type { SearchParams } from 'nuqs/server'
import { getTransactions } from '@/actions/get-transactions'
import { EmptyData } from '@/components/empty-data'
import {
	Card,
	CardAction,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { loadSearchParams } from '@/helpers/load-search-params'
import { AddTransaction } from './_components/add-transaction'
import { ExportExcelButton } from './_components/export-excel-button'
import { TransactionsList } from './_components/transactions-list'
import { TransactionsTable } from './_components/transactions-table'

type HomeProps = {
	searchParams: Promise<SearchParams>
}

export default async function DashboardTransactionsPage({
	searchParams,
}: HomeProps) {
	const { month, year } = await loadSearchParams(searchParams)
	const transactions = await getTransactions({ month, year })

	return (
		<Card>
			<CardHeader className="flex flex-wrap gap-4 items-center justify-between">
				<CardTitle>Transações</CardTitle>

				<CardAction className="space-x-2">
					<AddTransaction.Dialog>
						<AddTransaction.Form />
					</AddTransaction.Dialog>

					<ExportExcelButton
						transactions={transactions}
						month={month}
						year={year}
					/>
				</CardAction>
			</CardHeader>
			<CardContent>
				{transactions.length === 0 ? (
					<EmptyData />
				) : (
					<>
						<div className="xl:hidden">
							<TransactionsList transactions={transactions} />
						</div>

						<div className="hidden xl:block">
							<TransactionsTable transactions={transactions} />
						</div>
					</>
				)}
			</CardContent>
		</Card>
	)
}
