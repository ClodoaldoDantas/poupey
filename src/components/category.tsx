import {
	AppleIcon,
	GraduationCapIcon,
	HeartPlusIcon,
	HelpCircleIcon,
	HomeIcon,
	PopcornIcon,
} from 'lucide-react';

export const categories = {
	food: {
		name: 'Alimentação',
		icon: AppleIcon,
	},
	health: {
		name: 'Saúde',
		icon: HeartPlusIcon,
	},
	education: {
		name: 'Educação',
		icon: GraduationCapIcon,
	},
	home: {
		name: 'Casa',
		icon: HomeIcon,
	},
	hobby: {
		name: 'Lazer',
		icon: PopcornIcon,
	},
	other: {
		name: 'Outros',
		icon: HelpCircleIcon,
	},
};

type CategoryProps = {
	categoryId: keyof typeof categories;
};

export function Category({ categoryId }: CategoryProps) {
	const { name, icon: Icon } = categories[categoryId];

	return (
		<div className="flex items-center gap-2.5">
			<Icon className="size-5" />
			<span>{name}</span>
		</div>
	);
}
