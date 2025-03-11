import Container from '../_components/container';

import { getProductsWithDiscount } from '../_data-access/get-products-with-discount';

import BannerCarousel from './_components/banner-carousel';

const Home = async () => {
    const data = await getProductsWithDiscount();

    console.log({ data });

    return (
        <Container className="space-y-10 px-2 md:space-y-[80px]">
            <BannerCarousel />
        </Container>
    );
};

export default Home;
