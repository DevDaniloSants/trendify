import Container from '@/app/_components/container';

import { notFound } from 'next/navigation';
import ProductsByCategory from '../../_components/products-by-category';
import { Suspense } from 'react';
import CategoryList from '../../_components/category-list';
import {
    CategoriesListSkeleton,
    ProductsByCategorySkeleton,
} from '@/app/_components/skeletons';

const CategoryPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;

    if (!slug) return notFound();

    return (
        <Container className="flex h-full flex-col gap-1 p-2 pt-10 sm:gap-10 md:flex-row md:p-0 xl:w-[1440px]">
            <div className="h-full w-full px-2 md:w-60">
                <p className="flex cursor-pointer items-center gap-2 text-xl">
                    FILTROS
                </p>
                <div className={`border-border mt-6 border py-3 pl-5 sm:block`}>
                    <p className="mb-3 text-sm">CATEGORIAS</p>
                    <Suspense fallback={<CategoriesListSkeleton />}>
                        <CategoryList />
                    </Suspense>
                </div>
            </div>
            <div className="h-full min-h-full w-full">
                <h1 className="mb-8 text-xl">
                    Produtos da Categoria:
                    <span className="pl-2 font-bold">{slug}</span>
                </h1>
                <Suspense fallback={<ProductsByCategorySkeleton />}>
                    <ProductsByCategory slug={slug} />
                </Suspense>
            </div>
        </Container>
    );
};

export default CategoryPage;
