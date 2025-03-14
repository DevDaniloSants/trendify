interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={`h-full w-full space-y-6 xl:w-[1200px] ${className}`}>
            {children}
        </div>
    );
};

export default Container;
