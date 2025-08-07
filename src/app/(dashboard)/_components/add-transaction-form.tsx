import { zodResolver } from '@hookform/resolvers/zod'
import dayjs from 'dayjs'
import { TrendingDownIcon, TrendingUpIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { NumericFormat } from 'react-number-format'
import { toast } from 'sonner'
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
	amount: z
		.number({ error: 'Valor é inválido' })
		.min(1, { message: 'Valor é obrigatório.' }),
	type: z.enum(['income', 'expense']),
	category: z.string().min(1, { message: 'Categoria é obrigatória.' }),
	paymentDate: z.string().min(1, { message: 'Data é obrigatória.' }),
})

type FormData = z.infer<typeof formSchema>

const initialState: FormData = {
	description: '',
	amount: 0,
	category: '',
	type: 'expense',
	paymentDate: dayjs().format('YYYY-MM-DD'),
}

export function AddTransactionForm() {
	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: initialState,
	})

	async function handleCreateTransaction(values: FormData) {
		const data = {
			description: values.description,
			category: values.category,
			type: values.type,
			amountInCents: values.amount * 100,
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

				<FormField
					control={form.control}
					name="amount"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Valor</FormLabel>
							<FormControl>
								<NumericFormat
									value={field.value}
									onValueChange={(value) => {
										field.onChange(value.floatValue)
									}}
									decimalScale={2}
									fixedDecimalScale
									decimalSeparator=","
									allowNegative={false}
									allowLeadingZeros={false}
									thousandSeparator="."
									customInput={Input}
									prefix="R$"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* <div className="grid gap-2">
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
				</div> */}

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
