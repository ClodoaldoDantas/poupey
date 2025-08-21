'use client'

import { ChevronDownIcon } from 'lucide-react'
import { useQueryState } from 'nuqs'
import { getLastFiveYears } from '@/app/dashboard/_helpers/get-last-five-years'
import { monthYearSearchParams } from '@/app/dashboard/_helpers/load-search-params'
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
import { months } from '../_constants/months'

const lastFiveYears = getLastFiveYears()

export function MonthYearPicker() {
	const [selectedMonth, setSelectedMonth] = useQueryState('month', {
		...monthYearSearchParams.month,
		shallow: false,
	})

	const [selectedYear, setSelectedYear] = useQueryState('year', {
		...monthYearSearchParams.year,
		shallow: false,
	})

	const selectedDateFormatted = `${months[selectedMonth]}, ${selectedYear}`

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="ghost" className="text-white">
					<span className="text-lg">{selectedDateFormatted}</span>
					<ChevronDownIcon className="size-5" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="flex gap-2">
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
