'use client';

import Link from 'next/link';
import { Heart, UserRound } from 'lucide-react';
import { Sheet } from './ui/sheet';

import { NAVBAR_ITEMS } from '../_constants/navbar-items';

import NavbarCustomButton from './navbar-custom-button';
import Sidebar from './sidebar';
import SidebarButton from './sidebar-button';
import { useUser } from '../_hooks/useUser';

import UserDropDownButton from './user-drop-down-button';
import Cart from './cart';

const Navbar = () => {
    const { user, logout } = useUser();

    return (
        <Sheet>
            <header className="border-border fixed top-0 left-0 z-50 w-full border-b bg-white">
                <nav className="mx-auto flex h-full w-full max-w-[1400px] items-center justify-between px-4 py-5 text-sm">
                    <Link href="/" className="text-2xl font-extrabold">
                        Trendify
                    </Link>

                    <div className="hidden md:block">
                        <ul className="flex gap-8">
                            {NAVBAR_ITEMS.map((item) => (
                                <li key={item.index}>
                                    <Link
                                        href={item.href}
                                        className="relative w-fit text-base font-bold before:absolute before:bottom-[-30px] before:h-[2px] before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:left-0 hover:before:w-full"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
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
                <Sidebar sidebarItemsMenu={NAVBAR_ITEMS} />
            </header>
        </Sheet>
    );
};
export default Navbar;
