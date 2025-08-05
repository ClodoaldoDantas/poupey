import dayjs from 'dayjs'
import { Category } from '@/components/category'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import type { Transaction } from '@/types/transaction'

export function Transactions({
	transactions,
}: {
	transactions: Transaction[]
}) {
	const priceFormatter = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	})

	return (
		<section className="container my-12 mx-auto px-4">
			<Table className="text-base">
				<TableHeader>
					<TableRow>
						<TableHead className="font-semibold">Descrição</TableHead>
						<TableHead className="font-semibold">Valor</TableHead>
						<TableHead className="font-semibold">Categoria</TableHead>
						<TableHead className="font-semibold">Data</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody className="text-zinc-700">
					{transactions.map((transaction) => (
						<TableRow key={transaction.id}>
							<TableCell>{transaction.description}</TableCell>
							{transaction.type === 'expense' ? (
								<TableCell>
									- {priceFormatter.format(transaction.amount)}
								</TableCell>
							) : (
								<TableCell className="text-green-600">
									{priceFormatter.format(transaction.amount)}
								</TableCell>
							)}
							<TableCell>
								<Category categoryId={transaction.category} />
							</TableCell>
							<TableCell>
								{dayjs(transaction.paymentDate).format('DD/MM/YYYY')}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</section>
	)
}
