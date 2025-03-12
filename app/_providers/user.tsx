'use client';
import type React from 'react';

import { createContext, useCallback, useLayoutEffect, useState } from 'react';
import type { UserProfile } from '../_data-access/interfaces/user';
import { signOut } from '../_actions/user/auth/sign-out';

interface IUserContext {
    user: UserProfile | null;
    isLoading: boolean;
    setProfileUser: (user: UserProfile) => void;
    logout: () => Promise<void>;
}

export const UserContext = createContext<IUserContext>({
    user: null,
    isLoading: true,
    setProfileUser: () => {},
    logout: async () => {},
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

    const logout = useCallback(async () => {
        setUser(null);

        localStorage.removeItem('user');

        await signOut();
    }, []);

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
        <UserContext.Provider
            value={{ user, isLoading, setProfileUser, logout }}
        >
            {children}
        </UserContext.Provider>
    );
}
