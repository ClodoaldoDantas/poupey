'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { WalletIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
	email: z.email('E-mail inválido'),
	password: z
		.string()
		.min(6, { message: 'Senha deve ter pelo menos 6 caracteres.' }),
})

type FormData = z.infer<typeof formSchema>

export function SignInForm() {
	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	function handleSignIn(values: FormData) {
		console.log(values)
	}

	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle className="flex items-center gap-2 text-teal-700">
					<WalletIcon className="size-5" />
					Poupey
				</CardTitle>

				<CardDescription>
					Entre na sua conta para acessar seus dados financeiros.
				</CardDescription>
			</CardHeader>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(handleSignIn)}>
					<CardContent className="space-y-4">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>E-mail</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Senha</FormLabel>
									<FormControl>
										<Input type="password" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</CardContent>
					<CardFooter className="mt-6">
						<Button type="submit" className="w-full">
							Entrar
						</Button>
					</CardFooter>
				</form>
			</Form>
		</Card>
	)
}
