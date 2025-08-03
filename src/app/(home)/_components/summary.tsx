import { CoinsIcon, TrendingDownIcon, TrendingUpIcon } from 'lucide-react';

export function Summary() {
	return (
		<div className="container mx-auto px-4 mt-[-80px]">
			<div className="grid grid-cols-3 gap-8">
				<SummaryCard type="income" value="R$ 17.400,00" />
				<SummaryCard type="expense" value="R$ 1.259,00" />
				<SummaryCard type="balance" value="R$ 16.141,00" />
			</div>
		</div>
	);
}

type SummaryCardProps = {
	type: 'income' | 'expense' | 'balance';
	value: string;
};

export function SummaryCard({ type, value }: SummaryCardProps) {
	const labels = {
		income: 'Entradas',
		expense: 'Saídas',
		balance: 'Total',
	};

	const icons = {
		income: <TrendingUpIcon className="size-6 text-green-500" />,
		expense: <TrendingDownIcon className="size-6 text-red-500" />,
		balance: <CoinsIcon className="size-6 text-zinc-500" />,
	};

	return (
		<div className="w-full bg-white shadow-md min-h-36 p-6 rounded flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<span className="block text-zinc-600">{labels[type]}</span>
				{icons[type]}
			</div>

			<strong className="text-3xl text-zinc-800 font-bold">{value}</strong>
		</div>
	);
}
