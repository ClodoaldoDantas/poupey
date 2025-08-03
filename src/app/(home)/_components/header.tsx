import { ChevronDownIcon, Wallet2Icon } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';

export function Header() {
	return (
		<header className="h-48 bg-teal-600">
			<div className="container mx-auto py-8 px-4 flex items-center justify-between">
				<Logo />

				<div className="flex items-center gap-2 text-white">
					<span className="text-lg">Agosto, 2025</span>
					<ChevronDownIcon className="size-5" />
				</div>

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
	);
}
