import dynamic from 'next/dynamic';

import { SEO } from '../../components/SEO';

const Components = {
  Layout: dynamic(() => import('../../layouts/layout.component'), {
    ssr: false,
  }),
  Filter: dynamic<any>(
    () => import('../../features/filtering/filtering.component'),
    {
      ssr: false,
    }
  ),
};

const Home = () => (
  <>
    <SEO
      title="Fichas Disponíveis"
      description="consulte a disponibilidade de atentimento"
    />
    <Components.Layout>
      <Components.Filter />
    </Components.Layout>
  </>
);

export default Home;
