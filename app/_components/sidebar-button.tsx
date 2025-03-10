'use client';

import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { SheetTrigger } from './ui/sheet';

const SidebarButton = () => {
    return (
        <SheetTrigger asChild>
            <Button className="block md:hidden">
                <Menu />
            </Button>
        </SheetTrigger>
    );
};

export default SidebarButton;
