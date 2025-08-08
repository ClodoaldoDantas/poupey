'use client'

import { EditIcon } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import type { Transaction } from '@/types/transaction'
import { EditTransactionForm } from './edit-transaction-form'

export function EditTransactionDialog({
	transaction,
}: {
	transaction: Transaction
}) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>
				<Button variant="outline">
					<EditIcon className="size-5" />
					Editar
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Editar Transação</DialogTitle>
					<DialogDescription>
						Edite os detalhes da transação selecionada.
					</DialogDescription>
				</DialogHeader>

				<EditTransactionForm
					transaction={transaction}
					onSuccess={() => setIsOpen(false)}
				/>
			</DialogContent>
		</Dialog>
	)
}
