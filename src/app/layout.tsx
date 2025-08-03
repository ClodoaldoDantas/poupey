import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({
	variable: '--font-rubik',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Poupey',
	description:
		'Poupey é o app divertido e fácil para controlar suas finanças pessoais.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${rubik.variable} antialiased`}>{children}</body>
		</html>
	);
}
