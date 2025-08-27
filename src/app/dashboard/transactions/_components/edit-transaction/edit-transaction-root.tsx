'use client'

import { createContext, type ReactNode, useState } from 'react'
import type { Transaction } from '@/types/transaction'

type EditTransactionContextType = {
	isDialogOpen: boolean
	handleOpenChangeDialog: (open: boolean) => void
	transaction: Transaction
}

export const EditTransactionContext = createContext(
	{} as EditTransactionContextType,
)

type EditTransactionRootProps = {
	transaction: Transaction
	children: ReactNode
}

export function EditTransactionRoot({
	children,
	transaction,
}: EditTransactionRootProps) {
	const [isDialogOpen, setIsDialogOpen] = useState(false)

	const handleOpenChangeDialog = (open: boolean) => {
		setIsDialogOpen(open)
	}

	return (
		<EditTransactionContext.Provider
			value={{ isDialogOpen, handleOpenChangeDialog, transaction }}
		>
			{children}
		</EditTransactionContext.Provider>
	)
}
