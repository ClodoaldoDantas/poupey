import dayjs from 'dayjs'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { categories } from '@/constants/categories'
import { formatPrice } from '@/helpers/format-price'
import type { Transaction } from '@/types/transaction'
import { DeleteTransactionButton } from './delete-transaction-button'
import { EditTransaction } from './edit-transaction'

type TransactionsTableProps = {
	transactions: Transaction[]
}

export function TransactionsTable({ transactions }: TransactionsTableProps) {
	return (
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
								<EditTransaction.Root transaction={transaction}>
									<EditTransaction.Dialog>
										<EditTransaction.Form />
									</EditTransaction.Dialog>
								</EditTransaction.Root>

								<DeleteTransactionButton transactionId={transaction.id} />
							</TableCell>
						</TableRow>
					)
				})}
			</TableBody>
		</Table>
	)
}
