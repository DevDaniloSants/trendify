'use client';

import Link from 'next/link';
import { Heart, UserRound } from 'lucide-react';
import { Sheet } from './ui/sheet';

import NavbarCustomButton from './navbar-custom-button';
import Sidebar from './sidebar';
import SidebarButton from './sidebar-button';
import { useUser } from '../_hooks/useUser';

import UserDropDownButton from './user-drop-down-button';
import Cart from './cart';
import { Category } from '../_data-access/interfaces/category';
import { useLayoutEffect, useState } from 'react';
import { getCategories } from '../_data-access/category/get-categories';
import { NAVBAR_ITEMS } from '../_constants/navbar-items';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';

const Navbar = () => {
    const { user, logout } = useUser();
    const [categories, setCategories] = useState<Category[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
        async function loadCategories() {
            try {
                const { data: categories } = await getCategories();
                if (!categories) return;
                setCategories(categories);
            } catch (error) {
                console.error('Erro ao carregar categorias:', error);
            } finally {
                setIsLoading(false);
            }
        }

        loadCategories();
    }, []);

    return (
        <Sheet>
            <header className="border-border fixed top-0 left-0 z-50 h-[70px] w-full border-b bg-white">
                <nav className="mx-auto flex w-full justify-between px-4 py-5 text-sm">
                    <Link href="/" className="text-2xl font-extrabold">
                        Trendify
                    </Link>

                    <div className="hidden h-full md:block">
                        {isLoading ? (
                            <div className="h-10 w-10 animate-pulse rounded-full bg-gray-300"></div>
                        ) : (
                            <ul className="flex gap-8">
                                {NAVBAR_ITEMS.map((item) => (
                                    <li key={item.index} className="h-full">
                                        <Link
                                            href={item.href}
                                            className="relative w-fit text-base font-bold before:absolute before:bottom-[-26px] before:h-[2px] before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full"
                                        >
                                            <p>{item.name}</p>
                                        </Link>
                                    </li>
                                ))}

                                <li className="group relative h-full">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger className="relative text-base font-bold">
                                            Store
                                        </DropdownMenuTrigger>

                                        <div>
                                            {isLoading ? (
                                                <div className="px-4 py-2 text-sm">
                                                    Carregando...
                                                </div>
                                            ) : (
                                                <DropdownMenuContent className="w-56">
                                                    {categories.map(
                                                        (category) => (
                                                            <DropdownMenuLabel
                                                                key={
                                                                    category.id
                                                                }
                                                                className="px-4 py-2 text-sm"
                                                            >
                                                                <Link
                                                                    href={`/category/${category.slug}`}
                                                                >
                                                                    {
                                                                        category.name
                                                                    }
                                                                </Link>
                                                            </DropdownMenuLabel>
                                                        )
                                                    )}
                                                </DropdownMenuContent>
                                            )}
                                        </div>
                                    </DropdownMenu>
                                </li>
                            </ul>
                        )}
                    </div>

                    <div className="flex items-center">
                        {user ? (
                            <UserDropDownButton
                                user={user}
                                handleLogoutClick={logout}
                            />
                        ) : (
                            <NavbarCustomButton
                                icon={<UserRound />}
                                href="/sign-in"
                            />
                        )}
                        <NavbarCustomButton icon={<Heart />} />

                        <Cart />

                        <SidebarButton />
                    </div>
                </nav>
                <Sidebar categories={categories} />
            </header>
        </Sheet>
    );
};
export default Navbar;
