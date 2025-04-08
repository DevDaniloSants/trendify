import { Button } from '@/app/_components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const ProductBanner = () => {
    return (
        <div className="flex h-[500px] justify-between gap-4 overflow-hidden bg-black px-6 py-10 md:p-10 lg:p-20">
            <div className="flex flex-col justify-between">
                <h4 className="font-bold text-green-400">Categorias</h4>
                <div>
                    <h2 className="text-center text-[28px] font-bold text-wrap text-white md:text-start md:text-[40px]">
                        Melhore sua experiência musical
                    </h2>
                    <p className="text-center text-white/45 md:text-start">
                        Descubra uma nova forma de sentir a música com qualidade
                        e estilo incomparáveis.
                    </p>
                </div>
                <Button className="h-[56px] cursor-pointer bg-green-400 text-white hover:bg-green-400/60 md:w-[171px]">
                    <Link href={'./category/electronics'}>Comprar Agora</Link>
                </Button>
            </div>
            <div className="relative hidden h-full min-w-[350px] flex-2/3 md:block">
                <Image
                    src={'/jbl-image.webp'}
                    alt="jbl imagem"
                    fill
                    height={0}
                    width={0}
                    sizes="100%"
                    className="z-10 h-full max-w-[100%] object-contain"
                />
                <div className="absolute inset-0 z-0 flex items-center justify-center">
                    <div className="h-[400px] w-[70%] rounded-full bg-white/50 blur-[130px]" />
                </div>
            </div>
        </div>
    );
};
export default ProductBanner;
