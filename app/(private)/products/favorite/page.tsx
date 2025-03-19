'use client';

import Container from '@/app/_components/container';
import { useFavorite } from '@/app/_hooks/useFavorite';

const FavoritePage = () => {
    const { favorite } = useFavorite();

    console.log(favorite);

    return (
        <Container>
            <h1>Favorite {favorite.length}</h1>
            {favorite.map((product) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                </div>
            ))}
        </Container>
    );
};

export default FavoritePage;
