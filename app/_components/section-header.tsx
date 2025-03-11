import { cn } from '../_lib/utils';

export const SectionHeader = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return <div className={cn('space-y-2', className)}>{children}</div>;
};

export const SectionTitle = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className="flex items-center gap-4">
            <span className="bg-destructive h-10 w-5 rounded-sm" />
            <h2 className={cn('text-destructive font-bold', className)}>
                {children}
            </h2>
        </div>
    );
};

export const SectionDescription = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <p
            className={cn(
                'text-primary text-base sm:text-2xl md:text-3xl lg:text-4xl',
                className
            )}
        >
            {children}
        </p>
    );
};
