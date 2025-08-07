'use client'

import { BanknoteArrowUpIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { AddTransactionForm } from './add-transaction-form'

export function AddTransactionDialog() {
	return (
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
	)
}
