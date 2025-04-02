import { createContext, ReactNode, useLayoutEffect, useState } from 'react';
import getFavoriteProducts from '../_data-access/favorite/get-favorite-products-postgres';
import { useUser } from '../_hooks/useUser';
import RemoveFavoriteProductPostgres from '../_actions/favorite/remove-favorite-product-postgres';
import addFavoriteProduct from '../_data-access/favorite/add-favorite-product-postgres';

interface FavoriteProduct {
    id: number;
    title: string;
    price: string;
    images: string[];
}

interface IFavoriteContext {
    favorites: FavoriteProduct[];
    addFavorite: (product: FavoriteProduct) => void;
    removeFavorite: (productId: number) => void;
}

export const FavoriteContext = createContext<IFavoriteContext>({
    favorites: [],
    addFavorite: () => {},
    removeFavorite: () => {},
});

const FavoriteProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useState<FavoriteProduct[]>([]);

    const { user } = useUser();

    useLayoutEffect(() => {
        const refreshFavorites = async () => {
            if (!user) {
                setFavorites([]);
                return;
            }

            try {
                const userFavorites = await getFavoriteProducts({
                    userId: user.id,
                });
                setFavorites(userFavorites.products);
            } catch (error) {
                console.error('Error loading favorites:', error);
            }
        };

        refreshFavorites();
    }, [user]);

    const addFavorite = async (product: FavoriteProduct) => {
        if (!user) return;

        await addFavoriteProduct({
            product: {
                id: product.id,
                title: product.title,
                price: product.price,
                images: product.images,
                userId: user.id,
            },
        });

        setFavorites([...favorites, product]);
    };

    const removeFavorite = async (productId: number) => {
        const product = await RemoveFavoriteProductPostgres({
            productId,
        });

        setFavorites(
            favorites.filter((favorite) => favorite.id !== product.id)
        );
    };

    return (
        <FavoriteContext.Provider
            value={{
                favorites,
                addFavorite,
                removeFavorite,
            }}
        >
            {children}
        </FavoriteContext.Provider>
    );
};
export default FavoriteProvider;
