import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Grid, Card } from '@nextui-org/react';

interface FavoriteCardProps {
    pokemonId: number;
}

export const FavoriteCard: FC<FavoriteCardProps> = ({ pokemonId: id }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/pokemon/${id}`);
    };

    return (
        <Grid xs={6} sm={3} md={2} xl={1} onClick={handleClick}>
            <Card
                hoverable
                clickable
                css={{
                    padding: '1rem',
                }}
            >
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    alt={`${id}`}
                    width={'100%'}
                    height={140}
                />
            </Card>
        </Grid>
    );
};
