'use client';
import type React from 'react';

import { createContext, useLayoutEffect, useState } from 'react';
import type { UserProfile } from '../_data-access/interfaces/user';

interface IUserContext {
    user: UserProfile | null;
    isLoading: boolean;
    setProfileUser: (user: UserProfile) => void;
}

export const UserContext = createContext<IUserContext>({
    user: null,
    isLoading: true,
    setProfileUser: () => {},
});

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    async function setProfileUser(user: UserProfile) {
        if (!user) return;
        setUser(user);
        sessionStorage.setItem('user', JSON.stringify(user));
    }

    useLayoutEffect(() => {
        setIsMounted(true);
        const storedUser = sessionStorage.getItem('user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (error) {
                console.error('Erro ao analisar dados do usuário:', error);
                sessionStorage.removeItem('user');
            }
        }
        setIsLoading(false);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <UserContext.Provider value={{ user, isLoading, setProfileUser }}>
            {children}
        </UserContext.Provider>
    );
}
