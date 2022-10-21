/* eslint-disable import/order */
/* eslint-disable no-underscore-dangle */
import { FC, ReactNode, useState } from 'react';

import { Layout } from '@/components/layout';
import { TableRegisterRecord } from '@/features/register-record';
import { Header, Title } from '@/features/register-record/styles';
import { DatePicker } from 'antd';

type IProps = {
  children: ReactNode;
}

// const initialDate = new Date()
// .toLocaleDateString('pt-BR')
// .toString();

interface ChangeDate {
  _d: string;
}

const RegisterRecord: FC<IProps> = () => {
  const [date, setDate] = useState('');

  const onChangeDate = (value: ChangeDate) => {
    if (value?._d) {
      const [parsedDate] = new Date(value?._d)
      .toISOString()
      .split('T');
      console.log(parsedDate)
      setDate(parsedDate);
    }
  }
  return (
    <Layout>
      <Header>
        <Title>Agenda</Title>
        <DatePicker
          onChange={onChangeDate as (date: unknown) => void}
          format="DD/MM/YYYY"
          size='large'
        />
      </Header>
      <TableRegisterRecord date={date} />
    </Layout>
  )
}

export default RegisterRecord;
