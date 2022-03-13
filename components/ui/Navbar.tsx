import { Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';

export const Navbar = () => {
    const { theme } = useTheme();

    return (
        <nav
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'start',
                alignItems: 'center',
                padding: '0px 20px',
                backgroundColor: theme?.colors.gray900.value,
            }}
        >
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="icono"
                width={70}
                height={70}
            />
            <Text h2>P</Text>
            <Text h3>okémon</Text>
            <Spacer css={{ flex: 1 }} />
            <Text>Favoritos</Text>
        </nav>
    );
};
