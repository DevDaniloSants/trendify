'use client';

import CartProvider from './cart';
import FavoriteProvider from './favorite';
import { UserProvider } from './user';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <UserProvider>
            <CartProvider>
                <FavoriteProvider>{children}</FavoriteProvider>
            </CartProvider>
        </UserProvider>
    );
};
