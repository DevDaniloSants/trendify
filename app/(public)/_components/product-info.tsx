'use client';

import { Button } from '@/app/_components/ui/button';
import { GetProducDTO } from '@/app/_data-access/interfaces/product';
import { useCart } from '@/app/_hooks/useCart';
import { useFavorite } from '@/app/_hooks/useFavorite';
import { useUser } from '@/app/_hooks/useUser';
import {
    HeartIcon,
    MinusIcon,
    PlusIcon,
    RefreshCcw,
    TruckIcon,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'sonner';

export interface ProductInfo {
    product: GetProducDTO;
}

const ProductInfo = ({ product }: ProductInfo) => {
    const [quantity, setQuantity] = useState<number>(1);
    const { user } = useUser();
    const { addProductToCart } = useCart();
    const { favorites, addFavorite, removeFavorite } = useFavorite();

    const handleDecreaseQuantity = () => {
        setQuantity((prev) => (prev === 1 ? prev : prev - 1));
    };

    const handleIncreaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleAddToCart = () => {
        const productCart = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.images[0],
            quantity,
        };
        addProductToCart(productCart);
    };

    const handleToggleFavorite = async () => {
        if (!user) {
            toast.error(
                'Você precisa estar logado para adicionar produtos aos favoritos'
            );
            return;
        }
        const productIsAlreadyOnFavorite = favorites.some(
            (favorite) => favorite.id === product.id
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
            userId: user.id,
        };

        addFavorite(productFavorite);
        toast.success('Produto adicionado aos favoritos');
    };

    return (
        <div className="w-full">
            <h1 className="text-2xl lg:text-3xl">{product.title}</h1>
            <div className="mb-4 space-x-2">
                <span className="text-muted-foreground text-sm">
                    Vendido e entregue por
                </span>
                <Link href="/" className="cursor-pointer font-semibold">
                    Trendify
                </Link>
            </div>
            <hr />
            <h2 className="my-6 text-5xl font-bold">{product.price}</h2>
            <hr />
            <p className="my-4">{product.description}</p>
            <hr />
            <div className="my-4 flex items-center gap-2">
                <p className="text-2xl font-light">Cores:</p>
                <Button className="h-5 w-5 cursor-pointer rounded-full p-0" />
                <Button className="h-5 w-5 cursor-pointer rounded-full bg-red-700 p-0 hover:bg-red-800" />
                <Button className="h-5 w-5 cursor-pointer rounded-full bg-gray-400 p-0 hover:bg-gray-500" />
                <Button className="h-5 w-5 cursor-pointer rounded-full bg-amber-800 p-0 hover:bg-amber-900" />
            </div>
            <div className="my-4 flex flex-wrap items-center gap-2">
                <p className="text-2xl font-light">Tamanhos:</p>
                <div className="flex flex-wrap items-center gap-2">
                    <Button variant={'outline'} className="h-10 w-10">
                        XS
                    </Button>
                    <Button variant={'outline'} className="h-10 w-10">
                        S
                    </Button>
                    <Button variant={'outline'} className="h-10 w-10">
                        M
                    </Button>
                    <Button variant={'outline'} className="h-10 w-10">
                        L
                    </Button>
                    <Button variant={'outline'} className="h-10 w-10">
                        XL
                    </Button>
                </div>
            </div>
            <hr />

            <div className="mt-6 flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
                <div className="border-border flex h-14 w-full items-center justify-between gap-4 overflow-hidden rounded-sm border-1 border-solid md:w-[180px]">
                    <Button
                        onClick={handleDecreaseQuantity}
                        className="border-border text-primary h-full cursor-pointer rounded-xs border-r-1 bg-transparent hover:bg-transparent"
                        disabled={quantity === 1}
                    >
                        <MinusIcon />
                    </Button>
                    <span>{quantity}</span>
                    <Button
                        onClick={handleIncreaseQuantity}
                        variant={'destructive'}
                        className="h-full cursor-pointer rounded-xs"
                    >
                        <PlusIcon />
                    </Button>
                </div>
                <div className="flex w-full items-center justify-between gap-2 md:w-auto">
                    <Button
                        variant={'destructive'}
                        className="h-14 w-2/3 cursor-pointer lg:w-auto"
                        onClick={handleAddToCart}
                    >
                        Adicionar ao Carrinho
                    </Button>
                    <Button
                        variant="outline"
                        className={`h-14 w-14 cursor-pointer ${
                            favorites.some(
                                (favoriteProduct) =>
                                    favoriteProduct.id === product.id
                            )
                                ? 'bg-destructive hover:bg-destructive/80 text-white hover:text-white'
                                : 'text-primary bg-white hover:bg-white/80'
                        }`}
                        onClick={handleToggleFavorite}
                    >
                        <HeartIcon size={20} />
                    </Button>
                </div>
            </div>

            <div className="mt-10 flex w-full justify-center lg:justify-end">
                <div className="border-primary w-[420px] rounded-md border-1 border-solid">
                    <div className="border-primary border-slid flex items-center gap-6 border-b-1 p-6">
                        <TruckIcon size={40} />
                        <div className="flex flex-col">
                            <h4 className="font-bold">Frete Grátis</h4>
                            <p className="text-sm underline">
                                Digite o seu cep para calcular o frente.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 p-6">
                        <RefreshCcw size={40} />
                        <div className="flex flex-col">
                            <h4 className="font-bold">Frete Grátis</h4>
                            <p className="text-sm underline">
                                Digite o seu cep para calcular o frente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
