import {
	AppleIcon,
	GraduationCapIcon,
	HeartPlusIcon,
	HelpCircleIcon,
	HomeIcon,
	Laptop2Icon,
	PiggyBankIcon,
	PopcornIcon,
} from 'lucide-react'

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
	leisure: {
		name: 'Lazer',
		icon: PopcornIcon,
	},
	investments: {
		name: 'Investimentos',
		icon: PiggyBankIcon,
	},
	work: {
		name: 'Trabalho',
		icon: Laptop2Icon,
	},
	others: {
		name: 'Outros',
		icon: HelpCircleIcon,
	},
}

export type CategoryId = keyof typeof categories
