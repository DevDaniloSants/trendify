import { HomeIcon, UsersIcon } from 'lucide-react';

export const NAVBAR_ITEMS = [
    {
        index: 0,
        name: 'Home',
        href: '/',
        icon: <HomeIcon className="h-5 w-5" />,
    },
    {
        index: 1,
        name: 'Sobre',
        href: '/about',
        icon: <UsersIcon className="h-5 w-5" />,
    },
];
