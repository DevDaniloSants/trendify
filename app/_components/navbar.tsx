import Link from 'next/link';
import { Heart, ShoppingCart, UserRound } from 'lucide-react';
import { Sheet } from './ui/sheet';

import { NAVBAR_ITEMS } from '../_constants/navbar-items';

import NavbarCustomButton from './navbar-custom-button';
import Sidebar from './sidebar';
import SidebarButton from './sidebar-button';

const Navbar = () => {
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
                        <NavbarCustomButton
                            icon={<UserRound />}
                            href="/sign-in"
                        />

                        <NavbarCustomButton icon={<Heart />} />

                        <NavbarCustomButton icon={<ShoppingCart />} />

                        <SidebarButton />
                    </div>
                </nav>
                <Sidebar sidebarItemsMenu={NAVBAR_ITEMS} />
            </header>
        </Sheet>
    );
};
export default Navbar;
