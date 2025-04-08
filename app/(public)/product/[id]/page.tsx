import ProductImages from '../../_components/product-images';
import { notFound } from 'next/navigation';
import Container from '@/app/_components/container';

import GoBackButton from '@/app/_components/go-back-button';
import ProductInfo from '../../_components/product-info';
import { getProduct } from '@/app/_data-access/product/get-product';

import ProductShowcase from '../../_components/product-showcase';
import { Suspense } from 'react';
import { ProductCarouselSkeleton } from '@/app/_components/skeletons';
import TopSellingProductsCarousel from '../../_components/top-selling-products-carousel';

type ProductPageProps = { id: string };

const ProductDetails = async ({
    params,
}: {
    params: Promise<ProductPageProps>;
}) => {
    const { id } = await params;

    const { data: product } = await getProduct(id);

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
            <ProductShowcase
                title="Mais Vendidos"
                description="Nossos melhores produtos"
            >
                <Suspense fallback={<ProductCarouselSkeleton />}>
                    <TopSellingProductsCarousel />
                </Suspense>
            </ProductShowcase>
        </Container>
    );
};

export default ProductDetails;
