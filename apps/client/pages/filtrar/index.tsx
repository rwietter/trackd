import type { NextPage } from 'next';

import { SEO } from '../../components/SEO';
import { FilteringComponent } from '../../features/filtering';
import { Layout } from '../../layouts';

const Home: NextPage = () => (
  <>
    <SEO
      title="Fichas Disponíveis"
      description="consulte a disponibilidade de atentimento"
    />
    <Layout>
      <FilteringComponent />
    </Layout>
  </>
);

export default Home;
