import { NextPage } from 'next';
import { Layout } from '../components/layouts';

const HomePage: NextPage = () => {
    return (
        <Layout title="Pokemon App">
            <h1>Pockemon Static</h1>
        </Layout>
    );
};

export default HomePage;
