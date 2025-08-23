import { PiggyBankIcon } from 'lucide-react'
import { getProfile } from '@/actions/get-profile'
import { PreserveQueryLink } from '@/components/preserve-query-link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogoutButton } from './logout-button'

export async function Profile() {
	const profile = await getProfile()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					className="flex items-center gap-4 hover:bg-transparent px-2"
				>
					<Avatar className="size-10">
						<AvatarImage src={profile?.imageUrl ?? ''} />
						<AvatarFallback>
							{profile.name.charAt(0).toUpperCase()}
						</AvatarFallback>
					</Avatar>

					<span className="text-white text-base font-semibold hidden sm:block">
						{profile.name}
					</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="start">
				<DropdownMenuItem asChild>
					<PreserveQueryLink href="/dashboard/transactions">
						<PiggyBankIcon className="size-5 text-foreground" />
						Minhas Transações
					</PreserveQueryLink>
				</DropdownMenuItem>

				<LogoutButton />
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
