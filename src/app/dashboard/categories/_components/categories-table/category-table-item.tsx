import { FormDialog } from '@/components/form-dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import type { Category } from '@/types/category'
import { DeleteCategoryButton } from '../delete-category-button'
import { EditCategoryForm } from '../edit-category-form'

type CategoriesTableItemProps = {
	category: Category
}

export function CategoryTableItem({ category }: CategoriesTableItemProps) {
	return (
		<TableRow>
			<TableCell>{category.name}</TableCell>
			<TableCell className="flex items-center gap-2">
				<FormDialog
					title="Editar Categoria"
					description="Altere os dados da categoria"
					operation="edit"
				>
					<EditCategoryForm category={category} />
				</FormDialog>

				<DeleteCategoryButton categoryId={category.id} />
			</TableCell>
		</TableRow>
	)
}
