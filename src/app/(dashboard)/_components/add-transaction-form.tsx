import { zodResolver } from '@hookform/resolvers/zod'
import dayjs from 'dayjs'
import { TrendingDownIcon, TrendingUpIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useHookFormMask } from 'use-mask-input'
import { z } from 'zod'
import { categories } from '@/components/category'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { createTransaction } from '../_actions/transactions'

const formSchema = z.object({
	description: z.string().min(2, { message: 'Descrição é obrigatória.' }),
	amount: z.string().min(1, { message: 'Valor é obrigatório.' }),
	type: z.enum(['income', 'expense']),
	category: z.string().min(1, { message: 'Categoria é obrigatória.' }),
	paymentDate: z.string().min(1, { message: 'Data é obrigatória.' }),
})

type FormData = z.infer<typeof formSchema>

const initialState: FormData = {
	description: '',
	amount: '',
	category: '',
	type: 'expense',
	paymentDate: dayjs().format('YYYY-MM-DD'),
}

const currencyBrlStringToCents = (value: string): number => {
	const normalizedAmount = value.replace(/\./g, '').replace(',', '.')
	const amount = Number(normalizedAmount)
	return amount * 100
}

export function AddTransactionForm() {
	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: initialState,
	})

	const registerWithMask = useHookFormMask(form.register)

	async function handleCreateTransaction(values: FormData) {
		const data = {
			description: values.description,
			category: values.category,
			type: values.type,
			amountInCents: currencyBrlStringToCents(values.amount),
			paymentDate: dayjs(values.paymentDate).toISOString(),
		}

		try {
			await createTransaction(data)
			toast.success('Transação criada com sucesso.')
			form.reset(initialState)
		} catch {
			toast.error('Erro ao criar transação.')
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(handleCreateTransaction)}
				className="space-y-6"
			>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Descrição</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className="grid gap-2">
					<Label htmlFor="amount">Valor</Label>

					<Input
						id="amount"
						placeholder="R$ 0,00"
						{...registerWithMask('amount', 'brl-currency', {
							rightAlign: false,
						})}
					/>

					{form.formState.errors.amount && (
						<p className="text-destructive text-sm">
							{form.formState.errors.amount.message}
						</p>
					)}
				</div>

				<FormField
					control={form.control}
					name="type"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Tipo de Transação</FormLabel>
							<Select onValueChange={field.onChange} value={field.value}>
								<FormControl className="w-full">
									<SelectTrigger>
										<SelectValue placeholder="Selecione um tipo" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="income">
										<TrendingUpIcon className="size-5 text-green-500" />
										Receita
									</SelectItem>

									<SelectItem value="expense">
										<TrendingDownIcon className="size-5 text-red-500" />
										Despesa
									</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="category"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Categoria</FormLabel>
							<Select onValueChange={field.onChange} value={field.value}>
								<FormControl className="w-full">
									<SelectTrigger>
										<SelectValue placeholder="Selecione uma categoria" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{Object.entries(categories).map(
										([categoryId, { icon: Icon, name }]) => (
											<SelectItem key={categoryId} value={categoryId}>
												{Icon && <Icon className="size-5 text-foreground" />}
												{name}
											</SelectItem>
										),
									)}
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="paymentDate"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Data de Pagamento</FormLabel>
							<FormControl>
								<Input type="date" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit">Salvar</Button>
			</form>
		</Form>
	)
}
