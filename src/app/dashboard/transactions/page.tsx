import { InboxIcon } from 'lucide-react'
import type { SearchParams } from 'nuqs/server'
import { getTransactions } from '@/actions/get-transactions'
import { loadSearchParams } from '@/helpers/load-search-params'
import { AddTransaction } from './_components/add-transaction'
import { ExportExcelButton } from './_components/export-excel-button'
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
		<>
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2 justify-end">
					<AddTransaction.Dialog>
						<AddTransaction.Form />
					</AddTransaction.Dialog>

					<ExportExcelButton
						transactions={transactions}
						month={month}
						year={year}
					/>
				</div>
			</div>

			{transactions.length === 0 ? (
				<div className="my-8 h-40 flex flex-col items-center justify-center gap-2 border-dashed border-2 border-gray-300 rounded-lg">
					<InboxIcon className="size-8 text-muted-foreground" />
					<p className="text-lg text-center text-muted-foreground">
						Nenhuma transação encontrada.
					</p>
				</div>
			) : (
				<TransactionsTable transactions={transactions} />
			)}
		</>
	)
}
