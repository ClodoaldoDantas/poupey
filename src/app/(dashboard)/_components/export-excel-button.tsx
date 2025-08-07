'use client'

import dayjs from 'dayjs'
import { DownloadIcon } from 'lucide-react'
import { categories } from '@/components/category'
import { Button } from '@/components/ui/button'
import type { Transaction } from '@/types/transaction'
import { downloadExcelFile, generateExcelFile } from '@/utils/excel'
import { formatPrice } from '@/utils/format-price'

export function ExportExcelButton({
	transactions,
}: {
	transactions: Transaction[]
}) {
	function handleExport() {
		const data = transactions.map((transaction) => ({
			Motivo: transaction.description,
			Valor: formatPrice(transaction.amountInCents / 100),
			Categoria: categories[transaction.category].name,
			Data: dayjs(transaction.paymentDate).format('DD/MM/YYYY'),
			Tipo: transaction.type === 'expense' ? 'Despesa' : 'Receita',
		}))

		const excelBuffer = generateExcelFile(data)
		downloadExcelFile('dados', excelBuffer)
	}

	return (
		<Button
			onClick={handleExport}
			variant="outline"
			className="hover:text-green-600 hover:border-green-600"
			disabled={transactions.length === 0}
		>
			<DownloadIcon className="size-5" />
			Exportar para Excel
		</Button>
	)
}
