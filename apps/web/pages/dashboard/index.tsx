// import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

// import { parseCookies } from 'nookies';

import { DatePicker } from '@/components/datepicker';
import { Layout } from '@/components/layout';
import { TableWeek } from '@/features/dashboard';
import {  HeaderDashboard, Title } from '@/features/dashboard/styles';
import { useIsoWeek } from '@/hooks/useIsoWeek';

import withAuth from '../../hoc/withAuth';

const Dashboard = ({ authenticated }: any) => {
  const [date, onChangeDate, disableDate] = useIsoWeek({ flag: 'delete' });
  const router = useRouter();

  // if (!authenticated) {
  //   router.push('/sign')
  // }

  return (
    <Layout>
      <HeaderDashboard>
        <Title>Semana</Title>
        <DatePicker
          onChangeDate={onChangeDate}
          disableDate={disableDate as (curr: unknown) => boolean[]}
        />
      </HeaderDashboard>
      <TableWeek date={date} />
    </Layout>
  )
}

export default withAuth(Dashboard);

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const session = parseCookies(ctx)['auth::token'];

//   if (!session) {
//     return {
//       props: {
//         authenticated: false
//       },
//       redirect: {
//         destination: '/sign',
//         permanent: false,
//       }
//     }
//   }

//   return {
//     props: {
//       authenticated: true
//     },
//   }
// }