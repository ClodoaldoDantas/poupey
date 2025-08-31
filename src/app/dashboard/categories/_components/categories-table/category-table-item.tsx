import { TableCell, TableRow } from '@/components/ui/table'
import type { Category } from '@/types/category'
import { DeleteCategoryButton } from '../delete-category-button'
import { EditCategory } from '../edit-category'

type CategoriesTableItemProps = {
	category: Category
}

export function CategoryTableItem({ category }: CategoriesTableItemProps) {
	return (
		<TableRow>
			<TableCell>{category.name}</TableCell>
			<TableCell className="flex items-center gap-2">
				<EditCategory.Root category={category}>
					<EditCategory.Dialog>
						<EditCategory.Form />
					</EditCategory.Dialog>
				</EditCategory.Root>

				<DeleteCategoryButton categoryId={category.id} />
			</TableCell>
		</TableRow>
	)
}
