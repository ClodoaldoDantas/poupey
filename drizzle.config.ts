import 'dotenv/config'
import { defineConfig } from 'drizzle-kit'

console.log(process.env.DB_FILE_NAME, 'drizzle.config.ts')

export default defineConfig({
	out: './src/db/migrations',
	schema: './src/db/schema.ts',
	dialect: 'sqlite',
	dbCredentials: {
		url: process.env.DB_FILE_NAME as string,
	},
})
