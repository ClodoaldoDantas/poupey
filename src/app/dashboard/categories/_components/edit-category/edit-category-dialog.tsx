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
import { EditCategoryContext } from './edit-category-root'

export function EditCategoryDialog({ children }: { children: ReactNode }) {
	const { isDialogOpen, handleOpenChangeDialog } =
		useContext(EditCategoryContext)

	return (
		<Dialog open={isDialogOpen} onOpenChange={handleOpenChangeDialog}>
			<DialogTrigger asChild>
				<Button size="icon" variant="outline" aria-label="Editar">
					<EditIcon className="size-5" />
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Editar Categoria</DialogTitle>
					<DialogDescription>
						Edite os detalhes da categoria selecionada.
					</DialogDescription>
				</DialogHeader>

				{children}
			</DialogContent>
		</Dialog>
	)
}
