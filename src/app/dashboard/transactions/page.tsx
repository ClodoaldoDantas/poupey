import { ArrowLeftIcon, InboxIcon } from 'lucide-react'
import Link from 'next/link'
import type { SearchParams } from 'nuqs/server'
import { getTransactions } from '@/actions/get-transactions'
import { Button } from '@/components/ui/button'
import { loadSearchParams } from '@/helpers/load-search-params'
import { Header } from '../_components/header'
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
			<Header />

			<div className="container mx-auto mt-6 px-4">
				<div className="flex items-center justify-between">
					<Button variant="outline" asChild>
						<Link href="/dashboard">
							<ArrowLeftIcon />
							Voltar para o Dashboard
						</Link>
					</Button>

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
			</div>

			{transactions.length === 0 ? (
				<div className="container mx-auto my-8 md:my-12 px-4">
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
