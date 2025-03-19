import { createContext, ReactNode, useEffect, useState } from 'react';

interface FavoriteProduct {
    id: number;
    title: string;
    price: string;
    image: string;
}

interface IFavoriteContext {
    favorite: FavoriteProduct[];
    addFavorite: (product: FavoriteProduct) => void;
    removeFavorite: (productId: number) => void;
}

export const FavoriteContext = createContext<IFavoriteContext>({
    favorite: [],
    addFavorite: () => {},
    removeFavorite: () => {},
});

const FavoriteProvider = ({ children }: { children: ReactNode }) => {
    const [favorite, setFavorite] = useState<FavoriteProduct[]>(
        JSON.parse(localStorage.getItem('@favorite') || '[]')
    );

    useEffect(() => {
        localStorage.setItem('@favorite', JSON.stringify(favorite));
    }, [favorite]);

    const addFavorite = (product: FavoriteProduct) => {
        const productIsAlreadyOnFavorite = favorite.some(
            (favoriteProduct) => favoriteProduct.id === product.id
        );

        if (productIsAlreadyOnFavorite) return;

        setFavorite((prev) => [...prev, product]);
    };

    return (
        <FavoriteContext.Provider
            value={{
                favorite,
                addFavorite,
                removeFavorite: () => {},
            }}
        >
            {children}
        </FavoriteContext.Provider>
    );
};

export default FavoriteProvider;
