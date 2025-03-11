import ProductItem, { ProductItemProps } from './product-item';
import { CarouselItem } from './ui/carousel';

interface ProductCarouselItemProps {
    product: ProductItemProps;
}

const ProductCarouselItem = ({ product }: ProductCarouselItemProps) => {
    return (
        <CarouselItem
            key={product.id}
            className="basis-1/2 md:basis-1/3 lg:basis-1/4"
        >
            <ProductItem {...product} />
        </CarouselItem>
    );
};

export default ProductCarouselItem;
