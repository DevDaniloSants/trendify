import BannerCarousel from '../_components/banner-carousel';
import Container from '@/app/_components/container';
import ProductShowcase from '../_components/product-showcase';
import { Suspense } from 'react';
import { ProductCarouselSkeleton } from '@/app/_components/skeletons';

import ProductsWithDiscountCarousel from '../_components/products-with-discount-carousel';
import TopSellingProductsCarousel from '../_components/top-selling-products-carousel';

const Home = async () => {
    return (
        <Container className="mb-4 space-y-10 px-2 md:space-y-[80px]">
            <BannerCarousel />

            <div className="relative space-y-6 md:space-y-12">
                <ProductShowcase
                    title="Mais Vendidos"
                    description="Nossos melhores produtos"
                >
                    <Suspense fallback={<ProductCarouselSkeleton />}>
                        <ProductsWithDiscountCarousel />
                    </Suspense>
                </ProductShowcase>
            </div>

            <div className="relative space-y-6 md:space-y-12">
                <ProductShowcase
                    title="Mais Vendidos"
                    description="Nossos melhores produtos"
                >
                    <Suspense fallback={<ProductCarouselSkeleton />}>
                        <TopSellingProductsCarousel />
                    </Suspense>
                </ProductShowcase>
            </div>
        </Container>
    );
};

export default Home;
