import { InboxIcon } from 'lucide-react'
import type { SearchParams } from 'nuqs/server'
import { loadSearchParams } from '@/app/(dashboard)/_helpers/load-search-params'
import { getTransactions } from './_actions/get-transactions'
import { AddTransactionDialog } from './_components/add-transaction-dialog'
import { ExportExcelButton } from './_components/export-excel-button'
import { Header } from './_components/header'
import { Summary } from './_components/summary'
import { TransactionsTable } from './_components/transactions-table'

type HomeProps = {
	searchParams: Promise<SearchParams>
}

export default async function Home({ searchParams }: HomeProps) {
	const { month, year } = await loadSearchParams(searchParams)
	const transactions = await getTransactions({ month, year })

	return (
		<>
			<Header />
			<Summary transactions={transactions} />

			<div className="container mx-auto mt-12 px-4">
				<div className="flex items-center gap-2 justify-end">
					<AddTransactionDialog />

					<ExportExcelButton
						transactions={transactions}
						month={month}
						year={year}
					/>
				</div>
			</div>

			{transactions.length === 0 ? (
				<div className="container mx-auto mt-12 px-4">
					<div className="h-40 flex flex-col items-center justify-center gap-2 border-dashed border-2 border-gray-300 rounded-lg">
						<InboxIcon className="size-8 text-muted-foreground" />
						<p className="text-lg text-center text-muted-foreground">
							Nenhuma transação encontrada.
						</p>
					</div>
				</div>
			) : (
				<TransactionsTable transactions={transactions} />
			)}
		</>
	)
}
