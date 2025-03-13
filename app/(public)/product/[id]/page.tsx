import ProductImages from '../../_components/product-images';
import { notFound } from 'next/navigation';
import Container from '@/app/_components/container';

import GoBackButton from '@/app/_components/go-back-button';
import ProductInfo from '../../_components/product-info';
import { getProduct } from '@/app/_data-access/product/get-product';
import {
    SectionDescription,
    SectionHeader,
    SectionTitle,
} from '@/app/_components/section-header';
import ProductCarousel from '@/app/_components/product-carousel';
import ProductCarouselItem from '@/app/_components/product-carousel-item';

import { getProductsWithDiscount } from '@/app/_data-access/product/get-products-with-discount';

interface ProductPageProps {
    id: string;
}

const ProductDetails = async ({ params }: { params: ProductPageProps }) => {
    const { id } = await params;

    const product = await getProduct(id);

    const productsWithDiscount = await getProductsWithDiscount();

    if (!product) {
        return notFound();
    }

    return (
        <Container className="px-2">
            <GoBackButton />
            <div className="flex h-auto flex-col gap-10 md:flex-row md:gap-8 lg:h-[800px]">
                <div className="h-full w-full">
                    <ProductImages
                        imagesUrl={product.images}
                        name={product.title}
                    />
                </div>

                <ProductInfo product={product} />
            </div>
            <div className="relative space-y-6 md:space-y-12">
                <SectionHeader>
                    <SectionTitle>Mais Vendidos</SectionTitle>
                    <SectionDescription>
                        Nossos melhores produtos
                    </SectionDescription>
                </SectionHeader>

                <ProductCarousel>
                    {productsWithDiscount.map((product) => (
                        <ProductCarouselItem
                            key={product.id}
                            product={product}
                        />
                    ))}
                </ProductCarousel>
            </div>
        </Container>
    );
};

export default ProductDetails;
