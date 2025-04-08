import ProductCarousel from '@/app/_components/product-carousel';
import ProductCarouselItem from '@/app/_components/product-carousel-item';
import { getTopSellingProducts } from '@/app/_data-access/product/get-top-selling-products';

const TopSellingProductsCarousel = async () => {
    const { data: products } = await getTopSellingProducts();
    return (
        <ProductCarousel>
            {products!.map((product) => (
                <ProductCarouselItem key={product.id} product={product} />
            ))}
        </ProductCarousel>
    );
};

export default TopSellingProductsCarousel;
