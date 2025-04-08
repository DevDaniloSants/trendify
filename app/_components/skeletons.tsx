import ProductCarousel from './product-carousel';
import { CarouselItem } from './ui/carousel';
import { Skeleton } from './ui/skeleton';

export const ProductItemSkeleton = () => {
    return (
        <div className="flex h-[400px] w-full flex-col gap-2">
            <div className="group bg-border relative w-full flex-1 overflow-hidden">
                <Skeleton className="h-full w-full rounded-none" />

                <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <Skeleton className="h-8 w-8 rounded-full bg-gray-400" />
                    <Skeleton className="h-8 w-8 rounded-full bg-gray-400" />
                </div>
            </div>
            <div className="flex h-[100px] w-full flex-col justify-between px-3 py-2">
                <Skeleton className="h-8 w-full" />

                <Skeleton className="h-8 w-26" />
            </div>
        </div>
    );
};

export const ProductCarouselSkeleton = () => {
    return (
        <div className="h-auto w-full">
            <ProductCarousel>
                {Array.from({ length: 4 }).map((_, index) => (
                    <CarouselItem
                        key={index}
                        className="basis-1/2 md:basis-1/3 lg:basis-1/4"
                    >
                        <ProductItemSkeleton />
                    </CarouselItem>
                ))}
            </ProductCarousel>
        </div>
    );
};

export const ProductsByCategorySkeleton = () => {
    return (
        <div className="grid gap-4 overflow-hidden md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
                <ProductItemSkeleton key={index} />
            ))}
        </div>
    );
};

export const CategoriesListSkeleton = () => {
    return (
        <div className="flex flex-col gap-2">
            {Array(5)
                .fill(0)
                .map((_, i) => (
                    <Skeleton key={i} className="h-4 w-24" />
                ))}
        </div>
    );
};
