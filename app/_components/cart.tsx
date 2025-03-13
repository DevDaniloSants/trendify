'use client';

import { ShoppingCart } from 'lucide-react';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from './ui/sheet';
import { Button } from './ui/button';
import { useCart } from '../_hooks/useCart';
import CartItem from './cart-item';

const Cart = () => {
    const { products } = useCart();
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
                    <SheetDescription>2 items</SheetDescription>
                </SheetHeader>
                <div className="space-y-3">
                    {products.map((product) => (
                        <CartItem key={product.id} product={product} />
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default Cart;
