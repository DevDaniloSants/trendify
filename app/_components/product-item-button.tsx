import Link from 'next/link';
import { cn } from '../_lib/utils';
import { Button } from './ui/button';

interface ProductItemButtonProps {
    icon: React.ReactNode;
    href?: string;
    className?: string;
}

const ProductItemButton = ({
    icon,
    className,
    href = '/',
}: ProductItemButtonProps) => {
    return (
        <Button
            size="icon"
            className={cn(
                'text-primary cursor-pointer rounded-full bg-white hover:bg-white/70',
                className
            )}
            asChild
        >
            <Link href={href}>{icon}</Link>
        </Button>
    );
};

export default ProductItemButton;
