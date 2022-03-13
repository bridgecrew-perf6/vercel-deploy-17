import { useState, useEffect } from 'react';
import { NextPage } from 'next';

import { Layout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon/FavoritePokemons';

const FavoritePage: NextPage = () => {
    const [favorites, setFavorites] = useState<number[]>([]);

    useEffect(() => {
        setFavorites(localFavorites.getFavorites());
    }, []);

    return (
        <Layout>
            {favorites.length === 0 ? <NoFavorites /> : <FavoritePokemons favorites={favorites} />}
        </Layout>
    );
};

export default FavoritePage;
