import { getCategories } from '@/actions/get-categories'
import {
	Card,
	CardAction,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { CategoriesTable } from './categories-table'

export default async function DashboardCategoriesPage() {
	const categories = await getCategories()

	return (
		<Card>
			<CardHeader>
				<CardTitle>Categorias</CardTitle>

				<CardAction className="space-x-2">
					{/* Botão de adicionar */}
				</CardAction>
			</CardHeader>
			<CardContent>
				<CategoriesTable categories={categories} />
			</CardContent>
		</Card>
	)
}
