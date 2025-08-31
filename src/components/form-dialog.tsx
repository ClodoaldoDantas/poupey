import { EditIcon } from 'lucide-react'
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
	title: string
	description: string
	operation: 'add' | 'edit'
	children: React.ReactNode
}

export function FormDialog({
	title,
	description,
	operation,
	children,
}: FormDialogProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				{operation === 'add' ? (
					<Button>Adicionar</Button>
				) : (
					<Button size="icon" variant="outline" aria-label="Editar">
						<EditIcon className="size-5" />
					</Button>
				)}
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>

				{children}
			</DialogContent>
		</Dialog>
	)
}
