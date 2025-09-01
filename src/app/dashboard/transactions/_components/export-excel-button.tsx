'use client'

import dayjs from 'dayjs'
import { Button } from '@/components/ui/button'
import { months } from '@/constants/months'
import { downloadExcelFile, generateExcelFile } from '@/helpers/excel'
import { formatPrice } from '@/helpers/format-price'
import type { Transaction } from '@/types/transaction'

type ExportExcelButtonProps = {
	transactions: Transaction[]
	month: number
	year: number
}

export function ExportExcelButton({
	transactions,
	month,
	year,
}: ExportExcelButtonProps) {
	function handleExport() {
		const data = transactions.map((transaction) => ({
			Motivo: transaction.description,
			Valor: formatPrice(transaction.amountInCents / 100),
			Categoria: transaction.category?.name ?? 'Sem categoria',
			Data: dayjs(transaction.paymentDate).format('DD/MM/YYYY'),
			Tipo: transaction.type === 'expense' ? 'Despesa' : 'Receita',
		}))

		const monthName = months[month].toLowerCase()
		const filename = `planilha-${monthName}-${year}`

		const excelBuffer = generateExcelFile(data)
		downloadExcelFile(filename, excelBuffer)
	}

	return (
		<Button
			onClick={handleExport}
			variant="secondary"
			disabled={transactions.length === 0}
		>
			Exportar
		</Button>
	)
}
