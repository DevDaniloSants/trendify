import { useContext } from 'react';
import { CartContext } from '../_providers/cart';

export function useUser() {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within a UserProvider');
    return context;
}
