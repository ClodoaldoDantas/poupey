import { Logo } from '@/components/logo'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { MonthYearPicker } from './month-year-picker'

export function Header() {
	return (
		<header className="h-56 sm:h-48 bg-teal-600">
			<div className="container mx-auto py-8 px-4 flex flex-wrap items-center justify-between">
				<Logo />
				<MonthYearPicker />

				<div className="flex items-center gap-4">
					<Avatar className="size-10">
						<AvatarImage src="https://github.com/clodoaldodantas.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>

					<span className="text-white font-semibold">Clodoaldo Dantas</span>
				</div>
			</div>
		</header>
	)
}
