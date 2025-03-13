'use client';

import CartProvider from './cart';
import { UserProvider } from './user';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <UserProvider>
            <CartProvider>{children}</CartProvider>
        </UserProvider>
    );
};
