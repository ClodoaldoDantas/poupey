import { Wallet2Icon } from 'lucide-react'
import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { MonthYearPicker } from './month-year-picker'

export function Header() {
	return (
		<header className="h-48 bg-teal-600">
			<div className="container mx-auto py-8 px-4 flex items-center justify-between">
				<Logo />

				<MonthYearPicker />

				<Button
					variant="outline"
					size="lg"
					className="text-base cursor-pointer"
				>
					<Wallet2Icon className="size-5" />
					Adicionar Transação
				</Button>
			</div>
		</header>
	)
}
