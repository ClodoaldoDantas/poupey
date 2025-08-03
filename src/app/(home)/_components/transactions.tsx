import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';

export function Transactions() {
	return (
		<section className="container my-12 mx-auto px-4">
			<Table className="text-base">
				<TableHeader>
					<TableRow>
						<TableHead>Descrição</TableHead>
						<TableHead>Valor</TableHead>
						<TableHead>Categoria</TableHead>
						<TableHead>Data</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell>Compra no supermercado</TableCell>
						<TableCell>R$ 120,00</TableCell>
						<TableCell>Alimentação</TableCell>
						<TableCell>01/06/2024</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Conta de luz</TableCell>
						<TableCell>R$ 80,50</TableCell>
						<TableCell>Moradia</TableCell>
						<TableCell>02/06/2024</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Cinema</TableCell>
						<TableCell>R$ 35,00</TableCell>
						<TableCell>Lazer</TableCell>
						<TableCell>03/06/2024</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Gasolina</TableCell>
						<TableCell>R$ 150,00</TableCell>
						<TableCell>Transporte</TableCell>
						<TableCell>04/06/2024</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Farmácia</TableCell>
						<TableCell>R$ 45,90</TableCell>
						<TableCell>Saúde</TableCell>
						<TableCell>05/06/2024</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Restaurante</TableCell>
						<TableCell>R$ 70,00</TableCell>
						<TableCell>Alimentação</TableCell>
						<TableCell>06/06/2024</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Internet</TableCell>
						<TableCell>R$ 99,90</TableCell>
						<TableCell>Moradia</TableCell>
						<TableCell>07/06/2024</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Livros</TableCell>
						<TableCell>R$ 60,00</TableCell>
						<TableCell>Educação</TableCell>
						<TableCell>08/06/2024</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Academia</TableCell>
						<TableCell>R$ 120,00</TableCell>
						<TableCell>Saúde</TableCell>
						<TableCell>09/06/2024</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Uber</TableCell>
						<TableCell>R$ 25,00</TableCell>
						<TableCell>Transporte</TableCell>
						<TableCell>10/06/2024</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</section>
	);
}
