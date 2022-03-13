import Image from 'next/image';
import NextLink from 'next/link';
import { Link, Spacer, Text, useTheme } from '@nextui-org/react';

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

            <NextLink href="/" passHref>
                <Link>
                    <Text h2>P</Text>
                    <Text h3>okémon</Text>
                </Link>
            </NextLink>
            <Spacer css={{ flex: 1 }} />
            <NextLink href="/favorites" passHref>
                <Link>
                    <Text>Favoritos</Text>
                </Link>
            </NextLink>
        </nav>
    );
};
