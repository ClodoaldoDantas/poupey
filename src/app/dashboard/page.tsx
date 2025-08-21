import { BanknoteArrowUpIcon, InboxIcon } from 'lucide-react'
import type { SearchParams } from 'nuqs/server'
import { loadSearchParams } from '@/app/dashboard/_helpers/load-search-params'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { getTransactions } from './_actions/get-transactions'
import { AddTransactionForm } from './_components/add-transaction-form'
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

			<div className="container mx-auto mt-6 px-4">
				<div className="flex items-center gap-2 justify-end">
					<Dialog>
						<DialogTrigger asChild>
							<Button variant="outline">
								<BanknoteArrowUpIcon className="size-5" />
								Adicionar
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Nova Transação</DialogTitle>
								<DialogDescription>
									Adicione uma nova transação à sua conta.
								</DialogDescription>
							</DialogHeader>

							<AddTransactionForm />
						</DialogContent>
					</Dialog>

					<ExportExcelButton
						transactions={transactions}
						month={month}
						year={year}
					/>
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
