import { Category } from '@/components/category'
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'

export function Transactions() {
	return (
		<section className="container my-12 mx-auto px-4">
			<Table className="text-base">
				<TableHeader>
					<TableRow>
						<TableHead className="font-semibold">Descrição</TableHead>
						<TableHead className="font-semibold">Valor</TableHead>
						<TableHead className="font-semibold">Categoria</TableHead>
						<TableHead className="font-semibold">Data</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody className="text-zinc-700">
					<TableRow>
						<TableCell>Compra no supermercado</TableCell>
						<TableCell>R$ 120,00</TableCell>
						<TableCell>
							<Category categoryId="food" />
						</TableCell>
						<TableCell>01/06/2024</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Conta de luz</TableCell>
						<TableCell>R$ 80,50</TableCell>
						<TableCell>
							<Category categoryId="home" />
						</TableCell>
						<TableCell>02/06/2024</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Cinema</TableCell>
						<TableCell>R$ 35,00</TableCell>
						<TableCell>
							<Category categoryId="hobby" />
						</TableCell>
						<TableCell>03/06/2024</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Farmácia</TableCell>
						<TableCell>R$ 45,90</TableCell>
						<TableCell>
							<Category categoryId="health" />
						</TableCell>
						<TableCell>05/06/2024</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Restaurante</TableCell>
						<TableCell>R$ 70,00</TableCell>
						<TableCell>
							<Category categoryId="food" />
						</TableCell>
						<TableCell>06/06/2024</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Internet</TableCell>
						<TableCell>R$ 99,90</TableCell>
						<TableCell>
							<Category categoryId="home" />
						</TableCell>
						<TableCell>07/06/2024</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Livros</TableCell>
						<TableCell>R$ 60,00</TableCell>
						<TableCell>
							<Category categoryId="education" />
						</TableCell>
						<TableCell>08/06/2024</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Academia</TableCell>
						<TableCell>R$ 120,00</TableCell>
						<TableCell>
							<Category categoryId="health" />
						</TableCell>
						<TableCell>09/06/2024</TableCell>
					</TableRow>
					<TableRow>
						<TableCell>Uber</TableCell>
						<TableCell>R$ 25,00</TableCell>
						<TableCell>
							<Category categoryId="other" />
						</TableCell>
						<TableCell>10/06/2024</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</section>
	)
}
