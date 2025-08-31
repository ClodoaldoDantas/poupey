import 'dotenv/config'

import { createClient } from '@libsql/client'
import { createId } from '@paralleldrive/cuid2'
import bcrypt from 'bcryptjs'
import dayjs from 'dayjs'
import { drizzle } from 'drizzle-orm/libsql'
import { categoriesTable, transactionsTable, usersTable } from './schema'

const client = createClient({
	url: process.env.TURSO_CONNECTION_URL!,
	authToken: process.env.TURSO_AUTH_TOKEN!,
})

const db = drizzle(client)

async function main() {
	console.log('🌱 Iniciando seed do banco de dados...')

	// Clear data
	await db.delete(transactionsTable)
	await db.delete(categoriesTable)
	await db.delete(usersTable)

	// Create admin user
	const userId = createId()
	await db.insert(usersTable).values({
		id: userId,
		username: 'admin',
		passwordHash: await bcrypt.hash('admin123', 10),
		imageUrl: 'https://github.com/shadcn.png',
	})

	console.log('✅ Usuário criado com sucesso!')

	// Create categories
	const categoryEntries = [
		{ key: 'food', name: 'Alimentação' },
		{ key: 'health', name: 'Saúde' },
		{ key: 'education', name: 'Educação' },
		{ key: 'home', name: 'Casa' },
		{ key: 'leisure', name: 'Lazer' },
		{ key: 'investments', name: 'Investimentos' },
		{ key: 'work', name: 'Trabalho' },
		{ key: 'shopping', name: 'Compras' },
		{ key: 'transport', name: 'Transporte' },
		{ key: 'others', name: 'Outros' },
	].map((category) => ({
		id: createId(),
		name: category.name,
		userId,
		key: category.key, // Vamos usar isso para mapear depois
	}))

	await db
		.insert(categoriesTable)
		.values(categoryEntries.map(({ key, ...category }) => category))

	console.log('✅ Categorias criadas com sucesso!')

	// Create category map for easy reference
	const categoryMap = categoryEntries.reduce(
		(acc, category) => {
			acc[category.key] = category.id
			return acc
		},
		{} as Record<string, string>,
	)

	// Create 20 transactions
	const transactions = [
		{
			description: 'Salário',
			amountInCents: 450000, // R$ 4.500,00
			type: 'income' as const,
			categoryId: categoryMap.work,
			paymentDate: dayjs('2024-08-01').toISOString(),
			userId,
		},
		{
			description: 'Freelance',
			amountInCents: 120000, // R$ 1.200,00
			type: 'income' as const,
			categoryId: categoryMap.work,
			paymentDate: dayjs('2024-08-15').toISOString(),
			userId,
		},
		{
			description: 'Rendimento Investimentos',
			amountInCents: 25000, // R$ 250,00
			type: 'income' as const,
			categoryId: categoryMap.investments,
			paymentDate: dayjs('2024-08-30').toISOString(),
			userId,
		},
		{
			description: 'Supermercado',
			amountInCents: 45000, // R$ 450,00
			type: 'expense' as const,
			categoryId: categoryMap.food,
			paymentDate: dayjs('2024-08-02').toISOString(),
			userId,
		},
		{
			description: 'Restaurante',
			amountInCents: 8500, // R$ 85,00
			type: 'expense' as const,
			categoryId: categoryMap.food,
			paymentDate: dayjs('2024-08-05').toISOString(),
			userId,
		},
		{
			description: 'Lanche',
			amountInCents: 1200, // R$ 12,00
			type: 'expense' as const,
			categoryId: categoryMap.food,
			paymentDate: dayjs('2024-08-10').toISOString(),
			userId,
		},
		{
			description: 'Aluguel',
			amountInCents: 120000, // R$ 1.200,00
			type: 'expense' as const,
			categoryId: categoryMap.home,
			paymentDate: dayjs('2024-08-01').toISOString(),
			userId,
		},
		{
			description: 'Energia Elétrica',
			amountInCents: 15000, // R$ 150,00
			type: 'expense' as const,
			categoryId: categoryMap.home,
			paymentDate: dayjs('2024-08-08').toISOString(),
			userId,
		},
		{
			description: 'Internet',
			amountInCents: 8000, // R$ 80,00
			type: 'expense' as const,
			categoryId: categoryMap.home,
			paymentDate: dayjs('2024-08-12').toISOString(),
			userId,
		},
		{
			description: 'Combustível',
			amountInCents: 25000, // R$ 250,00
			type: 'expense' as const,
			categoryId: categoryMap.transport,
			paymentDate: dayjs('2024-08-03').toISOString(),
			userId,
		},
		{
			description: 'Uber',
			amountInCents: 3500, // R$ 35,00
			type: 'expense' as const,
			categoryId: categoryMap.transport,
			paymentDate: dayjs('2024-08-07').toISOString(),
			userId,
		},
		{
			description: 'Plano de Saúde',
			amountInCents: 35000, // R$ 350,00
			type: 'expense' as const,
			categoryId: categoryMap.health,
			paymentDate: dayjs('2024-08-01').toISOString(),
			userId,
		},
		{
			description: 'Farmácia',
			amountInCents: 4500, // R$ 45,00
			type: 'expense' as const,
			categoryId: categoryMap.health,
			paymentDate: dayjs('2024-08-14').toISOString(),
			userId,
		},
		{
			description: 'Cinema',
			amountInCents: 3000, // R$ 30,00
			type: 'expense' as const,
			categoryId: categoryMap.leisure,
			paymentDate: dayjs('2024-08-09').toISOString(),
			userId,
		},
		{
			description: 'Streaming Netflix',
			amountInCents: 2500, // R$ 25,00
			type: 'expense' as const,
			categoryId: categoryMap.leisure,
			paymentDate: dayjs('2024-08-15').toISOString(),
			userId,
		},
		{
			description: 'Curso Online',
			amountInCents: 15000, // R$ 150,00
			type: 'expense' as const,
			categoryId: categoryMap.education,
			paymentDate: dayjs('2024-08-06').toISOString(),
			userId,
		},
		{
			description: 'Livros',
			amountInCents: 8000, // R$ 80,00
			type: 'expense' as const,
			categoryId: categoryMap.education,
			paymentDate: dayjs('2024-08-20').toISOString(),
			userId,
		},
		{
			description: 'Roupas',
			amountInCents: 12000, // R$ 120,00
			type: 'expense' as const,
			categoryId: categoryMap.shopping,
			paymentDate: dayjs('2024-08-11').toISOString(),
			userId,
		},
		{
			description: 'Material de Escritório',
			amountInCents: 5000, // R$ 50,00
			type: 'expense' as const,
			categoryId: categoryMap.work,
			paymentDate: dayjs('2024-08-13').toISOString(),
			userId,
		},
		{
			description: 'Presente Aniversário',
			amountInCents: 6000, // R$ 60,00
			type: 'expense' as const,
			categoryId: categoryMap.others,
			paymentDate: dayjs('2024-08-18').toISOString(),
			userId,
		},
	]

	await db.insert(transactionsTable).values(transactions)

	console.log('✅ 20 transações criadas com sucesso!')
	console.log('🎉 Seed concluído!')
}

// Run seed
main()
	.then(() => {
		console.log('✅ Seed executed successfully!')
		process.exit(0)
	})
	.catch((error) => {
		console.error('❌ Error executing seed:', error)
		process.exit(1)
	})
