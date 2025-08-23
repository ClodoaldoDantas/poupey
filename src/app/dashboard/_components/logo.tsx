import { WalletIcon } from 'lucide-react'

export function Logo() {
	return (
		<div className="text-white flex items-center gap-2 w-full sm:w-fit mb-4 sm:mb-0">
			<WalletIcon className="size-8" />
			<span className="text-2xl font-bold">Poupey</span>
		</div>
	)
}
