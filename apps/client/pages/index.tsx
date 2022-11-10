import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import { SEO } from '../components/SEO';

const Layout = dynamic(() => import('../layouts/layout.component'), {
  loading: () => <p>...</p>,
});

const DashboardComponent = dynamic(
  () => import('../features/dashboard/dashboard.component'),
  {
    loading: () => <p>...</p>,
  }
);

const Home: NextPage = () => (
  <>
    <SEO
      title="Fichas Disponíveis"
      description="consulte a disponibilidade de atentimento"
    />
    <Layout>
      <DashboardComponent />
    </Layout>
  </>
);

export default Home;
