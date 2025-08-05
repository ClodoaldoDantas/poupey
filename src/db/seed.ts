import 'dotenv/config'
import dayjs from 'dayjs'
import { drizzle } from 'drizzle-orm/libsql'
import { transactionsTable } from './schema'

async function main() {
	const db = drizzle({
		connection: {
			url: process.env.DB_FILE_NAME as string,
		},
	})

	await db.insert(transactionsTable).values([
		// Agosto 2025
		{
			description: 'Salário',
			amountInCents: 500000,
			type: 'income',
			category: 'work',
			paymentDate: dayjs('2025-08-01').toISOString(),
		},
		{
			description: 'Supermercado',
			amountInCents: 12000,
			type: 'expense',
			category: 'food',
			paymentDate: dayjs('2025-08-03').toISOString(),
		},
		{
			description: 'Academia',
			amountInCents: 9000,
			type: 'expense',
			category: 'health',
			paymentDate: dayjs('2025-08-05').toISOString(),
		},
		{
			description: 'Curso online',
			amountInCents: 25000,
			type: 'expense',
			category: 'education',
			paymentDate: dayjs('2025-08-10').toISOString(),
		},
		{
			description: 'Cinema',
			amountInCents: 4000,
			type: 'expense',
			category: 'leisure',
			paymentDate: dayjs('2025-08-15').toISOString(),
		},

		// Julho 2025
		{
			description: 'Salário',
			amountInCents: 500000,
			type: 'income',
			category: 'work',
			paymentDate: dayjs('2025-07-01').toISOString(),
		},
		{
			description: 'Restaurante',
			amountInCents: 35000,
			type: 'expense',
			category: 'food',
			paymentDate: dayjs('2025-07-04').toISOString(),
		},
		{
			description: 'Farmácia',
			amountInCents: 8000,
			type: 'expense',
			category: 'health',
			paymentDate: dayjs('2025-07-07').toISOString(),
		},
		{
			description: 'Investimento',
			amountInCents: 100000,
			type: 'expense',
			category: 'investments',
			paymentDate: dayjs('2025-07-12').toISOString(),
		},
		{
			description: 'Aluguel',
			amountInCents: 120000,
			type: 'expense',
			category: 'home',
			paymentDate: dayjs('2025-07-01').toISOString(),
		},

		// Junho 2024
		{
			description: 'Salário',
			amountInCents: 480000,
			type: 'income',
			category: 'work',
			paymentDate: dayjs('2024-06-01').toISOString(),
		},
		{
			description: 'Padaria',
			amountInCents: 7000,
			type: 'expense',
			category: 'food',
			paymentDate: dayjs('2024-06-03').toISOString(),
		},
		{
			description: 'Consulta médica',
			amountInCents: 15000,
			type: 'expense',
			category: 'health',
			paymentDate: dayjs('2024-06-08').toISOString(),
		},
		{
			description: 'Livros',
			amountInCents: 20000,
			type: 'expense',
			category: 'education',
			paymentDate: dayjs('2024-06-15').toISOString(),
		},
		{
			description: 'Netflix',
			amountInCents: 3900,
			type: 'expense',
			category: 'leisure',
			paymentDate: dayjs('2024-06-20').toISOString(),
		},

		// Maio 2024
		{
			description: 'Salário',
			amountInCents: 480000,
			type: 'income',
			category: 'work',
			paymentDate: dayjs('2024-05-01').toISOString(),
		},
		{
			description: 'Mercado',
			amountInCents: 15000,
			type: 'expense',
			category: 'food',
			paymentDate: dayjs('2024-05-05').toISOString(),
		},
		{
			description: 'Plano de saúde',
			amountInCents: 30000,
			type: 'expense',
			category: 'health',
			paymentDate: dayjs('2024-05-10').toISOString(),
		},
		{
			description: 'Curso de idiomas',
			amountInCents: 40000,
			type: 'expense',
			category: 'education',
			paymentDate: dayjs('2024-05-18').toISOString(),
		},
		{
			description: 'Viagem',
			amountInCents: 80000,
			type: 'expense',
			category: 'leisure',
			paymentDate: dayjs('2024-05-25').toISOString(),
		},

		// Abril 2024
		{
			description: 'Salário',
			amountInCents: 480000,
			type: 'income',
			category: 'work',
			paymentDate: dayjs('2024-04-01').toISOString(),
		},
		{
			description: 'Supermercado',
			amountInCents: 13000,
			type: 'expense',
			category: 'food',
			paymentDate: dayjs('2024-04-04').toISOString(),
		},
		{
			description: 'Dentista',
			amountInCents: 25000,
			type: 'expense',
			category: 'health',
			paymentDate: dayjs('2024-04-09').toISOString(),
		},
		{
			description: 'Faculdade',
			amountInCents: 60000,
			type: 'expense',
			category: 'education',
			paymentDate: dayjs('2024-04-15').toISOString(),
		},
		{
			description: 'Cinema',
			amountInCents: 3500,
			type: 'expense',
			category: 'leisure',
			paymentDate: dayjs('2024-04-22').toISOString(),
		},
	])

	console.log('🌱 Database seeded successfully!')
}

main()
