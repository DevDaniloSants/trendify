import ProductItem from '@/app/_components/product-item';
import { GetProducDTO } from '@/app/_data-access/interfaces/product';

interface ProductsByCategoryProps {
    slug: string;
    products: GetProducDTO[];
}

const ProductsByCategory = ({ slug, products }: ProductsByCategoryProps) => {
    return (
        <div className="h-full min-h-dvh w-full">
            <h1 className="mb-8 text-xl">
                Produtos da Categoria:
                <span className="pl-2 font-bold">{slug}</span>
            </h1>
            {products.length > 0 ? (
                <div className="grid gap-4 overflow-hidden md:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <ProductItem key={product.id} {...product} />
                    ))}
                </div>
            ) : (
                <p>Nenhum produto encontrado.</p>
            )}
        </div>
    );
};

export default ProductsByCategory;
