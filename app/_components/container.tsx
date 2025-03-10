interface ContainerProps {
    children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
    return <div className="w-full space-y-6 xl:w-[1200px]">{children}</div>;
};

export default Container;
