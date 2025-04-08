import BannerCarousel from '../_components/banner-carousel';
import Container from '@/app/_components/container';
import ProductShowcase from '../_components/product-showcase';
import { Suspense } from 'react';
import { ProductCarouselSkeleton } from '@/app/_components/skeletons';

import ProductsWithDiscountCarousel from '../_components/products-with-discount-carousel';
import TopSellingProductsCarousel from '../_components/top-selling-products-carousel';
import ProductBanner from '../_components/product-banner';
import FeaturedProductsGrid from '../_components/featured-products-grid';

const Home = async () => {
    return (
        <Container className="mb-4 space-y-10 px-2 md:space-y-[80px]">
            <BannerCarousel />

            <div className="relative space-y-6 md:space-y-12">
                <ProductShowcase
                    title="Promoção"
                    description="Nossos produtos em promoção!"
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

            <ProductBanner />

            <FeaturedProductsGrid />
        </Container>
    );
};
export default Home;
