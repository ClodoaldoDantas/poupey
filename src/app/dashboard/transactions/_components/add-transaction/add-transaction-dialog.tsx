import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'

export function AddTransactionDialog({ children }: { children: ReactNode }) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Adicionar</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Nova Transação</DialogTitle>
					<DialogDescription>
						Adicione uma nova transação à sua conta.
					</DialogDescription>
				</DialogHeader>

				{children}
			</DialogContent>
		</Dialog>
	)
}
