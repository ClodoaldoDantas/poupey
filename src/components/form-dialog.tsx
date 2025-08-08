import { BanknoteArrowUpIcon, EditIcon } from 'lucide-react'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from './ui/button'

type FormDialogProps = {
	children?: React.ReactNode
	type: 'add' | 'edit'
}

export function FormDialog({ children, type }: FormDialogProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				{type === 'add' ? (
					<Button variant="outline">
						<BanknoteArrowUpIcon className="size-5" />
						Adicionar
					</Button>
				) : (
					<Button variant="outline">
						<EditIcon className="size-5" />
						Editar
					</Button>
				)}
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>
						{type === 'add' ? 'Nova Transação' : 'Editar Transação'}
					</DialogTitle>
					<DialogDescription>
						{type === 'add'
							? 'Adicione uma nova transação à sua conta.'
							: 'Edite os detalhes da transação selecionada.'}
					</DialogDescription>
				</DialogHeader>

				{children}
			</DialogContent>
		</Dialog>
	)
}
