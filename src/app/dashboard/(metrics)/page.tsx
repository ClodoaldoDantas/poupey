import type { SearchParams } from 'nuqs/server'
import { getTransactions } from '@/actions/get-transactions'
import { loadSearchParams } from '@/helpers/load-search-params'
import { Header } from '../_components/header'
import { Summary } from './_components/summary'

type HomeProps = {
	searchParams: Promise<SearchParams>
}

export default async function Home({ searchParams }: HomeProps) {
	const { month, year } = await loadSearchParams(searchParams)
	const transactions = await getTransactions({ month, year })

	return (
		<>
			<Header size="large" />
			<Summary transactions={transactions} />
		</>
	)
}
