import { formatCurrency } from '@/app/_helpers/formatCurrency';
import { GetProducDTO } from '../interfaces/product';

export const getProduct = async (id: string): Promise<GetProducDTO> => {
    const data = await fetch(process.env.API_URL + '/products/' + id).then(
        (res) => res.json()
    );

    if (!data) {
        throw new Error('Failed to fetch data');
    }

    const product: GetProducDTO = {
        ...data,
        price: formatCurrency(data.price),
    };

    return product;
};
