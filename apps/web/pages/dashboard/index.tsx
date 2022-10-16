import { FC, ReactNode } from 'react';

import { Layout } from '@/components/layout';
import { TableWeek } from '@/features/dashboard';
import { Description, HeaderDashboard, Title } from '@/features/dashboard/styles';

type IProps = {
  children: ReactNode;
}

const date = new Date()
.toLocaleDateString('pt-BR')
.toString();

const Dashboard: FC<IProps> = () => (
  <Layout>
    <HeaderDashboard>
      <Title>Semana atual</Title>
      <Description>{date}</Description>
    </HeaderDashboard>
    <TableWeek />
  </Layout>
);

export default Dashboard;
