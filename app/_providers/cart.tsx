'use client';

import { createContext, ReactNode } from 'react';
import { GetProducDTO } from '../_data-access/interfaces/product';

interface CartProcut extends GetProducDTO {
    quantity: number;
}

interface ICartContext {
    products: CartProcut[];
    cartTotalPrice: number;
    cartBasePrice: number;
}

export const CartContext = createContext<ICartContext>({
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0,
});

const CartProvider = ({ children }: { children: ReactNode }) => {
    return (
        <CartContext.Provider
            value={{
                products: [],
                cartTotalPrice: 0,
                cartBasePrice: 0,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
