import { createContext, ReactNode, useEffect, useState } from 'react';

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
    const [favorites, setFavorites] = useState<FavoriteProduct[]>(
        JSON.parse(localStorage.getItem('@favorite') || '[]')
    );

    useEffect(() => {
        localStorage.setItem('@favorite', JSON.stringify(favorites));
    }, [favorites]);

    const addFavorite = (product: FavoriteProduct) => {
        const productIsAlreadyOnFavorite = favorites.some(
            (favoriteProduct) => favoriteProduct.id === product.id
        );

        if (productIsAlreadyOnFavorite) return;

        setFavorites((prev) => [...prev, product]);
    };

    const removeFavorite = (productId: number) => {
        const newFavorite = favorites.filter(
            (product) => product.id !== productId
        );
        setFavorites(newFavorite);
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
