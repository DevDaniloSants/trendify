'use client';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/app/_components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

import { CAROUSSEL_ITEMS } from '@/app/_constants/carousel-items';

const BannerCarousel = () => {
    return (
        <Carousel
            className="h-auto w-full overflow-hidden"
            plugins={[
                Autoplay({
                    delay: 3000,
                    stopOnInteraction: false,
                    stopOnMouseEnter: true,
                }),
            ]}
        >
            <CarouselContent>
                {CAROUSSEL_ITEMS.map((item) => (
                    <CarouselItem
                        key={item.id}
                        className="group relative cursor-pointer overflow-hidden"
                    >
                        <Image
                            src={item.image}
                            alt={`Banner ${item.id}`}
                            width={1200}
                            priority
                            height={1000}
                            className="object-cover"
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};

export default BannerCarousel;
