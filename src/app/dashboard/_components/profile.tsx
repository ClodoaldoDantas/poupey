import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function Profile() {
	return (
		<div className="flex items-center gap-4">
			<Avatar className="size-10">
				<AvatarImage src="https://github.com/clodoaldodantas.png" />
				<AvatarFallback>CD</AvatarFallback>
			</Avatar>

			<span className="text-white font-semibold hidden sm:block">
				Clodoaldo Dantas
			</span>
		</div>
	)
}
