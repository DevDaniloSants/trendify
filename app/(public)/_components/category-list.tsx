import { getCategories } from '@/app/_data-access/category/get-categories';
import Link from 'next/link';

const CategoryList = async () => {
    const { data: categories } = await getCategories();
    return (
        <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {categories?.map((category) => (
                <Link
                    href={`/category/${category.slug}`}
                    key={category.id}
                    className="hover:text-destructive cursor-pointer"
                >
                    {category.name}
                </Link>
            ))}
        </div>
    );
};

export default CategoryList;
