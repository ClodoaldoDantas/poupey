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
			<CardContent>{/* TODO: adicionar PieChart */}</CardContent>
		</Card>
	)
}
