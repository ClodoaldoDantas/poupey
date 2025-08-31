import { getCategories } from '@/actions/get-categories'
import {
	Card,
	CardAction,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { AddCategory } from './_components/add-category'
import { CategoriesTable } from './_components/categories-table'

export default async function DashboardCategoriesPage() {
	const categories = await getCategories()

	return (
		<Card>
			<CardHeader>
				<CardTitle>Categorias</CardTitle>

				<CardAction className="space-x-2">
					<AddCategory.Dialog>
						<AddCategory.Form />
					</AddCategory.Dialog>
				</CardAction>
			</CardHeader>
			<CardContent>
				<CategoriesTable categories={categories} />
			</CardContent>
		</Card>
	)
}
