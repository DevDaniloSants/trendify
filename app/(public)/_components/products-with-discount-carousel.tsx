import ProductCarousel from '@/app/_components/product-carousel';

import ProductCarouselItem from '@/app/_components/product-carousel-item';
import { getProductsWithDiscount } from '@/app/_data-access/product/get-products-with-discount';

const ProductsWithDiscountCarousel = async () => {
    const { data: products } = await getProductsWithDiscount();
    return (
        <ProductCarousel>
            {products!.map((product) => (
                <ProductCarouselItem key={product.id} product={product} />
            ))}
        </ProductCarousel>
    );
};

export default ProductsWithDiscountCarousel;
