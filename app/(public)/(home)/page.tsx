import ProductCarousel from '@/app/_components/product-carousel';
import ProductCarouselItem from '@/app/_components/product-carousel-item';
import {
    SectionHeader,
    SectionTitle,
    SectionDescription,
} from '@/app/_components/section-header';
import { getProductsWithDiscount } from '@/app/_data-access/product/get-products-with-discount';
import { getTopSellingProducts } from '@/app/_data-access/product/get-top-selling-products';
import { Container } from 'lucide-react';
import BannerCarousel from '../_components/banner-carousel';

const Home = async () => {
    const productsWithDiscount = await getProductsWithDiscount();

    const topProducts = await getTopSellingProducts();

    return (
        <Container className="mb-4 space-y-10 px-2 md:space-y-[80px]">
            <BannerCarousel />

            <div className="relative space-y-6 md:space-y-12">
                <SectionHeader>
                    <SectionTitle>Oferta Relâmpago</SectionTitle>
                    <SectionDescription>
                        Confira nossas ofertas da semana !
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

            <div className="relative space-y-6 md:space-y-12">
                <SectionHeader>
                    <SectionTitle>Mais Vendidos</SectionTitle>
                    <SectionDescription>
                        Nossos melhores produtos
                    </SectionDescription>
                </SectionHeader>

                <ProductCarousel>
                    {topProducts.map((product) => (
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

export default Home;
