import { Logo } from '@/components/logo'
import { AddTransactionDialog } from './add-transaction-dialog'
import { MonthYearPicker } from './month-year-picker'

export function Header() {
	return (
		<header className="h-48 bg-teal-600">
			<div className="container mx-auto py-8 px-4 flex items-center justify-between">
				<Logo />
				<MonthYearPicker />
				<AddTransactionDialog />
			</div>
		</header>
	)
}
