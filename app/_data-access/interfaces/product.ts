import { Category } from './category';

export interface Product {
    id: number;
    title: string;
    price: number;
    description?: string;
    category: Category;
    images: string[];
}

export interface GetProducDTO extends Omit<Product, 'price'> {
    price: string;
    discountPercentage?: number;
    discountedPrice?: string;
}
