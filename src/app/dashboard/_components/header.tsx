import { Logo } from '@/app/dashboard/_components/logo'
import { cn } from '@/lib/utils'
import { MonthYearPicker } from './month-year-picker'
import { Profile } from './profile'

type HeaderProps = {
	size?: 'medium' | 'large'
}

export function Header({ size = 'medium' }: HeaderProps) {
	return (
		<header
			className={cn(
				'bg-teal-600',
				size === 'large' ? 'h-56 sm:h-48' : 'h-auto',
			)}
		>
			<div className="container mx-auto py-8 px-4 flex flex-wrap items-center justify-between">
				<Logo />
				<MonthYearPicker />
				<Profile />
			</div>
		</header>
	)
}
