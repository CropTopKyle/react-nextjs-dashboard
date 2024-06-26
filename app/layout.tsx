import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/providers/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'React NextJS Dashboard Application',
	description: 'A project to learn components!',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head />
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='light'
					storageKey='dashboard'
					enableSystem={true}
					disableTransitionOnChange>
					{children}
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}
