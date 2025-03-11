import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Button } from './ui/button';

export interface ProductItemProps {
    id: number;
    title: string;
    price: string;
    discountPercentage?: number;
    image: string;
    discountedPrice?: string;
}

const ProductItem = (product: ProductItemProps) => {
    return (
        <div key={product.id} className="h-[350px] min-w-[270px]">
            <div className="group bg-border relative h-[250px] w-full overflow-hidden">
                <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="100%"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.discountPercentage &&
                    product.discountPercentage > 0 && (
                        <span className="bg-destructive absolute top-3 left-3 rounded-sm px-4 py-1 text-xs text-white">
                            - {product.discountPercentage} %
                        </span>
                    )}

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
                {product.discountedPrice ? (
                    <div className="flex items-center gap-2">
                        <p className="text-destructive font-semibold">
                            {product.discountedPrice}
                        </p>
                        <p className="text-muted-foreground text-sm font-semibold line-through">
                            {product.price}
                        </p>
                    </div>
                ) : (
                    <p className="text-primary font-semibold">
                        {product.price}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ProductItem;
