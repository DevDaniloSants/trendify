import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import './globals.css';
import Navbar from './_components/navbar';

const mulish = Mulish({
    subsets: ['latin-ext'],
});

export const metadata: Metadata = {
    title: 'Trendify',
    description: 'O e-commerce número 1 do Brasil',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-Br">
            <body className={`${mulish.className} antialiased`}>
                <Navbar />
                <main className="mt-22 flex h-full w-dvw justify-center md:mt-30">
                    {children}
                </main>
            </body>
        </html>
    );
}
