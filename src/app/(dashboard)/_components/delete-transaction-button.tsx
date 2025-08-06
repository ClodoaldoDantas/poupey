'use client'

import { Trash2Icon } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { deleteTransaction } from '../_actions/transactions'

export function DeleteTransactionButton({
	transactionId,
}: {
	transactionId: string
}) {
	const handleDeleteTransaction = async () => {
		if (window.confirm('Tem certeza que deseja excluir esta transação?')) {
			const result = await deleteTransaction(transactionId)

			if (result.success) {
				toast.success(result.message)
			} else {
				toast.error(result.message)
			}
		}
	}

	return (
		<Button
			size="sm"
			variant="outline"
			className="text-foreground hover:text-red-600 hover:border-red-600"
			onClick={handleDeleteTransaction}
		>
			<Trash2Icon className="size-5" />
			Excluir
		</Button>
	)
}
