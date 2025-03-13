import ProductCarousel from '@/app/_components/product-carousel';
import ProductCarouselItem from '@/app/_components/product-carousel-item';
import {
    SectionHeader,
    SectionTitle,
    SectionDescription,
} from '@/app/_components/section-header';
import { GetProducDTO } from '@/app/_data-access/interfaces/product';

interface ProductShowcaseProps {
    title: string;
    description: string;
    products: GetProducDTO[];
}

const ProductShowcase = ({
    title,
    description,
    products,
}: ProductShowcaseProps) => {
    return (
        <section className="relative space-y-6 md:space-y-12">
            <SectionHeader>
                <SectionTitle>{title}</SectionTitle>
                <SectionDescription>{description}</SectionDescription>
            </SectionHeader>

            <ProductCarousel>
                {products.map((product) => (
                    <ProductCarouselItem key={product.id} product={product} />
                ))}
            </ProductCarousel>
        </section>
    );
};

export default ProductShowcase;
