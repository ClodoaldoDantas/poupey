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
		{
			description: 'Salário',
			amountInCents: 500000,
			type: 'income',
			category: 'work',
			paymentDate: dayjs('2025-08-01').toISOString(),
		},
		{
			description: 'Compra no supermercado',
			amountInCents: 12000,
			type: 'expense',
			category: 'food',
			paymentDate: dayjs('2024-07-15').toISOString(),
		},
		{
			description: 'Consulta médica',
			amountInCents: 8000,
			type: 'expense',
			category: 'health',
			paymentDate: dayjs('2025-03-10').toISOString(),
		},
		{
			description: 'Mensalidade faculdade',
			amountInCents: 35000,
			type: 'expense',
			category: 'education',
			paymentDate: dayjs('2024-09-05').toISOString(),
		},
		{
			description: 'Aluguel',
			amountInCents: 120000,
			type: 'expense',
			category: 'home',
			paymentDate: dayjs('2025-01-01').toISOString(),
		},
		{
			description: 'Cinema',
			amountInCents: 4000,
			type: 'expense',
			category: 'leisure',
			paymentDate: dayjs('2024-10-20').toISOString(),
		},
		{
			description: 'Investimento em ações',
			amountInCents: 50000,
			type: 'expense',
			category: 'investments',
			paymentDate: dayjs('2025-06-12').toISOString(),
		},
		{
			description: 'Freelance',
			amountInCents: 80000,
			type: 'income',
			category: 'work',
			paymentDate: dayjs('2024-12-18').toISOString(),
		},
		{
			description: 'Restaurante',
			amountInCents: 25000,
			type: 'expense',
			category: 'food',
			paymentDate: dayjs('2025-02-14').toISOString(),
		},
		{
			description: 'Farmácia',
			amountInCents: 9000,
			type: 'expense',
			category: 'health',
			paymentDate: dayjs('2024-08-22').toISOString(),
		},
		{
			description: 'Curso online',
			amountInCents: 15000,
			type: 'expense',
			category: 'education',
			paymentDate: dayjs('2025-04-03').toISOString(),
		},
		{
			description: 'Conserto da geladeira',
			amountInCents: 30000,
			type: 'expense',
			category: 'home',
			paymentDate: dayjs('2024-11-11').toISOString(),
		},
		{
			description: 'Viagem',
			amountInCents: 100000,
			type: 'expense',
			category: 'leisure',
			paymentDate: dayjs('2025-07-07').toISOString(),
		},
		{
			description: 'Rendimento poupança',
			amountInCents: 7000,
			type: 'income',
			category: 'investments',
			paymentDate: dayjs('2024-06-30').toISOString(),
		},
		{
			description: 'Venda de bicicleta',
			amountInCents: 40000,
			type: 'income',
			category: 'others',
			paymentDate: dayjs('2025-05-19').toISOString(),
		},
		{
			description: 'Padaria',
			amountInCents: 3500,
			type: 'expense',
			category: 'food',
			paymentDate: dayjs('2024-09-28').toISOString(),
		},
		{
			description: 'Plano de saúde',
			amountInCents: 25000,
			type: 'expense',
			category: 'health',
			paymentDate: dayjs('2025-03-25').toISOString(),
		},
		{
			description: 'Material escolar',
			amountInCents: 8000,
			type: 'expense',
			category: 'education',
			paymentDate: dayjs('2024-08-05').toISOString(),
		},
		{
			description: 'Conta de luz',
			amountInCents: 18000,
			type: 'expense',
			category: 'home',
			paymentDate: dayjs('2025-01-20').toISOString(),
		},
		{
			description: 'Show musical',
			amountInCents: 6000,
			type: 'expense',
			category: 'leisure',
			paymentDate: dayjs('2024-12-02').toISOString(),
		},
		{
			description: 'Dividendos',
			amountInCents: 12000,
			type: 'income',
			category: 'investments',
			paymentDate: dayjs('2025-06-01').toISOString(),
		},
	])

	console.log('🌱 Database seeded successfully!')
}

main()
