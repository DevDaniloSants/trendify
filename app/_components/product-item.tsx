'use client';

import Image from 'next/image';
import { EyeIcon, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from '../_hooks/useCart';
import { useFavorite } from '../_hooks/useFavorite';
import Link from 'next/link';
import { toast } from 'sonner';
import { useUser } from '../_hooks/useUser';

export interface ProductItemProps {
    id: number;
    title: string;
    price: string;
    discountPercentage?: number;
    images: string[];
    discountedPrice?: string;
}

const ProductItem = (product: ProductItemProps) => {
    const { user } = useUser();
    const { addProductToCart } = useCart();
    const { addFavorite, favorites, removeFavorite } = useFavorite();

    const handleAddToCart = () => {
        const productCart = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.images[0],
            quantity: 1,
        };
        addProductToCart(productCart);
        toast.success('Produto adicionado ao carrinho');
    };

    const handleToggleFavorite = () => {
        if (!user) {
            toast.error(
                'Você precisa estar logado para adicionar produtos aos favoritos'
            );
            return;
        }
        const productIsAlreadyOnFavorite = favorites.some(
            (favoriteProduct) => favoriteProduct.id === product.id
        );

        if (productIsAlreadyOnFavorite) {
            removeFavorite(product.id);
            toast.success('Produto removido com sucesso');
            return;
        }
        const productFavorite = {
            id: product.id,
            title: product.title,
            price: product.price,
            images: product.images,
        };
        toast.success('Produto adicionado aos favoritos');
        addFavorite(productFavorite);
    };

    return (
        <div key={product.id} className="flex h-[400px] w-full flex-col">
            <div className="group bg-border relative w-full flex-1 overflow-hidden">
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
                    <Button
                        size="icon"
                        onClick={handleToggleFavorite}
                        className={`${
                            favorites.some(
                                (favoriteProduct) =>
                                    favoriteProduct.id === product.id
                            )
                                ? 'bg-destructive hover:bg-destructive/80'
                                : 'text-primary bg-white hover:bg-white/80'
                        } cursor-pointer rounded-full`}
                    >
                        <Heart />
                    </Button>
                    <Button
                        size="icon"
                        className="text-primary cursor-pointer rounded-full bg-white hover:bg-white/80"
                        asChild
                    >
                        <Link href={`/product/${product.id}`}>
                            <EyeIcon />
                        </Link>
                    </Button>
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

            <div className="flex h-[100px] w-full flex-col justify-between px-3 py-2">
                <h3 className="text-primary line-clamp-2 overflow-hidden font-semibold break-words uppercase">
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
