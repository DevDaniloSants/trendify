import { Button } from '@/app/_components/ui/button';
import Image from 'next/image';
import ProductShowcase from './product-showcase';
import Link from 'next/link';

const FeaturedProductsGrid = () => {
    return (
        <div>
            <ProductShowcase title="Destaque" description="Lançamento">
                <div className="grid-row-2 grid gap-7 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-4">
                    <div className="relative flex w-full items-end justify-end bg-black md:col-span-1 lg:col-span-2 lg:row-span-4">
                        <Image
                            src="/ps5-image.webp"
                            alt="ps5"
                            width={500}
                            height={500}
                            quality={100}
                            sizes="w-full h-full "
                            className="min-h-[300px] min-w-[300px] object-cover"
                        />

                        <div className="absolute bottom-6 left-6 flex flex-col gap-3 text-white md:max-w-[240px]">
                            <h3 className="text-2xl font-semibold">
                                Playstation 5
                            </h3>
                            <p className="text-sm font-semibold text-white/80">
                                Versão preta e branca do PS5 sendo lançada à
                                venda.
                            </p>
                            <Button
                                variant="ghost"
                                className="relative w-[100px] cursor-pointer before:absolute before:bottom-1 before:left-0 before:h-[1px] before:w-full before:bg-white hover:bg-transparent hover:text-white"
                                asChild
                            >
                                <Link href={'./category/electronics'}>
                                    Comprar Agora
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="bg-black md:col-span-1 lg:col-span-2 lg:row-span-2">
                        <div className="relative flex h-full w-full items-end justify-end">
                            <Image
                                src="/woman-image.webp"
                                alt="woman"
                                quality={100}
                                width={400}
                                height={500}
                                className="object-cover md:h-full md:w-[400px] lg:w-[400px]"
                            />
                            <div className="absolute bottom-6 left-6 flex flex-col gap-3 text-white md:max-w-[240px]">
                                <h3 className="text-2xl font-semibold">
                                    Coleções Femininas
                                </h3>
                                <p className="text-sm font-semibold text-white/80">
                                    Coleções femininas em destaque que trazem
                                    uma vibe diferente para você.
                                </p>
                                <Button
                                    variant="ghost"
                                    className="relative w-[100px] cursor-pointer before:absolute before:bottom-1 before:left-0 before:h-[1px] before:w-full before:bg-white hover:bg-transparent hover:text-white"
                                >
                                    <Link href={'./category/clothes'}>
                                        Comprar Agora
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black md:col-span-1 lg:row-span-2">
                        <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-2">
                            <Image
                                src="/echo-image.webp"
                                alt="woman"
                                quality={100}
                                width={190}
                                height={221}
                                className="z-10 object-cover"
                            />
                            <div className="absolute inset-0 z-0 flex items-center justify-center">
                                <div className="h-[200px] w-full rounded-full bg-white/20 blur-[80px] lg:w-[190px] lg:bg-white/50 lg:blur-3xl" />
                            </div>
                            <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-3 text-white md:max-w-[240px]">
                                <h3 className="text-2xl font-semibold">
                                    Speakers
                                </h3>
                                <p className="text-sm font-semibold text-white/80">
                                    Amazon wireless speakers
                                </p>
                                <Button
                                    variant="ghost"
                                    className="relative w-[100px] cursor-pointer before:absolute before:bottom-1 before:left-0 before:h-[1px] before:w-full before:bg-white hover:bg-transparent hover:text-white"
                                >
                                    <Link href={'./category/electronics'}>
                                        Comprar Agora
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black md:col-span-1 lg:row-span-2">
                        <div className="relative flex h-full w-full items-center justify-center overflow-hidden p-2">
                            <Image
                                src="/perfume-image.webp"
                                alt="woman"
                                quality={100}
                                width={190}
                                height={221}
                                className="z-10 object-cover"
                            />
                            <div className="absolute inset-0 z-0 flex items-center justify-center">
                                <div className="h-[200px] w-full rounded-full bg-white/20 blur-[80px] lg:w-[190px] lg:bg-white/50 lg:blur-3xl" />
                            </div>
                            <div className="absolute bottom-6 left-6 z-10 flex flex-col gap-3 text-white md:max-w-[240px]">
                                <h3 className="text-2xl font-semibold">
                                    Perfume
                                </h3>
                                <p className="text-sm font-semibold text-white/90">
                                    Gucci intense oud edp
                                </p>
                                <Button
                                    variant="ghost"
                                    className="relative w-[100px] cursor-pointer before:absolute before:bottom-1 before:left-0 before:h-[1px] before:w-full before:bg-white hover:bg-transparent hover:text-white"
                                >
                                    <Link href={'./product/47'}>
                                        Comprar Agora
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </ProductShowcase>
        </div>
    );
};

export default FeaturedProductsGrid;
