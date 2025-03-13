import Container from '@/app/_components/container';
import { getCategories } from '@/app/_data-access/category/get-categories';
import { getProductsByCategory } from '@/app/_data-access/product/get-product-by-category';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductsByCategory from '../../_components/products-by-category';

const Products = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;
    const categories = await getCategories();
    const products = await getProductsByCategory({ slug });

    if (!slug) return notFound();

    return (
        <Container className="flex h-dvh flex-col gap-1 p-2 pt-10 sm:gap-10 md:flex-row md:p-0 xl:w-[1440px]">
            <div className="w-full md:w-60">
                <p className="flex cursor-pointer items-center gap-2 text-xl">
                    FILTROS
                </p>
                <div className={`border-border mt-6 border py-3 pl-5 sm:block`}>
                    <p className="mb-3 text-sm">CATEGORIAS</p>
                    <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                        {categories.map((category) => (
                            <Link
                                href={`/category/${category.slug}`}
                                key={category.id}
                                className="hover:text-destructive cursor-pointer"
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <ProductsByCategory slug={slug} products={products} />
        </Container>
    );
};

export default Products;
