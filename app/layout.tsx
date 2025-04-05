import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import './globals.css';
import Navbar from './_components/navbar';
import { AppProvider } from './_providers/app-provider';
import { Toaster } from './_components/ui/sonner';
import Footer from './_components/footer';

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
            <body
                className={`${mulish.className} flex min-h-screen flex-col antialiased`}
            >
                <AppProvider>
                    <Navbar />
                    <main className="flex grow justify-center pt-22 md:pt-30">
                        {children}
                    </main>
                    <Footer />
                    <Toaster />
                </AppProvider>
            </body>
        </html>
    );
}
