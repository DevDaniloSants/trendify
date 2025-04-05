'use client';

import Container from '@/app/_components/container';
import { Button } from '@/app/_components/ui/button';
import { useCart } from '@/app/_hooks/useCart';
import { CircleCheck, CircleX } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const PaymentConfirmation = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get('success');

    const { removeAllProducts, products } = useCart();

    useEffect(() => {
        if (search === 'true' && products.length > 0) {
            removeAllProducts();
        }
    }, [search, removeAllProducts, products]);

    const handleRedirectHome = () => {
        window.location.href = '/';
    };

    return (
        <Container>
            <div className="flex h-[600px] flex-col items-center justify-center gap-4 text-center">
                {search === 'true' ? (
                    <>
                        <CircleCheck size={100} className="text-green-500" />
                        <div className="text-center">
                            <h2 className="text-secondary-foreground text-xl font-bold">
                                Compra realizada com sucesso!
                            </h2>
                            <p className="text-secondary-foreground text-sm">
                                Obrigado pela sua compra. Seu pedido foi
                                realizado com sucesso. Aguarde o seu produto
                                chegar em sua casa.
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <CircleX size={100} className="text-destructive" />
                        <div className="text-center">
                            <h2 className="text-secondary-foreground text-xl font-bold">
                                Compra não finalizada!
                            </h2>
                            <p className="text-secondary-foreground text-sm">
                                Ocorreu um erro ao finalizar a compra. Tente
                                novamente.
                            </p>
                        </div>
                    </>
                )}
                <Button onClick={handleRedirectHome} className="cursor-pointer">
                    Voltar para página inicial
                </Button>
            </div>
        </Container>
    );
};

export default PaymentConfirmation;
