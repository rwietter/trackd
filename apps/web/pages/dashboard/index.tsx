/* eslint-disable complexity */
/* eslint-disable react/style-prop-object */
/* eslint-disable import/order */
/* eslint-disable no-underscore-dangle */
import { FC, ReactNode, useState } from 'react';

import { Layout } from '@/components/layout';
import { TableWeek } from '@/features/dashboard';
import {  HeaderDashboard, Title } from '@/features/dashboard/styles';
import { DatePicker } from 'antd';


type IProps = {
  children: ReactNode;
}

interface ChangeDate {
  _d: string;
}

const Dashboard: FC<IProps> = () => {
  const [date, setDate] = useState('');

  const onChangeDate = async (value: ChangeDate) => {
    if (value?._d) {
      const [parsedDate] = new Date(value?._d)
      .toISOString()
      .split('T');
      setDate(parsedDate);
    }
  }

  return (
    <Layout>
      <HeaderDashboard>
        <Title>Semana atual</Title>
        <DatePicker
          onChange={onChangeDate as (date: unknown) => void}
          format="DD/MM/YYYY"
          size='large'
        />
      </HeaderDashboard>
      <TableWeek date={date} />
    </Layout>
  )
}

export default Dashboard;
