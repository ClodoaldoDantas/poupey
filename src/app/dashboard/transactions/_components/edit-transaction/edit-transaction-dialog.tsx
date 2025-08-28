'use client'

import { EditIcon } from 'lucide-react'
import { type ReactNode, useContext } from 'react'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { EditTransactionContext } from './edit-transaction-root'

export function EditTransactionDialog({ children }: { children: ReactNode }) {
	const { isDialogOpen, handleOpenChangeDialog } = useContext(
		EditTransactionContext,
	)

	return (
		<Dialog open={isDialogOpen} onOpenChange={handleOpenChangeDialog}>
			<DialogTrigger asChild>
				<Button size="icon" variant="outline" aria-label="Editar">
					<EditIcon className="size-5" />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Editar Transação</DialogTitle>
					<DialogDescription>
						Edite os detalhes da transação selecionada.
					</DialogDescription>
				</DialogHeader>

				{children}
			</DialogContent>
		</Dialog>
	)
}
