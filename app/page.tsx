'use client';

import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from './_components/ui/carousel';

import { CAROUSSEL_ITEMS } from './_constants/carousel-items';

import Container from './_components/container';

const Home = () => {
    return (
        <Container>
            <Carousel
                className="h-auto w-full overflow-hidden px-2"
                plugins={[
                    Autoplay({
                        delay: 3000,
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
                                height={300}
                                className="object-cover"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </Container>
    );
};

export default Home;
