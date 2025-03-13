import { getProductsWithDiscount } from '@/app/_data-access/product/get-products-with-discount';
import { getTopSellingProducts } from '@/app/_data-access/product/get-top-selling-products';

import BannerCarousel from '../_components/banner-carousel';
import Container from '@/app/_components/container';
import ProductShowcase from '../_components/product-showcase';

const Home = async () => {
    const productsWithDiscount = await getProductsWithDiscount();

    const topProducts = await getTopSellingProducts();

    return (
        <Container className="mb-4 space-y-10 px-2 md:space-y-[80px]">
            <BannerCarousel />

            <div className="relative space-y-6 md:space-y-12">
                <ProductShowcase
                    title="Produtos mais vendidos"
                    description="Confira nossos produtos mais vendidos"
                    products={productsWithDiscount}
                />
            </div>

            <div className="relative space-y-6 md:space-y-12">
                <ProductShowcase
                    title="Mais Vendidos"
                    description="Nossos melhores produtos"
                    products={topProducts}
                />
            </div>
        </Container>
    );
};

export default Home;
