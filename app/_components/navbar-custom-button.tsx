'use client';

import { Button } from './ui/button';

interface NavbarCustomButtonProps {
    icon: React.ReactNode;
    className?: string;
    variant?: 'default' | 'ghost' | 'outline' | 'secondary';
}

const NavbarCustomButton = ({
    icon,
    className,
    variant = 'ghost',
}: NavbarCustomButtonProps) => {
    return (
        <Button
            variant={variant}
            className={`cursor-pointer hover:bg-transparent ${className}`}
        >
            {icon}
        </Button>
    );
};

export default NavbarCustomButton;
