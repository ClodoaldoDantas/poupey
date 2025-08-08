import dayjs from 'dayjs'
import { formatPrice } from '@/app/(dashboard)/_helpers/format-price'
import { FormDialog } from '@/components/form-dialog'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import type { Transaction } from '@/types/transaction'
import { categories } from '../_constants/categories'
import { DeleteTransactionButton } from './delete-transaction-button'

export function TransactionsTable({
	transactions,
}: {
	transactions: Transaction[]
}) {
	return (
		<section className="container my-2 mx-auto px-4">
			<Table className="text-base">
				<TableHeader>
					<TableRow>
						<TableHead className="font-semibold">Descrição</TableHead>
						<TableHead className="font-semibold">Valor</TableHead>
						<TableHead className="font-semibold">Categoria</TableHead>
						<TableHead className="font-semibold">Data</TableHead>
						<TableHead className="w-[40px]">&nbsp;</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody className="text-zinc-700">
					{transactions.map((transaction) => {
						const amount = formatPrice(transaction.amountInCents / 100)
						const { name: categoryName, icon: CategoryIcon } =
							categories[transaction.category]

						return (
							<TableRow key={transaction.id}>
								<TableCell>{transaction.description}</TableCell>
								{transaction.type === 'expense' ? (
									<TableCell>- {amount}</TableCell>
								) : (
									<TableCell className="text-green-600">{amount}</TableCell>
								)}
								<TableCell>
									<div className="flex items-center gap-2.5">
										<CategoryIcon className="size-5" />
										<span>{categoryName}</span>
									</div>
								</TableCell>
								<TableCell>
									{dayjs(transaction.paymentDate).format('DD/MM/YYYY')}
								</TableCell>
								<TableCell className="flex items-center gap-2">
									<FormDialog type="edit">
										<span>Formulário de edição</span>
									</FormDialog>

									<DeleteTransactionButton transactionId={transaction.id} />
								</TableCell>
							</TableRow>
						)
					})}
				</TableBody>
			</Table>
		</section>
	)
}
