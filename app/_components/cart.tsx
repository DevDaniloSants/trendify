'use client';

import { ShoppingCart } from 'lucide-react';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from './ui/sheet';
import { Button } from './ui/button';
import { useCart } from '../_hooks/useCart';
import CartItem from './cart-item';
import { formatCurrency } from '../_helpers/formatCurrency';
import { useUser } from '../_hooks/useUser';
import { useRouter } from 'next/navigation';
import { createStripeCheckout } from '../_actions/stripe/create-stripe-checkout';
import { loadStripe } from '@stripe/stripe-js';

const Cart = () => {
    const { products, total, totalProducts } = useCart();
    const { user } = useUser();
    const router = useRouter();

    const handleFinishOrder = async () => {
        if (!user) return router.push('/sign-in');

        const { sessionId } = await createStripeCheckout({ products });

        const stripe = await loadStripe(
            process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
        );

        await stripe?.redirectToCheckout({ sessionId });
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    className="relative cursor-pointer hover:bg-transparent"
                    variant="ghost"
                >
                    <ShoppingCart />
                    <span className="bg-destructive absolute right-1 -bottom-1 flex h-4 w-4 items-center justify-center rounded-full text-xs text-white">
                        {totalProducts}
                    </span>
                </Button>
            </SheetTrigger>
            <SheetContent className="p-2">
                <SheetHeader>
                    <SheetTitle>
                        <div className="flex items-center gap-2">
                            <ShoppingCart size={16} /> Trendify
                        </div>
                    </SheetTitle>
                    <SheetDescription />
                </SheetHeader>
                {products.length > 0 ? (
                    <>
                        <div className="space-y-3 overflow-y-auto">
                            {products.map((product) => (
                                <CartItem key={product.id} product={product} />
                            ))}
                        </div>
                        <SheetFooter>
                            <div className="w-full">
                                <div className="flex w-full items-center justify-between">
                                    <span className="text-lg font-semibold">
                                        Total:
                                    </span>
                                    <p>{formatCurrency(total)}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-semibold">
                                        Entrega:
                                    </span>
                                    <p>GRÁTIS</p>
                                </div>
                            </div>
                            <Button
                                onClick={handleFinishOrder}
                                className="cursor-pointer"
                            >
                                Finalizar compra
                            </Button>
                        </SheetFooter>
                    </>
                ) : (
                    <div className="flex h-full items-center justify-center">
                        <div className="flex flex-col items-center gap-4">
                            <p className="text-center font-semibold">
                                Seu carrinho está vazio
                            </p>
                            <div className="relative">
                                <ShoppingCart
                                    size={40}
                                    className="text-muted-foreground"
                                />
                                <span className="bg-destructive absolute -right-3 -bottom-1 h-5 w-5 rounded-full text-center text-sm text-white">
                                    0
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default Cart;
