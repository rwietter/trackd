// import { GetServerSideProps } from 'next';

import { Divider } from 'antd';

// import { parseCookies } from 'nookies';

import { DatePicker } from '@/components/datepicker';
import { Layout } from '@/components/layout';
import { TableRegisterRecord } from '@/features/create-record';
import { Header, Title } from '@/features/create-record/styles';
import { useIsoWeek } from '@/hooks/useIsoWeek';

import withAuth from '../../hoc/withAuth';

const RegisterRecord = () => {
  const [date, onChangeDate, disableDates] = useIsoWeek();

  return (
    <Layout>
      <Header>
        <Title>Agenda</Title>
        <DatePicker
          onChangeDate={onChangeDate}
          disableDate={disableDates as (curr: unknown) => boolean[]}
        />
      </Header>
      <TableRegisterRecord date={date} />
      <Divider />
    </Layout>
  )
}

export default withAuth(RegisterRecord);


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