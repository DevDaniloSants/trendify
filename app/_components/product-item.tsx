'use client';

import Image from 'next/image';
import { EyeIcon, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../_hooks/useCart';
import ProductItemButton from './product-item-button';

export interface ProductItemProps {
    id: number;
    title: string;
    price: string;
    discountPercentage?: number;
    images: string[];
    discountedPrice?: string;
}

const ProductItem = (product: ProductItemProps) => {
    const { addProductToCart } = useCart();

    const handleAddToCart = () => {
        const productCart = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.images[0],
            quantity: 1,
        };
        addProductToCart(productCart);
    };

    return (
        <div key={product.id} className="h-[350px] w-full">
            <div className="group bg-border relative h-[250px] w-full overflow-hidden">
                <Image
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    sizes="100%"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.discountPercentage &&
                    product.discountPercentage > 0 && (
                        <span className="bg-destructive absolute top-3 left-3 rounded-sm px-4 py-1 text-xs text-white">
                            - {product.discountPercentage} %
                        </span>
                    )}

                <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <ProductItemButton icon={<Heart />} />
                    <ProductItemButton
                        icon={<EyeIcon />}
                        href={`/product/${product.id}`}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <Button
                        className="hover:bg-primary absolute bottom-0 hidden w-full cursor-pointer rounded-none group-hover:block"
                        onClick={handleAddToCart}
                    >
                        Adicionar ao carrinho
                    </Button>
                </div>
            </div>
            <div className="h-full w-full space-y-2">
                <h3 className="text-primary font-semibold uppercase">
                    {product.title}
                </h3>
                {product.discountedPrice ? (
                    <div className="flex items-center gap-2">
                        <p className="text-destructive font-semibold">
                            {product.discountedPrice}
                        </p>
                        <p className="text-muted-foreground text-sm font-semibold line-through">
                            {product.price}
                        </p>
                    </div>
                ) : (
                    <p className="text-primary font-semibold">
                        {product.price}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProductItem;
