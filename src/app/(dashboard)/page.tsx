import type { SearchParams } from 'nuqs/server'
import { loadSearchParams } from '@/utils/load-search-params'
import { getTransactions } from './_actions/transactions'
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
				<div className="flex items-center justify-end">
					<ExportExcelButton transactions={transactions} />
				</div>
			</div>

			<TransactionsTable transactions={transactions} />
		</>
	)
}
