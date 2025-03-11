'use client';

import Link from 'next/link';
import { Button } from './ui/button';

interface NavbarCustomButtonProps {
    icon: React.ReactNode;
    className?: string;
    variant?: 'default' | 'ghost' | 'outline' | 'secondary';
    href?: string;
}

const NavbarCustomButton = ({
    icon,
    className,
    href = '/',
    variant = 'ghost',
}: NavbarCustomButtonProps) => {
    return (
        <Button
            variant={variant}
            className={`cursor-pointer hover:bg-transparent ${className}`}
            asChild
        >
            <Link href={href}>{icon}</Link>
        </Button>
    );
};

export default NavbarCustomButton;
