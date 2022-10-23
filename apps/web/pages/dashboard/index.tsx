import { FC, ReactNode } from 'react';

import { DatePicker } from '@/components/datepicker';
import { Layout } from '@/components/layout';
import { TableWeek } from '@/features/dashboard';
import {  HeaderDashboard, Title } from '@/features/dashboard/styles';
import { useIsoWeek } from '@/hooks/useIsoWeek';


type IProps = {
  children: ReactNode;
}

const Dashboard: FC<IProps> = () => {
  const [date, onChangeDate, disableDate] = useIsoWeek();

  return (
    <Layout>
      <HeaderDashboard>
        <Title>Semana atual</Title>
        <DatePicker
          onChangeDate={onChangeDate}
          disableDate={disableDate as (curr: unknown) => boolean[]}
        />
      </HeaderDashboard>
      <TableWeek date={date} />
    </Layout>
  )
}

export default Dashboard;
