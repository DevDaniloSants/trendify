'use client';

import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { convertPriceToNumber } from '../_helpers/price';

export interface CartProduct {
    id: number;
    title: string;
    image: string;
    price: string;
    quantity: number;
}

interface ICartContext {
    products: CartProduct[];
    cartTotalPrice: number;
    cartBasePrice: number;
    addProductToCart: (product: CartProduct) => void;
    decreaseProductQuantity: (productId: number) => void;
    increaseProductQuantity: (productId: number) => void;
    removeProductFromCart: (productId: number) => void;
    total: number;
    totalProducts: number;
}

export const CartContext = createContext<ICartContext>({
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0,
    addProductToCart: () => {},
    decreaseProductQuantity: () => {},
    increaseProductQuantity: () => {},
    removeProductFromCart: () => {},
    total: 0,
    totalProducts: 0,
});

const CartProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<CartProduct[]>(
        JSON.parse(localStorage.getItem('@cart') || '[]')
    );

    useEffect(() => {
        localStorage.setItem('@cart', JSON.stringify(products));
    }, [products]);

    const total = useMemo(() => {
        return products.reduce((acc, product) => {
            return acc + convertPriceToNumber(product.price) * product.quantity;
        }, 0);
    }, [products]);

    const totalProducts = useMemo(() => {
        return products.reduce((acc, product) => {
            return acc + product.quantity;
        }, 0);
    }, [products]);

    const addProductToCart = (product: CartProduct) => {
        const productIsAlreadyOnCart = products.some(
            (cartProduct) => cartProduct.id === product.id
        );

        if (productIsAlreadyOnCart) {
            setProducts((prev) =>
                prev.map((cartProduct) => {
                    if (cartProduct.id === product.id) {
                        return {
                            ...cartProduct,
                            quantity: cartProduct.quantity + product.quantity,
                        };
                    }
                    return cartProduct;
                })
            );

            return;
        }

        setProducts((prev) => [...prev, product]);
    };

    const decreaseProductQuantity = (productId: number) => {
        setProducts((prev) =>
            prev
                .map((cartProduct) => {
                    if (cartProduct.id === productId) {
                        return {
                            ...cartProduct,
                            quantity: cartProduct.quantity - 1,
                        };
                    }
                    return cartProduct;
                })
                .filter((cartProduct) => cartProduct.quantity > 0)
        );
    };

    const increaseProductQuantity = (productId: number) => {
        setProducts((prev) =>
            prev.map((cartProduct) => {
                if (cartProduct.id === productId) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + 1,
                    };
                }
                return cartProduct;
            })
        );
    };

    const removeProductFromCart = (productId: number) => {
        setProducts((prev) =>
            prev.filter((cartProduct) => cartProduct.id !== productId)
        );
    };

    return (
        <CartContext.Provider
            value={{
                products,
                cartTotalPrice: 0,
                cartBasePrice: 0,
                addProductToCart,
                decreaseProductQuantity,
                increaseProductQuantity,
                removeProductFromCart,
                total,
                totalProducts,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
