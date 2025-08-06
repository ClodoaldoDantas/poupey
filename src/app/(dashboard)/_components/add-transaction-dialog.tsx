'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import dayjs from 'dayjs'
import { TrendingDownIcon, TrendingUpIcon, Wallet2Icon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { categories } from '@/components/category'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
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

export function AddTransactionDialog() {
	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: initialState,
	})

	async function handleCreateTransaction(values: FormData) {
		const data = {
			description: values.description,
			category: values.category,
			type: values.type,
			amountInCents: Number(values.amount) * 100,
			paymentDate: dayjs(values.paymentDate).toISOString(),
		}

		const result = await createTransaction(data)

		if (result.success) {
			toast.success(result.message)
			form.reset(initialState)
		} else {
			toast.error(result.message)
		}
	}

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="outline"
					size="lg"
					className="text-base cursor-pointer"
				>
					<Wallet2Icon className="size-5" />
					Adicionar Transação
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Nova Transação</DialogTitle>
					<DialogDescription>
						Adicione uma nova transação à sua conta.
					</DialogDescription>
				</DialogHeader>

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
										<Input type="number" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

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
														{Icon && (
															<Icon className="size-5 text-foreground" />
														)}
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
			</DialogContent>
		</Dialog>
	)
}
