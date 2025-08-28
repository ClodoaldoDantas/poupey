import dayjs from 'dayjs'
import { TableCell, TableRow } from '@/components/ui/table'
import { categories } from '@/constants/categories'
import { formatPrice } from '@/helpers/format-price'
import type { Transaction } from '@/types/transaction'
import { DeleteTransactionButton } from '../delete-transaction-button'
import { EditTransaction } from '../edit-transaction'

type TransactionTableItemProps = {
	transaction: Transaction
}

export function TransactionTableItem({
	transaction,
}: TransactionTableItemProps) {
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
}
