import { Favorite } from '@prisma/client';

export type IFavorite = Omit<Favorite, 'userId'>;
