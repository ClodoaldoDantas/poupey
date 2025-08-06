import type { Metadata } from 'next'
import { Sora } from 'next/font/google'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const sora = Sora({
	variable: '--font-sora',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
	title: 'Poupey',
	description:
		'Poupey é o app divertido e fácil para controlar suas finanças pessoais.',
	robots: {
		index: false,
		follow: false,
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${sora.variable} antialiased bg-zinc-50 font-sans`}>
				<NuqsAdapter>{children}</NuqsAdapter>
				<Toaster richColors position="bottom-center" />
			</body>
		</html>
	)
}
