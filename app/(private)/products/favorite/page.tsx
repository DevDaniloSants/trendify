import Container from '@/app/_components/container';
import ProductItem from '@/app/_components/product-item';
import { SectionHeader, SectionTitle } from '@/app/_components/section-header';
import getFavoriteProducts from '@/app/_data-access/favorite/get-favorite-products-postgres';

const FavoritePage = async ({
    searchParams,
}: {
    searchParams: Promise<{ userId: string }>;
}) => {
    const resolvedSearchParams = await searchParams;
    const userId = Number(resolvedSearchParams.userId);

    const { products: favorites } = await getFavoriteProducts({ userId });

    return (
        <Container className="min-h-screen p-2">
            <SectionHeader>
                <SectionTitle>Meus produtos favoritos</SectionTitle>
            </SectionHeader>
            <div className="grid w-full gap-4 overflow-hidden md:grid-cols-2 lg:grid-cols-4">
                {favorites.map((product) => (
                    <ProductItem key={product.id} {...product} />
                ))}
                {favorites.length === 0 && (
                    <div className="col-span-full text-center">
                        <p className="font-semibold">
                            Você ainda não tem produtos favoritos
                        </p>
                    </div>
                )}
            </div>
        </Container>
    );
};

export default FavoritePage;
