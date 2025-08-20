'use client'

import { Trash2Icon } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { deleteTransaction } from '../_actions/delete-transaction'

export function DeleteTransactionButton({
	transactionId,
}: {
	transactionId: string
}) {
	const handleDeleteTransaction = async () => {
		if (window.confirm('Tem certeza que deseja excluir esta transação?')) {
			try {
				await deleteTransaction(transactionId)
				toast.success('Transação excluída com sucesso.')
			} catch {
				toast.error('Erro ao excluir transação.')
			}
		}
	}

	return (
		<Button
			size="sm"
			variant="outline"
			className="hover:text-red-600 hover:border-red-600"
			onClick={handleDeleteTransaction}
		>
			<Trash2Icon className="size-5" />
			Excluir
		</Button>
	)
}
