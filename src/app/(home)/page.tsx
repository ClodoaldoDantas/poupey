import type { SearchParams } from 'nuqs/server'
import { loadSearchParams } from '@/utils/load-search-params'
import { getTransactions } from './_actions/get-transactions'
import { Header } from './_components/header'
import { Summary } from './_components/summary'
import { Transactions } from './_components/transactions'

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
			<Transactions transactions={transactions} />
		</>
	)
}
