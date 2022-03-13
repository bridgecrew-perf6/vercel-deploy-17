import React, { FC } from 'react';
import { Grid } from '@nextui-org/react';

import { FavoriteCard } from './FavoriteCard';

interface FavoritePokemonsProps {
    favorites: number[];
}

export const FavoritePokemons: FC<FavoritePokemonsProps> = ({ favorites }) => {
    return (
        <Grid.Container gap={2} justify="flex-start">
            {favorites.map((id) => (
                <FavoriteCard key={id} pokemonId={id} />
            ))}
        </Grid.Container>
    );
};
