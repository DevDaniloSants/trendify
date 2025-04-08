import Container from '@/app/_components/container';

import Image from 'next/image';
import ProductShowcase from '../_components/product-showcase';

import { Suspense } from 'react';
import { ProductCarouselSkeleton } from '@/app/_components/skeletons';
import TopSellingProductsCarousel from '../_components/top-selling-products-carousel';

const AboutPage = async () => {
    return (
        <Container className="p-2">
            <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
                <div className="w-full flex-1/2 space-y-8">
                    <h1 className="text-3xl font-semibold">Nossa história</h1>
                    <p className="text-justify">
                        A Trendify nasceu com uma missão clara: transformar a
                        forma como as pessoas descobrem e compram produtos
                        exclusivos no Brasil. Fundada por um grupo de jovens
                        empreendedores apaixonados por moda, design e
                        tecnologia, a Trendify começou como uma pequena loja
                        online voltada para tendências de moda, mas rapidamente
                        se expandiu para um e-commerce completo, oferecendo
                        produtos em diversas categorias: moda, acessórios,
                        eletrônicos e decoração. Tudo começou em 2019, quando os
                        fundadores, amigos de longa data, se encontraram em um
                        café no centro de São Paulo para discutir como poderiam
                        transformar suas ideias em algo grande. Perceberam que
                        as lojas de e-commerce tradicionais não ofereciam uma
                        experiência personalizada e única, e foi daí que surgiu
                        a ideia da Trendify: um e-commerce focado em tendências
                        reais, com curadoria inteligente e produtos de alta
                        qualidade a preços acessíveis. Logo após o lançamento, a
                        Trendify se destacou por seu visual moderno e intuitivo,
                        com uma plataforma de navegação simples, mas cheia de
                        funcionalidades. A experiência de compra foi
                        cuidadosamente projetada para ser fácil e agradável, com
                        recomendações personalizadas baseadas nas preferências
                        dos clientes.
                    </p>
                </div>

                <div className="order-1 h-[500px] w-full overflow-hidden rounded-lg lg:order-2 lg:h-auto lg:w-[600px]">
                    <Image
                        src={'/about-image.png'}
                        alt="about image"
                        height={0}
                        width={0}
                        sizes="100vw"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>

            <div className="relative space-y-6 md:space-y-12">
                <ProductShowcase
                    title="Mais Vendidos"
                    description="Nossos melhores produtos"
                >
                    <Suspense fallback={<ProductCarouselSkeleton />}>
                        <TopSellingProductsCarousel />
                    </Suspense>
                </ProductShowcase>
            </div>
        </Container>
    );
};

export default AboutPage;
