import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { Grid, Card, Button, Container, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti';

import { Layout } from '../../components/layouts';
import { Pokemon } from '../../interfaces';
import { pokeApi } from '../../api';
import { PokemonListResponse } from '../../interfaces/pokemon-list';
import { localFavorites } from '../../utils';

interface Props {
    pokemon: Pokemon;
}

const PokemonByNamePage: NextPage<Props> = ({ pokemon }) => {
    const { id, name, sprites } = pokemon;
    const [isFavorite, setFavorite] = useState(localFavorites.isFavorite(id));

    const handleToggleFavorite = () => {
        localFavorites.toggleFavorite(id);
        setFavorite(!isFavorite);

        if (!isFavorite) {
            confetti({
                zIndex: 999,
                particleCount: 100,
                spread: 160,
                angle: -100,
                origin: { x: 1, y: 0 },
            });
        }
    };

    return (
        <Layout>
            <Grid.Container css={{ marginTop: '5px' }} gap={2}>
                <Grid xs={12} sm={4}>
                    <Card hoverable css={{ padding: '30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={sprites?.other?.dream_world.front_default || '/no-image.ong'}
                                alt={name}
                                width="100%"
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>
                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text h1 transform="capitalize">
                                {name}
                            </Text>
                            <Button
                                color="gradient"
                                ghost={!isFavorite}
                                onClick={handleToggleFavorite}
                            >
                                {isFavorite ? 'En Favorito' : 'Guardar en favorito'}
                            </Button>
                        </Card.Header>
                        <Card.Body>
                            <Text h2>Sprites:</Text>
                            <Container display="flex" direction="row" justify="center" gap={0}>
                                <Image
                                    src={sprites.front_default}
                                    alt={name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={sprites.back_default}
                                    alt={name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={sprites.front_shiny}
                                    alt={name}
                                    width={100}
                                    height={100}
                                />
                                <Image
                                    src={sprites.back_shiny}
                                    alt={name}
                                    width={100}
                                    height={100}
                                />
                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const paths = data.results.map(({ name }) => ({ params: { name } }));
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { name } = params as { name: string };

    // Obtiene la información del pokemon por su nombre
    const { data: pokemon } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);

    return {
        props: { pokemon },
    };
};

export default PokemonByNamePage;
