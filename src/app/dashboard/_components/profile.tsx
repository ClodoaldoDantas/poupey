import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SignOutButton } from '../../(auth)/_components/sign-out-button'
import { getProfile } from '../_actions/get-profile'

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
				<DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
				<DropdownMenuGroup>
					<SignOutButton />
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
