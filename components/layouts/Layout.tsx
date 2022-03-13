import { FC } from 'react';
import Head from 'next/head';

interface LayoutProps {
    title?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title = 'Pokemon App' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="author" content="José Carlos Palma" />
                <meta name="description" content={`Información sobre el pokémon`} />
                <meta name="keywords" content={`pokémon, pokedex`} />
            </Head>

            {/* Navbar */}

            <main>{children}</main>
        </>
    );
};
