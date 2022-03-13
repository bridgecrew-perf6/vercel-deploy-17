import { FC, useEffect, useState } from 'react';
import { Container, Text, Image } from '@nextui-org/react';
import { localFavorites } from '../../utils';

export const NoFavorites: FC = () => {
    return (
        <Container
            display="flex"
            direction="column"
            justify="center"
            alignItems="center"
            css={{
                height: 'calc(100vh - 100px)',
            }}
        >
            <Text h1>No hay favorito</Text>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
                alt="no favoritos"
                width={250}
                height={250}
                css={{
                    opacity: 0.1,
                }}
            />
        </Container>
    );
};
