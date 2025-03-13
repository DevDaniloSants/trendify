'use client';

import { CartProduct } from '../_providers/cart';
import Image from 'next/image';
import { Button } from './ui/button';
import { MinusIcon, PlusIcon, TrashIcon } from 'lucide-react';
import { useCart } from '../_hooks/useCart';

interface CartItemProps {
    product: CartProduct;
}

const CartItem = ({ product }: CartItemProps) => {
    const {
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProductFromCart,
    } = useCart();

    const handleDecreaseQuantity = () => {
        decreaseProductQuantity(product.id);
    };

    const handleIncreaseQuantity = () => {
        increaseProductQuantity(product.id);
    };

    const handleRemoveProductFromCart = () => {
        removeProductFromCart(product.id);
    };

    return (
        <div className="flex w-full items-center justify-between">
            <div className="flex w-full items-center gap-2">
                <div className="h-[80px] min-w-[80px] overflow-hidden rounded-lg">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-full w-full object-contain"
                    />
                </div>
                <div className="flex w-full flex-col">
                    <p className="w-full truncate text-xs">{product.title}</p>

                    <p className="text-sm font-bold">{product.price}</p>

                    <div className="mt-2 flex h-8 items-center gap-4">
                        <Button
                            onClick={handleDecreaseQuantity}
                            className="border-border text-primary h-6 w-6 cursor-pointer rounded-full border border-solid bg-transparent hover:bg-transparent"
                        >
                            <MinusIcon />
                        </Button>
                        <span>{product.quantity}</span>
                        <Button
                            onClick={handleIncreaseQuantity}
                            className="border-border text-primary h-6 w-6 cursor-pointer rounded-full border border-solid bg-transparent hover:bg-transparent"
                        >
                            <PlusIcon />
                        </Button>
                    </div>
                </div>
                <Button
                    size={'icon'}
                    className="text-primary cursor-pointer bg-transparent hover:bg-transparent"
                    onClick={handleRemoveProductFromCart}
                >
                    <TrashIcon />
                </Button>
            </div>
            <div></div>
        </div>
    );
};

export default CartItem;
