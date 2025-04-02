'use client';

import Container from '@/app/_components/container';
import ProductItem from '@/app/_components/product-item';
import { SectionHeader, SectionTitle } from '@/app/_components/section-header';
import getFavoriteProducts from '@/app/_data-access/favorite/get-favorite-products-postgres';
import { IFavorite } from '@/app/_data-access/interfaces/favorite';
import { useUser } from '@/app/_hooks/useUser';

import { useEffect, useState } from 'react';

const FavoritePage = () => {
    const [favorites, setFavorites] = useState<IFavorite[]>([]);
    const [loading, setLoading] = useState(true);
    const { user } = useUser();

    useEffect(() => {
        if (user) {
            const loadFavorites = async () => {
                setLoading(true);
                const { products } = await getFavoriteProducts({
                    userId: user.id,
                });
                setFavorites(products);
                setLoading(false);
            };

            loadFavorites();
        }
    }, [user]);

    return (
        <Container className="min-h-screen p-2">
            <SectionHeader>
                <SectionTitle>Meus produtos favoritos</SectionTitle>
            </SectionHeader>
            {loading ? (
                <div>Carregando...</div>
            ) : (
                <div className="grid w-full gap-4 overflow-hidden md:grid-cols-2 lg:grid-cols-4">
                    {favorites.map((product) => (
                        <ProductItem key={product.id} {...product} />
                    ))}
                    {favorites.length === 0 && (
                        <div className="col-span-full text-center">
                            <p className="font-semibold">
                                Você ainda não tem produtos favoritos
                            </p>
                        </div>
                    )}
                </div>
            )}
        </Container>
    );
};

export default FavoritePage;
