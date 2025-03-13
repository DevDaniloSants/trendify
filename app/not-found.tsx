import Link from 'next/link';

import { FileQuestion } from 'lucide-react';
import { Button } from './_components/ui/button';

export default function NotFound() {
    return (
        <div className="bg-background flex min-h-screen flex-col items-center justify-center px-6">
            <div className="mx-auto flex max-w-md flex-col items-center text-center">
                <div className="bg-muted mb-8 flex h-20 w-20 items-center justify-center rounded-full">
                    <FileQuestion className="text-muted-foreground h-10 w-10" />
                </div>
                <h1 className="mb-2 text-4xl font-bold tracking-tight">404</h1>
                <h2 className="mb-4 text-2xl font-semibold">
                    Página no encontrada
                </h2>
                <p className="text-muted-foreground mb-8">
                    A Trendify lamenta, mas não encontramos a página que você
                    está procurando.
                </p>
                <Button asChild>
                    <Link href="/">Voltar para o início</Link>
                </Button>
            </div>
        </div>
    );
}
