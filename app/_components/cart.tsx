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
    const { products, total } = useCart();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="cursor-pointer" variant="ghost">
                    <ShoppingCart />
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
            </SheetContent>
        </Sheet>
    );
};

export default Cart;
