'use client';

import { UserProvider } from './user';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return <UserProvider>{children}</UserProvider>;
};
