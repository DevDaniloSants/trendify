import Container from '../_components/container';
import {
    SectionDescription,
    SectionHeader,
    SectionTitle,
} from '../_components/section-header';
import { getProductsWithDiscount } from '../_data-access/product/get-products-with-discount';

import BannerCarousel from './_components/banner-carousel';
import ProductCarousel from '../_components/product-carousel';
import ProductCarouselItem from '../_components/product-carousel-item';
import { getTopSellingProducts } from '../_data-access/product/get-top-selling-products';

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
