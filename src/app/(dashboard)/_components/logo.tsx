import { WalletIcon } from 'lucide-react'
import Link from 'next/link'

export function Logo() {
	return (
		<Link
			href="/"
			className="text-white flex items-center gap-2 w-full sm:w-fit mb-4 sm:mb-0"
		>
			<WalletIcon className="size-8" />
			<span className="text-2xl font-bold">Poupey</span>
		</Link>
	)
}
