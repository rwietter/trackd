import { FC, ReactNode } from 'react';

import { Divider } from 'antd';

import { DatePicker } from '@/components/datepicker';
import { Layout } from '@/components/layout';
import { TableRegisterRecord } from '@/features/create-record';
import { Header, Title } from '@/features/create-record/styles';
import { useIsoWeek } from '@/hooks/useIsoWeek';

type IProps = {
  children: ReactNode;
}

const RegisterRecord: FC<IProps> = () => {
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

export default RegisterRecord;
