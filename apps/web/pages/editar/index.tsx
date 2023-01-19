/* eslint-disable import-helpers/order-imports */
import { GetServerSideProps } from 'next';

import { parseCookies } from 'nookies';


import { useIsoWeek } from 'ui';
import { DatePicker } from '@/components/datepicker';
import { Layout } from '@/components/layout';
import { HeaderDashboard, Title } from '@/features/dashboard/styles';
import { EditSchedule } from '@/features/edit-schedule';


const Delete = () => {
  const { date, disableEndWeek, onChangeDate } = useIsoWeek();
  return (
    <Layout>
      <HeaderDashboard>
        <Title>Semana atual</Title>
        <DatePicker
          onChangeDate={onChangeDate as any}
          disableDate={disableEndWeek as (curr: unknown) => boolean[]}
        />
      </HeaderDashboard>
      <EditSchedule date={date} />
    </Layout>
  )
}

export default Delete;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = parseCookies(ctx)['auth::token'];

  if (!session) {
    return {
      props: {
        authenticated: false
      },
      redirect: {
        destination: '/sign',
        permanent: false,
      }
    }
  }

  return {
    props: {
      authenticated: true
    },
  }
}