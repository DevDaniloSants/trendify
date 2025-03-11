import Container from '../_components/container';
import {
    SectionDescription,
    SectionHeader,
    SectionTitle,
} from '../_components/section-header';
import { getProductsWithDiscount } from '../_data-access/get-products-with-discount';

import BannerCarousel from './_components/banner-carousel';
import ProductItem from '../_components/product-item';

const Home = async () => {
    const productsWithDiscount = await getProductsWithDiscount();

    return (
        <Container className="mb-4 space-y-10 px-2 md:space-y-[80px]">
            <BannerCarousel />

            <div className="space-y-8">
                <SectionHeader>
                    <SectionTitle>Oferta Relâmpago</SectionTitle>
                    <SectionDescription>
                        Confira nossas ofertas da semana !
                    </SectionDescription>
                </SectionHeader>

                <div className="flex gap-2">
                    {productsWithDiscount.map((product) => (
                        <ProductItem key={product.id} {...product} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Home;
