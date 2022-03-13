import { FC } from 'react';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '../../interfaces';

interface PokemonCardProps {
    pokemon: SmallPokemon;
}

export const PokemonCard: FC<PokemonCardProps> = ({ pokemon }) => {
    const { id, name, image } = pokemon;
    return (
        <Grid key={id} xs={6} sm={3} md={2} xl={1}>
            <Card hoverable clickable>
                <Card.Body css={{ p: 1 }}>
                    <Card.Image src={image} width="100%" height={140} />
                </Card.Body>
                <Card.Footer>
                    <Row justify="space-between">
                        <Text transform="capitalize">{name}</Text>
                        <Text>#{id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>
    );
};
