import { InboxIcon } from 'lucide-react'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import type { Transaction } from '@/types/transaction'

type BalanceCardProps = {
	transactions: Transaction[]
}

export function BalanceCard({ transactions }: BalanceCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Resumo do mês</CardTitle>
				<CardDescription>
					Veja a porcentagem do quanto você gastou e economizou no mês
				</CardDescription>
			</CardHeader>
			<CardContent>
				{transactions.length > 0 ? (
					<p>Conteúdo do cartão de resumo do mês</p>
				) : (
					<div className="h-40 flex flex-col items-center justify-center gap-2 border-dashed border-2 border-gray-300 rounded-lg">
						<InboxIcon className="size-8 text-muted-foreground" />
						<p className="text-center text-muted-foreground">
							Nenhuma transação encontrada.
						</p>
					</div>
				)}
			</CardContent>
		</Card>
	)
}
