'use client'

import { ChevronDownIcon } from 'lucide-react'
import { parseAsInteger, useQueryState } from 'nuqs'
import { Button } from '@/components/ui/button'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

const months = [
	'Janeiro',
	'Fevereiro',
	'Março',
	'Abril',
	'Maio',
	'Junho',
	'Julho',
	'Agosto',
	'Setembro',
	'Outubro',
	'Novembro',
	'Dezembro',
]

export function MonthYearPicker() {
	const currentDate = new Date()
	const currentYear = currentDate.getFullYear()
	const currentMonth = currentDate.getMonth()

	const lastFiveYears = Array.from({ length: 5 }, (_, i) => currentYear - i)

	const [selectedMonth, setSelectedMonth] = useQueryState(
		'month',
		parseAsInteger.withDefault(currentMonth),
	)

	const [selectedYear, setSelectedYear] = useQueryState(
		'year',
		parseAsInteger.withDefault(currentYear),
	)

	const selectedDateFormatted = `${months[selectedMonth]}, ${selectedYear}`

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="ghost" className="text-white">
					<span className="text-lg">{selectedDateFormatted}</span>
					<ChevronDownIcon className="size-5" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="flex flex-col gap-2">
				<Select
					name="month"
					value={selectedMonth.toString()}
					onValueChange={(value) => setSelectedMonth(Number(value))}
				>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Mês" />
					</SelectTrigger>
					<SelectContent>
						{months.map((month, index) => (
							<SelectItem key={month} value={index.toString()}>
								{month}
							</SelectItem>
						))}
					</SelectContent>
				</Select>

				<Select
					name="year"
					value={selectedYear.toString()}
					onValueChange={(value) => setSelectedYear(Number(value))}
				>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Ano" />
					</SelectTrigger>
					<SelectContent>
						{lastFiveYears.map((year) => (
							<SelectItem key={year} value={year.toString()}>
								{year}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</PopoverContent>
		</Popover>
	)
}
