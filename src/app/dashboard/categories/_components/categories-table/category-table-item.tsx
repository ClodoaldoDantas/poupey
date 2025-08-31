import { TableCell, TableRow } from '@/components/ui/table'
import type { Category } from '@/types/category'

type CategoriesTableItemProps = {
	category: Category
}

export function CategoryTableItem({ category }: CategoriesTableItemProps) {
	return (
		<TableRow>
			<TableCell>{category.name}</TableCell>
			<TableCell className="flex items-center gap-2">Ações</TableCell>
		</TableRow>
	)
}
