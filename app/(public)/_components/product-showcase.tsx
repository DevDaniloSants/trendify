import {
    SectionHeader,
    SectionTitle,
    SectionDescription,
} from '@/app/_components/section-header';

interface ProductShowcaseProps {
    title: string;
    description: string;
    children: React.ReactNode;
}

const ProductShowcase = ({
    title,
    description,
    children,
}: ProductShowcaseProps) => {
    return (
        <section className="relative space-y-6 md:space-y-12">
            <SectionHeader>
                <SectionTitle>{title}</SectionTitle>
                <SectionDescription>{description}</SectionDescription>
            </SectionHeader>

            {children}
        </section>
    );
};

export default ProductShowcase;
