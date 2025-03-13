import Link from 'next/link';
import {
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from './ui/sheet';
import { Category } from '../_data-access/interfaces/category';

interface SidebarProps {
    categories: Category[];
}

const Sidebar = ({ categories }: SidebarProps) => {
    return (
        <SheetContent>
            <SheetHeader className="pb-0">
                <SheetTitle className="text-center text-2xl font-bold">
                    Trendify
                </SheetTitle>
                <SheetDescription className="text-start">Menu</SheetDescription>
            </SheetHeader>
            <div className="space-y-4 p-3">
                {categories.map((category) => (
                    <Link
                        href={`/category/${category.slug}`}
                        key={category.id}
                        className="text-muted-foreground transition-bg flex gap-2 rounded-sm px-2 py-3 duration-200 hover:bg-gray-800 hover:text-white"
                    >
                        <p className="text-sm font-semibold">{category.name}</p>
                    </Link>
                ))}
            </div>
        </SheetContent>
    );
};

export default Sidebar;
