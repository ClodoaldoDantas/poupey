import { Header } from './_components/header';
import { Summary } from './_components/summary';
import { Transactions } from './_components/transactions';

export default function Home() {
	return (
		<>
			<Header />
			<Summary />
			<Transactions />
		</>
	);
}
