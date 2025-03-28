import { Favorite } from '@prisma/client';

export interface IFavorite {
    userId: number;
    product: Favorite;
}
