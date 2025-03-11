import Image from 'next/image';
import Container from '../_components/container';
import {
    SectionDescription,
    SectionHeader,
    SectionTitle,
} from '../_components/section-header';
import { getProductsWithDiscount } from '../_data-access/get-products-with-discount';

import BannerCarousel from './_components/banner-carousel';
import { Button } from '../_components/ui/button';
import { Heart } from 'lucide-react';

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
                        <div
                            key={product.id}
                            className="h-[350px] min-w-[270px]"
                        >
                            <div className="group bg-border relative h-[250px] w-full overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    sizes="100%"
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <span className="bg-destructive absolute top-3 left-3 rounded-sm px-4 py-1 text-xs text-white">
                                    - {product.discountPercentage} %
                                </span>

                                <Button
                                    size="icon"
                                    className="text-primary absolute top-3 right-3 cursor-pointer rounded-full bg-white hover:bg-white/70"
                                >
                                    <Heart />
                                </Button>
                                <div className="flex items-center justify-center">
                                    <Button className="hover:bg-primary absolute bottom-0 hidden w-full cursor-pointer rounded-none group-hover:block">
                                        Adicionar ao carrinho
                                    </Button>
                                </div>
                            </div>
                            <div className="space-y-2 pt-4">
                                <h3 className="text-primary w-[90%] truncate font-semibold uppercase">
                                    {product.title}
                                </h3>
                                <div className="flex items-center gap-2">
                                    <p className="text-destructive font-semibold">
                                        {product.discountedPrice}
                                    </p>
                                    <p className="text-muted-foreground text-sm font-semibold line-through">
                                        {product.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Home;
