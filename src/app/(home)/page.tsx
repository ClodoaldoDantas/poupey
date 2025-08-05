import type { Transaction } from '@/types/transaction'
import { Header } from './_components/header'
import { Summary } from './_components/summary'
import { Transactions } from './_components/transactions'

export default function Home() {
	const transactions: Transaction[] = [
		{
			id: '1',
			description: 'Salário',
			amount: 3500,
			type: 'income',
			category: 'work',
			paymentDate: '2024-06-01T12:00:00',
		},
		{
			id: '2',
			description: 'Aluguel',
			amount: 1200,
			type: 'expense',
			category: 'home',
			paymentDate: '2024-06-02T12:00:00',
		},
		{
			id: '3',
			description: 'Supermercado',
			amount: 400,
			type: 'expense',
			category: 'food',
			paymentDate: '2024-06-03T12:00:00',
		},
		{
			id: '4',
			description: 'Freelance',
			amount: 800,
			type: 'income',
			category: 'work',
			paymentDate: '2024-06-04T12:00:00',
		},
		{
			id: '6',
			description: 'Restaurante',
			amount: 120,
			type: 'expense',
			category: 'leisure',
			paymentDate: '2024-06-06T12:00:00',
		},
		{
			id: '7',
			description: 'Investimento',
			amount: 500,
			type: 'income',
			category: 'investments',
			paymentDate: '2024-06-07T12:00:00',
		},
		{
			id: '8',
			description: 'Internet',
			amount: 100,
			type: 'expense',
			category: 'home',
			paymentDate: '2024-06-08T12:00:00',
		},
		{
			id: '9',
			description: 'Academia',
			amount: 90,
			type: 'expense',
			category: 'health',
			paymentDate: '2024-06-09T12:00:00',
		},
		{
			id: '10',
			description: 'Venda de item',
			amount: 250,
			type: 'income',
			category: 'others',
			paymentDate: '2024-06-10T12:00:00',
		},
	]

	return (
		<>
			<Header />
			<Summary />
			<Transactions transactions={transactions} />
		</>
	)
}
