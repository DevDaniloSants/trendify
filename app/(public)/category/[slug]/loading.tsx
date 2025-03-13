import Container from '@/app/_components/container';
import { Skeleton } from '@/app/_components/ui/skeleton';

export default function Loading() {
    return (
        <Container className="flex h-dvh flex-col gap-1 p-2 pt-10 sm:gap-10 md:flex-row md:p-0 xl:w-[1440px]">
            <div className="w-full md:w-60">
                <p className="my-2 flex items-center gap-2 text-xl">FILTROS</p>
                <div className="border-border mt-6 border py-3 pl-5 sm:block">
                    <p className="mb-3 text-sm">CATEGORIAS</p>
                    <div className="flex flex-col gap-2">
                        {Array(5)
                            .fill(0)
                            .map((_, i) => (
                                <Skeleton key={i} className="h-4 w-24" />
                            ))}
                    </div>
                </div>
            </div>

            <div className="flex-1">
                <Skeleton className="mb-6 h-8 w-48" />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {Array(8)
                        .fill(0)
                        .map((_, i) => (
                            <div key={i} className="flex flex-col space-y-3">
                                <Skeleton className="aspect-square w-full rounded-md" />
                                <Skeleton className="h-4 w-3/4" />
                                <Skeleton className="h-4 w-1/2" />
                            </div>
                        ))}
                </div>
            </div>
        </Container>
    );
}
