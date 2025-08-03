import { CoinsIcon, TrendingDownIcon, TrendingUpIcon } from 'lucide-react';

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
		<div className="w-full bg-white shadow-md p-6 rounded flex flex-col gap-4">
			<div className="flex items-center justify-between">
				<span className="block text-zinc-600">{labels[type]}</span>
				{icons[type]}
			</div>

			<strong className="text-xl md:text-3xl text-zinc-800 font-bold">
				{value}
			</strong>
		</div>
	);
}
