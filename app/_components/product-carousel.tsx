import { ReactNode } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from './ui/carousel';

interface ProductCarouselProps {
    children: ReactNode;
}

const ProductCarousel = ({ children }: ProductCarouselProps) => {
    return (
        <Carousel className="h-auto w-full">
            <CarouselContent>{children}</CarouselContent>
            <CarouselPrevious className="absolute top-[40%] left-2 p-5" />
            <CarouselNext className="absolute top-[40%] right-2 p-5" />
        </Carousel>
    );
};

export default ProductCarousel;
