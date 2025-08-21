'use client'

import { LogOutIcon } from 'lucide-react'
import { DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { logout } from '../_actions/logout'

export function SignOutButton() {
	return (
		<DropdownMenuItem onClick={() => logout()}>
			<LogOutIcon className="size-5 text-red-600" />
			Sair da conta
		</DropdownMenuItem>
	)
}
