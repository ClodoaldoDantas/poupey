'use client'

import { createContext, type ReactNode, useState } from 'react'
import type { Category } from '@/types/category'

type EditCategoryContextType = {
	isDialogOpen: boolean
	handleOpenChangeDialog: (open: boolean) => void
	category: Category
}

export const EditCategoryContext = createContext({} as EditCategoryContextType)

type EditCategoryRootProps = {
	category: Category
	children: ReactNode
}

export function EditCategoryRoot({
	children,
	category,
}: EditCategoryRootProps) {
	const [isDialogOpen, setIsDialogOpen] = useState(false)

	const handleOpenChangeDialog = (open: boolean) => {
		setIsDialogOpen(open)
	}

	return (
		<EditCategoryContext.Provider
			value={{ isDialogOpen, handleOpenChangeDialog, category }}
		>
			{children}
		</EditCategoryContext.Provider>
	)
}
