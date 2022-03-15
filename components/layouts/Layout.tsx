import { FC } from 'react';
import Head from 'next/head';

import { Navbar } from '../ui';

interface LayoutProps {
    title?: string;
}

const origin = (typeof window !== 'undefined' && window.location.origin) || '';

export const Layout: FC<LayoutProps> = ({ children, title = 'Pokemon App' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="author" content="José Carlos Palma" />
                <meta name="description" content={`Información sobre el pokémon`} />
                <meta name="keywords" content={`pokémon, pokedex`} />

                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta es la página sobre ${title}`} />
                <meta property="og:image" content={`${origin}/images/banner.png`} />
            </Head>

            <Navbar />

            <main
                style={{
                    padding: '0px 20px',
                }}
            >
                {children}
            </main>
        </>
    );
};
