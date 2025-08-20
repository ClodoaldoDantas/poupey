import { Logo } from '@/app/dashboard/_components/logo'
import { MonthYearPicker } from './month-year-picker'
import { Profile } from './profile'

export function Header() {
	return (
		<header className="h-56 sm:h-48 bg-teal-600">
			<div className="container mx-auto py-8 px-4 flex flex-wrap items-center justify-between">
				<Logo />
				<MonthYearPicker />
				<Profile />
			</div>
		</header>
	)
}
