import { Shirt } from 'lucide-react';
import ProductItem from '@/app/_components/product-item';
import { getProductsByCategory } from '@/app/_data-access/product/get-product-by-category';

interface ProductsByCategoryProps {
    slug: string;
}

const ProductsByCategory = async ({ slug }: ProductsByCategoryProps) => {
    const { data: products } = await getProductsByCategory({ slug });

    const isEmpty = !products || products.length === 0;

    return (
        <div>
            {!isEmpty ? (
                <div className="grid gap-4 overflow-hidden md:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductItem key={product.id} {...product} />
                    ))}
                </div>
            ) : (
                <div className="text-muted-foreground flex h-96 flex-col items-center justify-center text-center">
                    <Shirt className="text-primary mb-4 h-12 w-12" />
                    <h2 className="text-lg font-semibold">
                        Nenhum produto encontrado
                    </h2>
                    <p className="text-sm">
                        Tente buscar em outra categoria ou volte mais tarde.
                    </p>
                </div>
            )}
        </div>
    );
};

export default ProductsByCategory;
