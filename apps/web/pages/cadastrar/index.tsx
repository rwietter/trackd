import { FC, ReactNode } from 'react';

import { Layout } from '@/components/layout';
import { TableRegisterRecord } from '@/features/register-record';
import { Header, Title, Description } from '@/features/register-record/styles';

type IProps = {
  children: ReactNode;
}

const date = new Date()
.toLocaleDateString('pt-BR')
.toString();

const RegisterRecord: FC<IProps> = () => (
  <Layout>
    <Header>
      <Title>Semana atual</Title>
      <Description>{date}</Description>
    </Header>
    <TableRegisterRecord />
  </Layout>
);

export default RegisterRecord;
