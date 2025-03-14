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

const Cart = () => {
    const { products, total, totalProducts } = useCart();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    className="relative cursor-pointer hover:bg-transparent"
                    variant="ghost"
                >
                    <ShoppingCart />
                    <span className="bg-destructive flex h-4 w-4 items-center justify-center rounded-full text-xs text-white">
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
                            <Button>Checkout</Button>
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
