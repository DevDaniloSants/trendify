import Link from 'next/link';
import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from './ui/sheet';

interface SidebarProps {
    sidebarItemsMenu: {
        name: string;
        href: string;
        icon: React.ReactElement;
        index: number;
    }[];
}

const Sidebar = ({ sidebarItemsMenu }: SidebarProps) => {
    return (
        <SheetContent>
            <SheetHeader className="pb-0">
                <SheetTitle className="text-center text-2xl font-bold">
                    Trendify
                </SheetTitle>
                <SheetDescription className="text-start">Menu</SheetDescription>
            </SheetHeader>
            <div className="space-y-4 p-3">
                {sidebarItemsMenu.map((item) => (
                    <Link
                        href={item.href}
                        key={item.index}
                        className="text-muted-foreground transition-bg flex gap-2 rounded-sm px-2 py-3 duration-200 hover:bg-gray-800 hover:text-white"
                    >
                        {item.icon}
                        <p className="text-sm font-semibold">{item.name}</p>
                    </Link>
                ))}
            </div>
        </SheetContent>
    );
};

export default Sidebar;
