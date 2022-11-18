import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { SEO } from '../../components/SEO';

const Layout = dynamic(() => import('../../layouts/layout.component'), {
  ssr: false,
});

const FilteringComponent = dynamic<any>(
  () => import('../../features/filtering/filtering.component'),
  {
    ssr: false,
  }
);

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
